#!/usr/bin/env node
// Stage 3 browser verification (throwaway). Drives the locally installed Chrome via playwright-core.
// Usage: node redesign/scripts/browser-check.mjs <playwright-core dir> <origin> [--prod]
//   e.g. node redesign/scripts/browser-check.mjs /tmp/pw-tool/node_modules/playwright-core http://localhost:5199
import { mkdirSync } from 'node:fs';
import { createRequire } from 'node:module';

const [pwDir, origin = 'http://localhost:5199'] = process.argv.slice(2);
const prod = process.argv.includes('--prod');
const require = createRequire(import.meta.url);
const { chromium } = require(pwDir);
const B = `${origin}/docs`;
const SHOTS = `redesign/screenshots/${prod ? 'prod' : 'dev'}`;
mkdirSync(SHOTS, { recursive: true });

const results = [];
const record = (name, ok, detail = '') => {
  results.push({ name, ok, detail });
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${detail ? ` — ${detail}` : ''}`);
};

const browser = await chromium.launch({
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  headless: true,
});
const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await context.newPage();
const consoleErrors = [];
page.on('console', (msg) => {
  const t = msg.text();
  // browser default favicon request outside base
  if (/\/favicon\.ico$/.test(msg.location()?.url ?? '')) return;
  if (msg.type() === 'error' || /hydration/i.test(t)) consoleErrors.push(`${page.url()} :: ${t.slice(0, 200)}`);
});
page.on('response', (r) => {
  if (r.status() >= 400 && !/\/favicon\.ico$/.test(r.url()))
    consoleErrors.push(`${page.url()} :: HTTP ${r.status()} ${r.url()}`);
});
page.on('pageerror', (err) => consoleErrors.push(`${page.url()} :: pageerror ${err.message.slice(0, 200)}`));

const path = () => new URL(page.url()).pathname;
const settle = () => page.waitForLoadState('networkidle').catch(() => {});
async function go(p) {
  await page.goto(`${B}${p}`, { waitUntil: 'domcontentloaded' });
  await settle();
}
const trigger = () => page.locator('.platform-switcher .trigger').first();
async function sidebarGroupTitles() {
  return page.$$eval('.VPSidebar .group > .VPSidebarItem.level-0 > .item .text', (els) =>
    els.map((e) => e.textContent.trim()),
  );
}
async function choosePlatformByKeyboard(label) {
  await trigger().focus();
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press(label[0].toLowerCase()); // type-ahead
  await page.keyboard.press('Enter');
  await page.waitForTimeout(300);
  await settle();
}

// 1. Each top-level section renders, with the shell
for (const [p, h1] of [
  ['/', null],
  ['/get-started/', 'Get started'],
  ['/get-started/design/', 'Get started: Design'],
  ['/design-language/', 'Design Language'],
  ['/design-language/about/', null],
  ['/ios/foundations/', null],
  ['/android/foundations/', null],
  ['/about/', 'About Warp'],
  ['/about/whats-new/', null],
  ['/about/platform-coverage', 'Platform coverage'],
  ['/web/', 'Web'],
  ['/ios/', 'iOS'],
  ['/android/', 'Android'],
  ['/web/components/', 'Web components'],
  ['/ios/components/', 'iOS components'],
  ['/android/patterns/', 'Android patterns'],
  ['/patterns/', 'Patterns'],
]) {
  await go(p);
  const title = await page
    .locator('h1')
    .first()
    .textContent()
    .catch(() => '');
  const notFound = await page.locator('.NotFound').count();
  const hasSwitcher = p === '/' || (await page.locator('.platform-switcher').count()) > 0;
  record(
    `section ${p}`,
    !notFound && hasSwitcher && (!h1 || title.includes(h1)),
    `h1="${title.trim().slice(0, 40)}"${hasSwitcher ? '' : ' (no switcher)'}`,
  );
}
await go('/');
const header = await page.$$eval('.VPNavBar a, .VPNavBar button', (els) =>
  els.map((e) => (e.textContent || e.getAttribute('aria-label') || '').trim()).filter(Boolean),
);
record(
  'header: logo without Docs label, search, Changelog, About DS, Get started, GitHub',
  !header.some((h) => h === 'Docs' || h.endsWith(' Docs')) &&
    ['Changelog', 'About DS', 'Get started'].every((t) => header.some((h) => h.includes(t))) &&
    header.some((h) => /search/i.test(h)) &&
    header.some((h) => /github/i.test(h)),
  header.join(' | ').slice(0, 160),
);
await page.screenshot({ path: `${SHOTS}/home.png` });

// 2. Sidebar composition on a platform page and on a shared page
await go('/ios/components/button/code');
const groups = await sidebarGroupTitles();
record(
  'iOS page sidebar: shared sections + switcher + iOS tree',
  ['Get started', 'Design Language', 'About Warp', 'Overview', 'Foundation', 'Components', 'Patterns'].every((g) =>
    groups.includes(g),
  ) && (await trigger().textContent()).includes('iOS'),
  groups.join(' | '),
);
const activeLink = await page
  .locator('.VPSidebar .is-active .text')
  .last()
  .textContent()
  .catch(() => '');
record('active item highlighted in platform tree', activeLink.trim() === 'Code', `active="${activeLink.trim()}"`);
await page.screenshot({ path: `${SHOTS}/ios-button-code.png` });

// 3. Switcher keeps you on the same page kind (component on all three platforms)
await choosePlatformByKeyboard('Android');
record('switch iOS→Android on Button/code keeps page', path() === '/docs/android/components/button/code', path());
await choosePlatformByKeyboard('Web');
record('switch Android→Web on Button/code keeps page', path() === '/docs/web/components/button/code', path());
const tabs = await page.$$eval('.component-nav .frameworks a', (els) => els.map((e) => e.textContent.trim()));
record(
  'Web code tabs: Elements + legacy',
  tabs[0] === 'Elements' && tabs.includes('React (legacy)') && tabs.includes('Vue (legacy)'),
  tabs.join(', '),
);
const SEGMENTS = '.page-context .switch .seg';
const segments = (els) =>
  els.map(
    (e) =>
      `${e.textContent.replace(' (not documented)', '').trim()}${e.getAttribute('aria-current') ? '*' : ''}${e.classList.contains('unavailable') ? '-' : ''}`,
  );
const availability = await page.$$eval(SEGMENTS, segments);
record(
  'platform switch in the page header (Web current, iOS, Android)',
  availability.join(',') === 'Web*,iOS,Android',
  availability.join(','),
);

const pageTabs = await page.$$eval('.page-tabs a', (els) =>
  els.map((e) => `${e.textContent.trim()}${e.getAttribute('aria-current') ? '*' : ''}`),
);
record(
  'page tabs on Web Button code page',
  pageTabs.join(',') === 'Overview,Usage,Code*,Accessibility',
  pageTabs.join(','),
);
await page.click('.page-tabs a:has-text("Usage")');
await settle();
record('page tab navigates to Usage', path() === '/docs/web/components/button/usage', path());
{
  // the page header (context row, H1, tabs) is identical on every tab: no content jump
  const headerBox = async () =>
    page.evaluate(() => {
      const h1 = document.querySelector('.vp-doc h1');
      const tabsEl = document.querySelector('.page-tabs');
      return {
        h1: h1?.textContent.trim().replace(/\s+/g, ' '),
        y: h1?.getBoundingClientRect().y,
        tabs: tabsEl?.getBoundingClientRect().y,
        x: h1?.getBoundingClientRect().x,
      };
    });
  const usage = await headerBox();
  await go('/web/components/button/code-react');
  const react = await headerBox();
  await go('/web/components/button/overview');
  const overview = await headerBox();
  const same = [react, overview].every(
    (b) => b.h1 === usage.h1 && b.y === usage.y && b.tabs === usage.tabs && b.x === usage.x,
  );
  record('header identical on Usage, Code (React) and Overview', same, JSON.stringify([usage, react, overview]));
  const hiddenH2 = await go('/web/components/button/code-react').then(() =>
    page.evaluate(() => {
      const h2 = [...document.querySelectorAll('.vp-doc h2')].find((h) => h.textContent.includes('React'));
      return h2 ? getComputedStyle(h2).position === 'absolute' : null;
    }),
  );
  record('framework H2 visually hidden by CSS (kept for search)', hiddenH2 === true, String(hiddenH2));
}

// Design Language cross-links (both directions), in the same header switch as platforms
await go('/design-language/dark-mode/');
const dlSegs = await page.$$eval(SEGMENTS, segments).catch(() => []);
record(
  'Design Language page: switch shows Design Language*, Web (menu), iOS-, Android-',
  dlSegs.join(',') === 'Design Language*,Web,iOS-,Android-',
  dlSegs.join(','),
);
await page.click('.page-context button.seg');
const menu = await page.$$eval('.page-context .menu a', (els) => els.map((e) => e.textContent.trim()));
const expanded = await page.getAttribute('.page-context button.seg', 'aria-expanded');
record('several Web pages on one topic open a menu', expanded === 'true' && menu.length === 2, menu.join(' | '));
await page.keyboard.press('Escape');
const closed = await page.getAttribute('.page-context button.seg', 'aria-expanded');
const focusBack = await page.evaluate(() => document.activeElement?.matches('.page-context button.seg'));
record('Escape closes the menu and returns focus', closed === 'false' && focusBack, `${closed} ${focusBack}`);
await go('/web/foundations/dark-mode/');
const back = await page
  .locator('.page-context .switch a.seg')
  .first()
  .getAttribute('href')
  .catch(() => '');
record('platform foundation page links back to Design Language', back === '/docs/design-language/dark-mode/', back);

// Platform foundations: switching keeps the same foundation topic
await go('/ios/foundations/tokens');
const iosBack = await page
  .locator('.page-context .switch a.seg')
  .first()
  .getAttribute('href')
  .catch(() => '');
record('iOS Tokens links back to Design Language › Tokens', iosBack === '/docs/design-language/tokens/intro/', iosBack);
await choosePlatformByKeyboard('Android');
record('switch iOS→Android on Foundation › Tokens keeps topic', path() === '/docs/android/foundations/tokens', path());
await go('/design-language/tokens/intro/');
const tokenSegs = await page.$$eval(SEGMENTS, segments).catch(() => []);
record(
  'Design Language › Tokens: Web, iOS and Android all linked',
  tokenSegs.join(',') === 'Design Language*,Web,iOS,Android',
  tokenSegs.join(','),
);

// Patterns are their own section: no Foundation/Components under the switcher
await go('/ios/patterns/empty-states/usage');
const pgroups = await sidebarGroupTitles();
record(
  'pattern page sidebar: patterns tree only (no Foundation/Components)',
  pgroups.includes('All iOS patterns') &&
    pgroups.includes('Empty states') &&
    !pgroups.includes('Components') &&
    !pgroups.includes('Foundation'),
  pgroups.join(' | '),
);
await go('/patterns/');
const patternCards = await page.$$eval('.vp-doc .dc-grid .dc-card', (els) =>
  els.map((e) => e.innerText.replace(/\s+/g, ' ').trim()),
);
record(
  '/patterns/ lists Empty states on iOS and Android only',
  patternCards.length === 1 && /iOS · Android/.test(patternCards[0]) && !/Web/.test(patternCards[0]),
  patternCards.join(' || '),
);
await go('/');
const homeSidebar = await page.locator('.VPSidebar .platform-switcher').count();
record('home page shows the sidebar with the switcher', homeSidebar === 1, `switchers=${homeSidebar}`);
{
  // one card per platform, the whole card links to the platform overview (no deeper links)
  const cards = await page.$$eval('.home .platforms > li', (lis) =>
    lis.map((li) => [...li.querySelectorAll('a')].map((a) => a.getAttribute('href')).join('+')),
  );
  record(
    'home platform cards: one link each, to the platform overview',
    cards.join(',') === '/docs/web/,/docs/ios/,/docs/android/',
    cards.join(','),
  );
  const collab = await page.$$eval('.collaborate a', (els) => els.length);
  record('home "Help evolve Warp": Slack + 3 action cards', collab === 4, `links=${collab}`);
}
{
  // platform overview pages: card grid with live counts
  await go('/ios/');
  const ov = await page.$$eval('.platform-overview a', (els) => els.map((e) => e.getAttribute('href')));
  record(
    'iOS overview cards: Get started, Foundation, Components, Patterns + shared',
    ov.join(',') ===
      '/docs/get-started/ios/,/docs/ios/foundations/,/docs/ios/components/,/docs/ios/patterns/,/docs/design-language/,/docs/about/platform-coverage',
    ov.join(','),
  );
  await go('/web/');
  const web = await page.$$eval('.platform-overview .dc-grid:first-of-type .dc-card', (els) =>
    els.map((e) => `${e.querySelector('.dc-card__title').textContent}${e.tagName === 'A' ? '' : '(disabled)'}`),
  );
  record(
    'Web overview: same four cards, Patterns disabled (not a link)',
    web.join(',') === 'Get started,Foundation,Components,Patterns(disabled)',
    web.join(','),
  );
}
{
  // Theme control: in the tab row on tabs with live examples only, same row height on every tab
  const themeState = () =>
    page.evaluate(() => ({
      header: document.querySelector('.tab-row .theme-switcher label')?.textContent.trim() ?? null,
      value: document.querySelector('.tab-row select')?.value ?? null,
      inline: document.querySelectorAll('.vp-doc .theme-switcher:not(.in-header)').length,
      row: Math.round(document.querySelector('.tab-row')?.getBoundingClientRect().height ?? 0),
    }));
  await page.evaluate(() => localStorage.removeItem('warpTheme'));
  await go('/web/components/button/overview');
  const ov = await themeState();
  await go('/web/components/button/usage');
  const us = await themeState();
  await go('/ios/components/button/code');
  const ios = await themeState();
  record(
    'Theme in the tab row on every tab (Overview, Usage, iOS Code), default Finn light, no inline bar, same row height',
    [ov, us, ios].every((t) => t.header === 'Theme' && t.value === 'finn-no' && t.inline === 0) && ov.row === us.row,
    `${JSON.stringify(ov)} | ${JSON.stringify(us)} | ${JSON.stringify(ios)}`,
  );
}
{
  // sidebar rhythm: every top-level item (group or link) has the same bottom padding
  await go('/web/');
  const pads = await page.$$eval('.VPSidebar .group > .VPSidebarItem.level-0', (els) => [
    ...new Set(els.map((e) => getComputedStyle(e).paddingBottom)),
  ]);
  record('sidebar top-level items share one bottom padding', pads.length === 1, pads.join(','));
}
{
  // status badges are back in the header, the same on every tab
  const badges = async () =>
    page.$$eval('.component-nav .status .ds-badge', (els) =>
      els.map(
        (e) =>
          `${e.querySelector('.ds-badge__framework').textContent} ${e.querySelector('.ds-badge__status').textContent}`,
      ),
    );
  await go('/web/components/alert/overview');
  const overview = await badges();
  await go('/web/components/alert/accessibility');
  const a11y = await badges();
  record(
    'status badges on Web Alert: Elements released + legacy frameworks, same on every tab',
    overview.join(',') === 'Elements released,React legacy,React 19 legacy,Vue legacy' &&
      a11y.join(',') === overview.join(','),
    `${overview.join(',')} | ${a11y.join(',')}`,
  );
  const seeAlso = await page.$$eval('.vp-doc p', (ps) => ps.some((p) => p.textContent.startsWith('See also')));
  record('Alert accessibility page links related components (See also)', seeAlso, `seeAlso=${seeAlso}`);
  await go('/ios/components/toast/code');
  const toast = await badges();
  record('iOS Toast badge shows deprecated', toast.join(',') === 'iOS deprecated', toast.join(','));
}

// 4. Single-platform components fall back to the components index
await go('/web/components/breadcrumbs/overview');
await choosePlatformByKeyboard('iOS');
record('Breadcrumbs (Web only) → iOS falls back to /ios/components/', path() === '/docs/ios/components/', path());
await go('/ios/components/confirmation-dialog/overview');
const cdAvail = await page.$$eval(SEGMENTS, segments);
record(
  'Confirmation dialog: iOS only, others unavailable',
  cdAvail.join(',') === 'Web-,iOS*,Android-',
  cdAvail.join(','),
);
await choosePlatformByKeyboard('Android');
record('Confirmation dialog (iOS only) → Android falls back', path() === '/docs/android/components/', path());

// 5. Shared page: switcher swaps the tree only, remembered after reload
await go('/design-language/typography/');
const before = path();
await choosePlatformByKeyboard('Android');
// the platform tree starts with that platform's Overview link
const treeOverview = () =>
  page.$$eval('.VPSidebar .group > .VPSidebarItem.level-0.is-link > .item a', (els) =>
    els.map((e) => e.getAttribute('href')).find((h) => /^\/docs\/(web|ios|android)\/$/.test(h)),
  );
let overviewHref = await treeOverview();
record(
  'shared page: switching swaps tree, no navigation',
  path() === before && overviewHref === '/docs/android/',
  `${path()} | ${overviewHref}`,
);
await page.reload();
await settle();
await page.waitForTimeout(300);
overviewHref = await treeOverview();
record(
  'shared page: choice remembered after reload',
  (await trigger().textContent()).includes('Android') && overviewHref === '/docs/android/',
  (await trigger().textContent()).trim(),
);

// 6. Seeded notice
await go('/ios/components/alert/overview');
const notice = await page
  .locator('.seeded-notice')
  .textContent()
  .catch(() => '');
record('seeded notice on seeded iOS page', /Pending iOS review/.test(notice), notice.trim().slice(0, 80));

// 7. Keyboard + ARIA of the switcher
await go('/web/components/button/overview');
const t = trigger();
await t.focus();
const aria0 = await t.evaluate((el) => ({
  haspopup: el.getAttribute('aria-haspopup'),
  expanded: el.getAttribute('aria-expanded'),
  controls: el.getAttribute('aria-controls'),
  name: el
    .getAttribute('aria-labelledby')
    .split(' ')
    .map((id) => document.getElementById(id)?.textContent.trim())
    .join(' '),
}));
record(
  'trigger ARIA (haspopup=listbox, expanded=false, name)',
  aria0.haspopup === 'listbox' && aria0.expanded === 'false' && aria0.name === 'Platform Web',
  JSON.stringify(aria0),
);
await page.keyboard.press('ArrowDown');
const openState = await page.evaluate(() => {
  const list = document.querySelector('.platform-switcher [role=listbox]');
  const active = list && document.getElementById(list.getAttribute('aria-activedescendant'));
  return {
    focusedIsList: document.activeElement === list,
    visible: list && getComputedStyle(list).display !== 'none',
    active: active?.textContent.trim(),
    selected: [...list.querySelectorAll('[role=option][aria-selected=true]')].map((o) => o.textContent.trim()),
    expanded: document.querySelector('.platform-switcher .trigger').getAttribute('aria-expanded'),
  };
});
record(
  'ArrowDown opens listbox, focuses it, active=selected',
  openState.focusedIsList && openState.visible && openState.active === 'Web' && openState.expanded === 'true',
  JSON.stringify(openState),
);
const activeAfter = async (key) => {
  await page.keyboard.press(key);
  return page.evaluate(() => {
    const list = document.querySelector('.platform-switcher [role=listbox]');
    return document.getElementById(list.getAttribute('aria-activedescendant'))?.textContent.trim();
  });
};
const seq = [
  await activeAfter('ArrowDown'),
  await activeAfter('End'),
  await activeAfter('Home'),
  await activeAfter('a'),
];
record('ArrowDown/End/Home/type-ahead move active option', seq.join(',') === 'iOS,Android,Web,Android', seq.join(','));
await page.keyboard.press('Escape');
const afterEsc = await page.evaluate(() => ({
  focusOnTrigger: document.activeElement === document.querySelector('.platform-switcher .trigger'),
  expanded: document.querySelector('.platform-switcher .trigger').getAttribute('aria-expanded'),
}));
record(
  'Escape closes and returns focus to trigger (no navigation)',
  afterEsc.focusOnTrigger && afterEsc.expanded === 'false' && path() === '/docs/web/components/button/overview',
  JSON.stringify(afterEsc),
);
await page.keyboard.press('Enter');
await page.keyboard.press('Tab');
const afterTab = await page.evaluate(() =>
  document.querySelector('.platform-switcher .trigger').getAttribute('aria-expanded'),
);
record('Tab closes the listbox', afterTab === 'false', `expanded=${afterTab}`);
await t.focus();
await page.keyboard.press(' ');
await page.keyboard.press('ArrowDown');
await page.keyboard.press('Enter');
await page.waitForTimeout(300);
await settle();
const live = await page
  .locator('.platform-switcher [aria-live]')
  .first()
  .textContent()
  .catch(() => '');
record(
  'Space opens, Enter selects iOS → navigates to same page',
  path() === '/docs/ios/components/button/overview',
  `${path()} live="${live.trim()}"`,
);

// 8. Redirects: in-app navigation, back/forward, hard load
await go('/web/');
await page.evaluate(() => {
  const a = document.createElement('a');
  a.href = '/docs/components/button/frameworks/ios#syntax';
  a.id = 'old-link';
  a.textContent = 'old link';
  document.querySelector('.vp-doc').append(a);
});
await page.click('#old-link');
await page.waitForTimeout(800);
await settle();
record(
  'in-app link to old URL redirects (router hook)',
  path() === '/docs/ios/components/button/code' && new URL(page.url()).hash === '#syntax',
  page.url().replace(origin, ''),
);
await page.goBack();
await settle();
await page.waitForTimeout(500);
record('back button returns to the previous page', path() === '/docs/web/', path());
await page.goto(`${B}/components/button/frameworks/ios`, { waitUntil: 'domcontentloaded' });
await page.waitForURL(/\/docs\/ios\/components\/button\/code/, { timeout: 8000 }).catch(() => {});
await settle();
record(
  `hard load of old deep URL redirects (${prod ? 'stub page' : '404 fallback'})`,
  path() === '/docs/ios/components/button/code',
  path(),
);
for (const [from, to] of [
  ['/blog/', '/docs/about/whats-new/'],
  ['/components/toast/overview', '/docs/web/components/snackbar/overview'],
  ['/foundations/css-classes/margin', '/docs/web/foundations/css-classes/margin'],
  ['/get-started/developers/web/', '/docs/get-started/web/'],
  ['/foundations/typography/', '/docs/design-language/typography/'],
  ['/patterns/empty-states/overview', '/docs/ios/patterns/empty-states/overview'],
]) {
  await page.goto(`${B}${from}`, { waitUntil: 'domcontentloaded' });
  await page.waitForURL((u) => u.pathname === to, { timeout: 8000 }).catch(() => {});
  record(`hard load ${from}`, path() === to, path());
}

// 9. Search results labelled by platform
await go('/web/');
await page.click('.VPNavBarSearch button');
await page.waitForSelector('.VPLocalSearchBox input', { timeout: 8000 });
await page.fill('.VPLocalSearchBox input', 'button overview');
await page.waitForSelector('.VPLocalSearchBox .results li', { timeout: 8000 }).catch(() => {});
await page.waitForTimeout(500);
const hits = await page.$$eval('.VPLocalSearchBox .results li', (els) =>
  els.slice(0, 8).map((e) => e.textContent.replace(/\s+/g, ' ').trim()),
);
record(
  'search results labelled by platform',
  hits.some((h) => h.includes('Web ›')) && hits.some((h) => h.includes('iOS ›')),
  hits.slice(0, 4).join(' || '),
);
await page.keyboard.press('Escape');

// 10. Mobile drawer
await page.setViewportSize({ width: 390, height: 844 });
await go('/android/components/button/code');
await page.click('.VPLocalNav .menu');
await page.waitForTimeout(400);
const drawer = await page.evaluate(() => {
  const sb = document.querySelector('.VPSidebar');
  return {
    open: sb.classList.contains('open'),
    switcher: !!sb.querySelector('.platform-switcher'),
    groups: [...sb.querySelectorAll('.group > .VPSidebarItem.level-0 > .item .text')].map((e) => e.textContent.trim()),
  };
});
record(
  'mobile drawer: shared sections + switcher + Android tree',
  drawer.open &&
    drawer.switcher &&
    drawer.groups.includes('Get started') &&
    drawer.groups.includes('Overview') &&
    drawer.groups.includes('Components'),
  drawer.groups.join(' | '),
);
await page.screenshot({ path: `${SHOTS}/mobile-drawer.png` });
await choosePlatformByKeyboard('iOS');
record('mobile: switch Android→iOS keeps page', path() === '/docs/ios/components/button/code', path());
await page.click('.VPNavBarHamburger');
await page.waitForTimeout(300);
const screenCta = await page.locator('.VPNavScreen .nav-cta').count();
record('mobile nav screen has Get started CTA', screenCta === 1, `count=${screenCta}`);

record(
  'no console errors / hydration warnings',
  consoleErrors.length === 0,
  consoleErrors.slice(0, 6).join(' || ') || 'none',
);

await browser.close();
const failed = results.filter((r) => !r.ok);
console.log(`\n${results.length - failed.length}/${results.length} checks passed`);
process.exit(failed.length ? 1 : 0);
