import ButtonGroup from '../components/button-group/Example.vue';
import CalloutFallbackPlacements from '../components/callout/FallbackPlacementsExample.vue';
import CalloutFlip from '../components/callout/FlipExample.vue';
import CalloutStatic from '../components/callout/StaticExample.vue';
import IconCode from '../components/icons/Code.vue';
import Icon from '../components/icons/Example.vue';
import Modal from '../components/modal/Example.vue';
import Popover from '../components/popover/Example.vue';
import PopoverFallbackPlacements from '../components/popover/FallbackPlacementsExample.vue';
import PopoverFlip from '../components/popover/FlipExample.vue';
import PopoverStatic from '../components/popover/StaticExample.vue';
import RadioButtons from '../components/radio-buttons/Example.vue';
import Tooltip from '../components/tooltip/Example.vue';
import TooltipFallbackPlacements from '../components/tooltip/FallbackPlacementsExample.vue';
import TooltipFlip from '../components/tooltip/FlipExample.vue';
import TooltipStatic from '../components/tooltip/StaticExample.vue';
import Utilities from '../components/utilities/Example.vue';
import fontWeights from '../foundations/font-weights/FontWeights.vue';
import { buildWc } from './ex-base.js';
import QrColorTable from './qr-color-table.vue';

buildWc('buttongroup-example', ButtonGroup);
buildWc('callout-fallback-placements-example', CalloutFallbackPlacements);
buildWc('callout-flip-example', CalloutFlip);
buildWc('callout-static-example', CalloutStatic);
buildWc('icon-example', Icon);
buildWc('icon-code-example', IconCode);
buildWc('modal-example', Modal);
buildWc('popover-example', Popover);
buildWc('popover-fallback-placements-example', PopoverFallbackPlacements);
buildWc('popover-flip-example', PopoverFlip);
buildWc('popover-static-example', PopoverStatic);
buildWc('radiobuttons-example', RadioButtons);
buildWc('tooltip-example', Tooltip);
buildWc('tooltip-fallback-placements-example', TooltipFallbackPlacements);
buildWc('tooltip-flip-example', TooltipFlip);
buildWc('tooltip-static-example', TooltipStatic);
buildWc('utilities-example', Utilities);

buildWc('example-container');

buildWc('background-color-table', QrColorTable, {
  dataId: 'backgroundColor',
});

buildWc('surface-color-table', QrColorTable, {
  dataId: 'surfaceColor',
});

buildWc('border-color-table', QrColorTable, {
  dataId: 'borderColor',
});
buildWc('divide-color-table', QrColorTable, {
  dataId: 'divideColor',
});
buildWc('outline-color-table', QrColorTable, {
  dataId: 'outlineColor',
});
buildWc('icon-color-table', QrColorTable, { dataId: 'iconColor' });
buildWc('text-color-table', QrColorTable, { dataId: 'textColor' });

buildWc('font-weights', fontWeights);
