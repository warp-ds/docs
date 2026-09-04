import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const prompt = await readFile(new URL('../.github/codex/prompts/docs-review.md', import.meta.url), 'utf8');

test('reviews reader value and hidden context assumptions', () => {
  assert.match(prompt, /### Reader value and conceptual consistency/);
  assert.match(prompt, /realistic reader question/);
  assert.match(prompt, /internal verification notes/);
  assert.match(prompt, /hidden assumptions/);
  assert.match(prompt, /every paged sequence as a carousel/);
  assert.match(prompt, /context-specific instructions conditional/);
});

test('keeps version and terminology feedback proportional', () => {
  assert.match(prompt, /reader-facing version note only when/);
  assert.match(prompt, /do not ask docs to describe how a claim was verified/);
  assert.match(prompt, /shared reader-facing concept/);
  assert.match(prompt, /taste-only copy preferences/);
  assert.match(prompt, /directly observed, non-blocking reflection/);
  assert.match(prompt, /do not turn accurate source naming into a docs blocker/);
});
