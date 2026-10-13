import assert from 'node:assert/strict';
import test from 'node:test';
import { deflateSync } from 'node:zlib';

import { auditMarkdown, introducedFindings, pngHasTransparentPixel } from './review-docs.mjs';

function chunk(type, data) {
  const result = Buffer.alloc(12 + data.length);
  result.writeUInt32BE(data.length, 0);
  result.write(type, 4, 4, 'ascii');
  data.copy(result, 8);
  return result;
}

function rgbaPng(alpha) {
  const header = Buffer.alloc(13);
  header.writeUInt32BE(1, 0);
  header.writeUInt32BE(1, 4);
  header[8] = 8;
  header[9] = 6;
  const pixels = Buffer.from([0, 20, 40, 60, alpha]);
  return Buffer.concat([
    Buffer.from('89504e470d0a1a0a', 'hex'),
    chunk('IHDR', header),
    chunk('IDAT', deflateSync(pixels)),
    chunk('IEND', Buffer.alloc(0)),
  ]);
}

test('detects a transparent pixel in an RGBA PNG', () => {
  assert.equal(pngHasTransparentPixel(rgbaPng(0)), true);
});

test('rejects an RGBA PNG whose alpha channel is fully opaque', () => {
  assert.equal(pngHasTransparentPixel(rgbaPng(255)), false);
});

test('rejects a PNG without a valid signature', () => {
  assert.throws(() => pngHasTransparentPixel(Buffer.from('not a png')), /Invalid PNG signature/);
});

test('requires exactly one Do and one Do not in each DoDont', () => {
  const findings = auditMarkdown(
    'docs/components/example/usage.md',
    `# Example

Description.

<ComponentsStatus />

<DoDont>
<Do imgurl="/components/missing.svg" imgalt="Example one.">
<Do imgurl="/components/missing.svg" imgalt="Example two.">
</DoDont>

<component-questions />`,
  );
  assert.ok(findings.some((finding) => finding.message.includes('exactly one <Do> and one <Do not>')));
});

test('rejects DoDont examples on accessibility pages', () => {
  const findings = auditMarkdown(
    'docs/components/example/accessibility.md',
    `# Accessibility

Description.

<ComponentsStatus />

<DoDont></DoDont>

<component-questions />`,
  );
  assert.ok(findings.some((finding) => finding.message.includes('Accessibility pages must not contain')));
});

test('audits images on non-core component pages without requiring core-page structure', () => {
  const findings = auditMarkdown(
    'docs/components/example/styling.md',
    `# Styling

![](/components/missing.svg)`,
    { requireStructure: false },
  );
  assert.ok(findings.some((finding) => finding.message.includes('Referenced image does not exist')));
  assert.ok(!findings.some((finding) => finding.message.includes('<ComponentsStatus />')));
  assert.ok(!findings.some((finding) => finding.message.includes('<component-questions />')));
});

test('does not report unchanged legacy findings', () => {
  const legacy = [{ level: 'error', file: 'usage.md', line: 10, message: 'Image is missing alt text.' }];
  const current = [
    { level: 'error', file: 'usage.md', line: 12, message: 'Image is missing alt text.' },
    { level: 'error', file: 'usage.md', line: 20, message: 'Image is missing alt text.' },
  ];
  assert.deepEqual(introducedFindings(current, legacy), [current[1]]);
});

test('reports a finding on an added line when an identical legacy finding was removed', () => {
  const legacy = [{ level: 'error', file: 'usage.md', line: 10, message: 'Image is missing alt text.' }];
  const introduced = { level: 'error', file: 'usage.md', line: 30, message: 'Image is missing alt text.' };
  assert.deepEqual(introducedFindings([introduced], legacy, new Set([30])), [introduced]);
});
