<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import DsSearchInput from './DsSearchInput.vue';
import data from './tokens.json';

// Data comes from `pnpm generate-tokens`. Do not edit tokens.json by hand.
const descriptionPlaceholder = 'Add description here';

// Group descriptions, keyed by `{category}-{intent}`. Groups without an entry show the placeholder.
const descriptions = {
  'background-default': 'Default background colour.',
  'background-subtle': 'For areas needing a highlighting.',
  'background-disabled': 'For disabled elements, indicating non-interactive elements.',
  'background-disabled-subtle': 'Subtle version of “Disabled”.',
  'background-selected': 'For selected elements to highlight active choices.',
  'background-inverted': 'For specific high-contrast surfaces, components, or accents that flip the surrounding theme.',
  'background-primary': 'For main elements, such as primary button.',
  'background-primary-subtle': 'Subtle variant of “Primary”.',
  'background-secondary': 'For less important elements.',
  'background-positive': 'For positive feedback elements, like success badges, alerts, etc.',
  'background-positive-subtle': 'Subtle variant of “Positive”.',
  'background-negative': 'For negative feedback elements, such as error badges, alerts, etc.',
  'background-negative-subtle': 'Subtle variant of “Negative”.',
  'background-warning': 'For warning messages or cautionary elements.',
  'background-warning-subtle': 'Subtle variant of “Warning”.',
  'background-info': 'For informational messages and elements.',
  'background-info-subtle': 'Subtle variant of “Info”.',
  'background-notification': 'For notification messages, badges, and elements.',
  'background-transparent-0': 'Used in Quiet Button.',

  'surface-sunken':
    'The lowest elevation used as a backdrop for other content. Use only below the default background and never on elevated surfaces. Never apply shadows to Sunken.',
  'surface-elevated-100': 'Surface colour for some raised elements, like Modal and Drawers. Uses the medium shadow.',
  'surface-elevated-200': 'The right elevation for cards. Uses the small shadow.',
  'surface-elevated-300': 'The highest elevation, used for popover, menu and dropdowns. Uses the large shadow.',

  'text-default': 'Default text colour.',
  'text-subtle': 'A subtle colour for less prominent text.',
  'text-placeholder': 'Placeholder colour in input fields.',
  'text-inverted':
    'For text on specific high-contrast surfaces, components, or accents that flip the surrounding theme.',
  'text-link': 'Colour for text links.',
  'text-disabled': 'For disabled text, indicating non-interactive state.',
  'text-negative': 'For negative feedback elements, such as error messages.',
  'text-positive': 'For positive feedback elements, like success messages.',

  'border-default': 'Border colour for decorative elements (e.g. dividers).',
  'border-strong': 'Default and accessible border colour for interactive elements.',
  'border-disabled': 'For disabled elements, indicating non-interactive elements.',
  'border-selected': 'For selected elements to highlight active choices.',
  'border-primary': 'Primary border colour.',
  'border-primary-subtle': 'Subtle variant of “Primary”.',
  'border-secondary': 'Secondary border colour for less important elements.',
  'border-positive': 'For positive feedback elements, like success alerts.',
  'border-positive-subtle': 'Subtle variant of “Positive”.',
  'border-negative': 'For negative feedback elements, such as error alerts.',
  'border-negative-subtle': 'Subtle variant of “Negative”.',
  'border-warning': 'For warning messages or cautionary elements, such as warning alerts.',
  'border-warning-subtle': 'Subtle variant of “Warning”.',
  'border-info': 'For informational messages, such as information alerts.',
  'border-info-subtle': 'Subtle variant of “Info”.',
  'border-inverted': 'For specific high-contrast surfaces, components, or accents that flip the surrounding theme.',
  'border-focus': 'For indicating elements that are focused.',

  'icon-default': 'Default icon colour.',
  'icon-subtle': 'For less prominent icons.',
  'icon-selected': 'For selected or active icons.',
  'icon-disabled': 'For disabled icons, indicating non-interactive state.',
  'icon-inverted':
    'For icons on specific high-contrast surfaces, components, or accents that flip the surrounding theme.',
  'icon-primary': 'For main icons, such as primary actions or active sections.',
  'icon-secondary': 'For less important icons or secondary actions.',
  'icon-positive': 'For positive feedback elements, like success indicators.',
  'icon-negative': 'For negative feedback elements, such as error indicators.',
  'icon-warning': 'For warning indicators or cautionary icons.',
  'icon-info': 'For informational indicators or tips.',
};

const brand = ref('finn-no');
const query = ref('');
const modes = ['light', 'dark'];

// Copy buttons. `copiedKey` switches the tooltip to "Copied"; `announcement` is read out by screen readers.
const copiedKey = ref('');
const announcement = ref('');
let resetTimer;

async function copy(text, key) {
  clearTimeout(resetTimer);
  try {
    await navigator.clipboard.writeText(text);
    copiedKey.value = key;
    announcement.value = `Copied ${text}`;
  } catch {
    copiedKey.value = '';
    announcement.value = `Could not copy ${text}`;
  }
  resetTimer = setTimeout(() => {
    copiedKey.value = '';
    announcement.value = '';
  }, 1500);
}

// One shared tooltip for every copy button, driven by events on the table (not one tooltip per button).
// It is a visual hint only: each button already has an aria-label, and copying is announced by the status message.
const tipKey = ref('');
const tipPos = ref({ x: 0, y: 0, below: false });
const tipText = computed(() => (tipKey.value && tipKey.value === copiedKey.value ? 'Copied' : 'Copy to clipboard'));

const copyButtonOf = (node) => node?.closest?.('[data-copy-key]') ?? null;

function showTip(event) {
  const button = copyButtonOf(event.target);
  if (!button) return;
  const rect = button.getBoundingClientRect();
  const below = rect.top < 48; // not enough room above, so show it underneath
  tipPos.value = { x: rect.left + rect.width / 2, y: below ? rect.bottom : rect.top, below };
  tipKey.value = button.dataset.copyKey;
}

function hideTip(event) {
  // Moving between a button's own children is not leaving the button.
  if (event?.relatedTarget && copyButtonOf(event.relatedTarget) === copyButtonOf(event.target)) return;
  tipKey.value = '';
}

// A fixed tooltip would drift from its button on scroll, so hide it. `capture` also catches the table's own scroll.
onMounted(() => window.addEventListener('scroll', hideTip, { passive: true, capture: true }));
onBeforeUnmount(() => {
  window.removeEventListener('scroll', hideTip, { capture: true });
  clearTimeout(resetTimer);
});

const categoryOrder = ['background', 'surface', 'text', 'border', 'icon'];
// Intent groups are shown in this order; any other intent follows in the order it first appears.
const intentOrder = [
  'default',
  'subtle',
  'disabled',
  'disabled-subtle',
  'selected',
  'inverted',
  'primary',
  'primary-subtle',
  'secondary',
  'positive',
  'positive-subtle',
  'negative',
  'negative-subtle',
  'warning',
  'warning-subtle',
  'info',
  'info-subtle',
  'notification',
];
// Trailing words that describe a state of a token, not what it is for. `subtle` is NOT here: it is a variant
// with its own guidance, so it gets its own group.
const trailingModifiers = new Set(['static', 'active', 'hover']);

const titleCase = (text) => text.charAt(0).toUpperCase() + text.slice(1).replaceAll('-', ' ');
const rank = (list, id) => (list.includes(id) ? list.indexOf(id) : list.length);

// 'info-subtle-active' -> 'info-subtle', 'inverted-link-static' -> 'link', 'hover' -> 'default'
function intentOf(parts) {
  const rest = [...parts];
  while (rest.length && trailingModifiers.has(rest.at(-1))) rest.pop();
  if (rest.length > 1 && rest[0] === 'inverted') rest.shift();
  return rest.join('-') || 'default';
}

const sections = computed(() => {
  const terms = query.value.toLowerCase().split(/\s+/).filter(Boolean);
  const light = data.values[brand.value].light;
  const dark = data.values[brand.value].dark;
  const byCategory = new Map();

  for (const name of data.tokens) {
    const cssName = `${data.prefix}${name}`;
    const haystack = [cssName, ...light[name], ...dark[name]].join(' ').toLowerCase();
    if (!terms.every((term) => haystack.includes(term))) continue;

    const [category, ...rest] = name.split('-');
    const intent = intentOf(rest);
    if (!byCategory.has(category)) byCategory.set(category, new Map());
    const groups = byCategory.get(category);
    if (!groups.has(intent)) groups.set(intent, []);
    groups.get(intent).push({ name, cssName, light: light[name], dark: dark[name] });
  }

  return [...byCategory.entries()]
    .sort(([a], [b]) => rank(categoryOrder, a) - rank(categoryOrder, b))
    .map(([category, groups]) => ({
      id: `tokens-${category}`,
      title: titleCase(category),
      groups: [...groups.entries()]
        .sort(([a], [b]) => rank(intentOrder, a) - rank(intentOrder, b))
        // The source lists active, hover, then the base token. Show the base token first.
        .map(([intent, rows]) => ({
          id: `tokens-${category}-${intent}`,
          title: titleCase(intent),
          description: descriptions[`${category}-${intent}`] ?? descriptionPlaceholder,
          rows: [...rows].reverse(),
        })),
    }));
});

// Each value is shown inside a light and a dark frame, painted with the selected brand's own
// background, text and border tokens, so it is seen against the surface it is meant for.
const frames = computed(() =>
  Object.fromEntries(
    modes.map((mode) => {
      const tokens = data.values[brand.value][mode];
      return [
        mode,
        {
          '--frame-bg': tokens.background[1],
          '--frame-text': tokens.text[1],
          '--frame-border': tokens.border[1],
        },
      ];
    }),
  ),
);

const shownCount = computed(() =>
  sections.value.reduce((sum, section) => sum + section.groups.reduce((n, group) => n + group.rows.length, 0), 0),
);
</script>

<template>
  <div
    class="token-table"
    @pointerover="showTip"
    @pointerout="hideTip"
    @focusin="showTip"
    @focusout="hideTip"
    @keydown.esc="hideTip"
  >
    <div class="token-table__controls">
      <div class="token-table__brand">
        <label class="token-table__label" for="token-brand">Brand</label>
        <div class="token-table__select">
          <select id="token-brand" v-model="brand">
            <option v-for="b in data.brands" :key="b.id" :value="b.id">{{ b.name }}</option>
          </select>
        </div>
      </div>
      <div class="token-table__search">
        <DsSearchInput v-model="query" placeholder="Search by token name or colour" aria-label="Search tokens" />
      </div>
    </div>
    <p class="token-table__sr-only" role="status" aria-live="polite">{{ announcement }}</p>

    <p class="token-table__meta" role="status">
      Showing {{ shownCount }} of {{ data.tokens.length }} tokens · @warp-ds/css {{ data.version }}
    </p>

    <p v-if="!sections.length" class="token-table__empty">No tokens match “{{ query }}”.</p>

    <template v-for="section in sections" :key="section.id">
      <h2 :id="section.id">{{ section.title }}</h2>
      <template v-for="group in section.groups" :key="group.id">
        <h3 :id="group.id">{{ group.title }}</h3>
        <p class="token-table__group-description">{{ group.description }}</p>
        <div class="token-table__scroll">
          <table :aria-labelledby="group.id">
            <thead>
              <tr>
                <th scope="col">Token</th>
                <th scope="col">Light</th>
                <th scope="col">Dark</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in group.rows" :key="row.name">
                <td>
                  <button
                    type="button"
                    class="token-table__name"
                    :aria-label="`Copy ${row.cssName}`"
                    :data-copy-key="`${row.name}-name`"
                    @click="copy(row.cssName, `${row.name}-name`)"
                  >
                    <code>{{ row.cssName }}</code>
                  </button>
                </td>
                <td v-for="mode in modes" :key="mode">
                  <button
                    type="button"
                    class="token-table__frame"
                    :style="frames[mode]"
                    :aria-label="`Copy ${row.cssName}. ${mode} mode value: ${row[mode][0]}`"
                    :data-copy-key="`${row.name}-${mode}`"
                    @click="copy(row.cssName, `${row.name}-${mode}`)"
                  >
                    <span class="token-table__swatch" :style="{ '--swatch': row[mode][1] }" aria-hidden="true"></span>
                    <span class="token-table__primitive" aria-hidden="true">{{ row[mode][0] }}</span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </template>
    </template>

    <div
      v-if="tipKey"
      class="token-table__tooltip"
      :class="{ 'token-table__tooltip--below': tipPos.below }"
      :style="{ left: `${tipPos.x}px`, top: `${tipPos.y}px` }"
      aria-hidden="true"
    >
      {{ tipText }}
    </div>
  </div>
</template>

<style scoped>
.token-table__controls {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px;
  margin-top: 16px;
}
.token-table__brand {
  display: flex;
  align-items: center;
  padding: 6px 16px;
  border-radius: 8px;
  background-color: var(--vp-c-bg-soft);
}
.token-table__label {
  margin-right: 8px;
  font-size: 14px;
}
.token-table__search {
  flex: 1 1 240px;
  max-width: 480px;
}

/* Select styled to match ThemeSwitcher */
.token-table__select {
  display: grid;
  grid-template-areas: "select";
  align-items: center;
  position: relative;
  width: 150px;
  padding: 1px 8px;
  background-color: var(--vp-c-bg);
  border: 1px solid var(--vp-c-text-2);
  border-radius: 5px;
  transition: border-color 0.25s;
}
.token-table__select select {
  grid-area: select;
  background-color: transparent;
  cursor: pointer;
}
.token-table__select::after {
  grid-area: select;
  content: "";
  justify-self: end;
  width: 8px;
  height: 5px;
  background-color: var(--vp-c-text-1);
  clip-path: polygon(100% 0%, 0 0, 50% 100%);
  pointer-events: none;
}
.token-table__select:focus-within {
  outline: 4px auto -webkit-focus-ring-color;
}
.token-table__select:hover {
  border: 2px solid var(--vp-c-brand-1);
  padding: 0 7px;
}

.token-table__meta {
  margin: 16px 0 0;
  font-size: 14px;
  color: var(--vp-c-text-2);
}
.token-table__empty {
  margin-top: 24px;
}

/* VitePress makes every table display:block, which lets long token names push it past the page column.
   The wrapper scrolls instead. */
.token-table__scroll {
  overflow-x: auto;
  margin: 8px 0 24px;
}
.token-table__scroll table {
  display: table;
  width: 100%;
  margin: 0;
}

/* No borders or zebra stripes: spacing and the swatches carry the structure. */
.token-table__scroll tr,
.token-table__scroll tr:nth-child(2n) {
  border: 0;
  background-color: transparent;
}
.token-table__scroll th,
.token-table__scroll td {
  padding: 8px 16px 8px 0;
  border: 0;
  background-color: transparent;
}
.token-table__scroll th {
  font-size: 13px;
  font-weight: 500;
  color: var(--vp-c-text-2);
}
/* Cells default to nowrap site-wide. Let token names break at the hyphens if the column is too narrow. */
.token-table__scroll td {
  white-space: normal;
}
/* Light and Dark shrink to their content; the token name column takes the rest. */
.token-table__scroll th:nth-child(n + 2),
.token-table__scroll td:nth-child(n + 2) {
  width: 1%;
  white-space: nowrap;
}
/* On wider screens give them a common minimum so the columns line up from one table to the next. */
@media (min-width: 640px) {
  .token-table__scroll th:nth-child(n + 2),
  .token-table__scroll td:nth-child(n + 2) {
    min-width: 176px;
  }
}

.token-table__group-description {
  margin: 8px 0 0;
  font-size: 14px;
  color: var(--vp-c-text-2);
}
/* Light/dark frame. Colours come from the brand's own tokens (see `frames`), not from the docs theme. */
.token-table__frame {
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
  min-width: 140px;
  padding: 8px;
  border: 1px solid var(--frame-border);
  border-radius: 8px;
  background-color: var(--frame-bg);
  color: var(--frame-text);
  font: inherit;
  text-align: left;
  white-space: nowrap;
  line-height: 1.3;
  cursor: pointer;
}
.token-table__frame:hover {
  box-shadow: 0 0 0 1px var(--vp-c-brand-1);
}
.token-table__swatch {
  height: 28px;
  border: 1px solid var(--frame-border);
  border-radius: 4px;
  background-color: var(--swatch);
}
.token-table__primitive {
  font-family: var(--vp-font-family-mono);
  font-size: 12px;
}

/* Token name as a copy button: looks like the code it contains. */
.token-table__name {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 0;
  border: 0;
  background: none;
  color: inherit;
  font: inherit;
  text-align: left;
  cursor: pointer;
}
.token-table__name:hover code {
  text-decoration: underline dotted;
}
.token-table__frame:focus-visible,
.token-table__name:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 2px;
}

/* Shared tooltip. Inverts with the docs theme (dark on light, light on dark). */
.token-table__tooltip {
  position: fixed;
  z-index: 100;
  padding: 4px 8px;
  border-radius: 4px;
  background-color: var(--vp-c-text-1);
  color: var(--vp-c-bg);
  font-size: 12px;
  line-height: 1.4;
  white-space: nowrap;
  pointer-events: none;
  transform: translate(-50%, calc(-100% - 6px));
}
.token-table__tooltip--below {
  transform: translate(-50%, 6px);
}

/* Visually hidden, still read out by screen readers */
.token-table__sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
}
</style>
