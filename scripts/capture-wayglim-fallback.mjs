#!/usr/bin/env node
// Captures the still images shown behind the home hero's Wayglim animation until it draws, and instead of it where
// it can't run (no WebGL2, script failed to load):
//   docs/.vitepress/wayglim/generated/fallback-light.webp  on white, as the hero uses it in light mode
//   docs/.vitepress/wayglim/generated/fallback-dark.webp   on black, as the hero uses it in dark mode
// Renders the synced engine and settings (pnpm sync-wayglim, which also runs this) in headless Chrome with
// reduced motion, so the frame is the one the animation starts on (settings.startSeconds). The image has the
// studio aspect ratio: the engine covers its box with that ratio from the centre, and so does
// `background-size: cover` on the hero, so the image lines up with the animation at every hero size.
// Needs Google Chrome or Chromium (set CHROME_PATH if it is not found).
//   pnpm wayglim-fallback
import { spawn } from 'node:child_process';
import { existsSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { createServer } from 'node:http';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const outDir = join(dirname(fileURLToPath(import.meta.url)), '../docs/.vitepress/wayglim/generated');
const WIDTH = 1920;
const QUALITY = 82;

const settingsSource = readFileSync(join(outDir, 'settings.js'), 'utf8');
const aspect = Number(settingsSource.match(/"aspectRatio":([\d.]+)/)?.[1]) || 16 / 9;
const HEIGHT = Math.round(WIDTH / aspect);

const chromePath = [
  process.env.CHROME_PATH,
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/Applications/Chromium.app/Contents/MacOS/Chromium',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
  '/usr/bin/chromium-browser',
].find((path) => path && existsSync(path));
if (!chromePath) {
  console.error('Chrome not found: set CHROME_PATH to a Chrome or Chromium binary to capture the Wayglim fallback.');
  process.exit(1);
}

// the page: the engine in a box of the studio aspect ratio, with the hero's overrides (see HomeLanding.vue)
const page = `<!doctype html><html><body style="margin:0">
<div id="box" style="position:relative;width:${WIDTH}px;height:${HEIGHT}px;overflow:hidden"></div>
<script type="module">
  import mountWayglim from './engine.js';
  import { WAYGLIM_SETTINGS } from './settings.js';
  const dark = location.search === '?dark';
  mountWayglim(document.getElementById('box'), {
    ...WAYGLIM_SETTINGS,
    background: dark ? [0, 0, 0] : [1, 1, 1],
    maxPixelRatio: 1,
  });
  const frames = (n) => (n ? requestAnimationFrame(() => frames(n - 1)) : (document.title = 'ready'));
  frames(4);
</script></body></html>`;

const server = createServer((req, res) => {
  const name = req.url.split(/[?#]/)[0];
  if (name === '/') return res.writeHead(200, { 'content-type': 'text/html' }).end(page);
  if (name === '/engine.js' || name === '/settings.js') {
    return res.writeHead(200, { 'content-type': 'text/javascript' }).end(readFileSync(join(outDir, name.slice(1))));
  }
  res.writeHead(404).end();
});
await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));

const profile = mkdtempSync(join(tmpdir(), 'wayglim-capture-'));
const chrome = spawn(
  chromePath,
  [
    '--headless=new',
    // software WebGL: the same result on any machine, GPU or not
    '--use-angle=swiftshader',
    '--enable-unsafe-swiftshader',
    '--hide-scrollbars',
    '--no-first-run',
    '--no-default-browser-check',
    '--remote-debugging-port=0',
    `--user-data-dir=${profile}`,
    'about:blank',
  ],
  { stdio: 'ignore' },
);

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
let ws;
try {
  let port;
  for (let i = 0; i < 100 && !port; i++) {
    await sleep(100);
    port = existsSync(join(profile, 'DevToolsActivePort'))
      ? readFileSync(join(profile, 'DevToolsActivePort'), 'utf8').split('\n')[0]
      : undefined;
  }
  if (!port) throw new Error('Chrome did not start');
  const targets = await (await fetch(`http://127.0.0.1:${port}/json/list`)).json();
  ws = new WebSocket(targets.find((t) => t.type === 'page').webSocketDebuggerUrl);
  await new Promise((resolve, reject) => {
    ws.addEventListener('open', resolve);
    ws.addEventListener('error', reject);
  });
  let id = 0;
  const pending = new Map();
  ws.addEventListener('message', (event) => {
    const message = JSON.parse(event.data);
    if (pending.has(message.id)) {
      pending.get(message.id)(message);
      pending.delete(message.id);
    }
  });
  const send = (method, params = {}) =>
    new Promise((resolve, reject) => {
      const messageId = ++id;
      pending.set(messageId, (message) =>
        message.error ? reject(new Error(`${method}: ${message.error.message}`)) : resolve(message.result),
      );
      ws.send(JSON.stringify({ id: messageId, method, params }));
    });
  const evaluate = async (expression) =>
    (await send('Runtime.evaluate', { expression, returnByValue: true })).result.value;

  await send('Emulation.setDeviceMetricsOverride', {
    width: WIDTH,
    height: HEIGHT,
    deviceScaleFactor: 1,
    mobile: false,
  });
  await send('Emulation.setEmulatedMedia', { features: [{ name: 'prefers-reduced-motion', value: 'reduce' }] });

  for (const theme of ['light', 'dark']) {
    await send('Page.navigate', { url: `http://127.0.0.1:${server.address().port}/?${theme}` });
    let ready = false;
    for (let i = 0; i < 300 && !ready; i++) {
      await sleep(100);
      ready = (await evaluate('document.title')) === 'ready';
    }
    if (!ready) throw new Error(`the ${theme} frame did not render`);
    if (!(await evaluate("!!document.querySelector('#box canvas')"))) {
      throw new Error('WebGL2 is not available in headless Chrome, so the engine did not draw');
    }
    await sleep(500);
    const shot = await send('Page.captureScreenshot', {
      format: 'webp',
      quality: QUALITY,
      clip: { x: 0, y: 0, width: WIDTH, height: HEIGHT, scale: 1 },
    });
    const file = join(outDir, `fallback-${theme}.webp`);
    writeFileSync(file, Buffer.from(shot.data, 'base64'));
    console.log(`Wayglim fallback (${theme}, ${WIDTH}×${HEIGHT}) written to ${file}`);
  }
} finally {
  ws?.close();
  chrome.kill();
  server.close();
  await sleep(300);
  rmSync(profile, { recursive: true, force: true });
}
