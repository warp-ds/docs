import Icon_ from '../components/.icons/Example.vue';
import Slider_ from '../components/.slider/Example.vue';
import Alert from '../components/alert/Example.vue';
import Badge from '../components/badge/Example.vue';
import Box from '../components/box/Example.vue';
import Breadcrumbs from '../components/breadcrumbs/Example.vue';
import Button from '../components/button/Example.vue';
import ButtonGroup from '../components/buttongroup/Example.vue';
import ButtonPill from '../components/buttonpill/Example.vue';
import Callout from '../components/callout/Example.vue';
import CalloutFallbackPlacements from '../components/callout/FallbackPlacementsExample.vue';
import CalloutFlip from '../components/callout/FlipExample.vue';
import CalloutStatic from '../components/callout/StaticExample.vue';
import Card from '../components/card/Example.vue';
import Checkbox from '../components/checkbox/Example.vue';
import DatePicker from '../components/datepicker/Example.vue';
import Expandable from '../components/expandable/Example.vue';
import IconCode from '../components/icons/Code.vue';
import Icon from '../components/icons/Example.vue';
import Link from '../components/link/Example.vue';
import Modal from '../components/modal/Example.vue';
import PageIndicator from '../components/pageindicator/Example.vue';
import Pagination from '../components/pagination/Example.vue';
import Pill from '../components/pill/Example.vue';
import Popover from '../components/popover/Example.vue';
import PopoverFallbackPlacements from '../components/popover/FallbackPlacementsExample.vue';
import PopoverFlip from '../components/popover/FlipExample.vue';
import PopoverStatic from '../components/popover/StaticExample.vue';
import Radio from '../components/radio/Example.vue';
import RadioButtons from '../components/radiobuttons/Example.vue';
import RangeSlider from '../components/rangeslider/Example.vue';
import Select from '../components/select/Example.vue';
import Slider from '../components/slider/Example.vue';
import Spinner from '../components/spinner/Example.vue';
import Steps from '../components/steps/Example.vue';
import Switch from '../components/switch/Example.vue';
import Tabs from '../components/tabs/Example.vue';
import Text from '../components/text/Example.vue';
import TextArea from '../components/textarea/Example.vue';
import TextField from '../components/textfield/Example.vue';
import Toast from '../components/toast/Example.vue';
import Tooltip from '../components/tooltip/Example.vue';
import TooltipFallbackPlacements from '../components/tooltip/FallbackPlacementsExample.vue';
import TooltipFlip from '../components/tooltip/FlipExample.vue';
import TooltipStatic from '../components/tooltip/StaticExample.vue';
import Utilities from '../components/utilities/Example.vue';
import fontWeights from '../foundations/font-weights/FontWeights.vue';
import { buildWc } from './ex-base.js';
import QrColorTable from './qr-color-table.vue';

buildWc('alert-example', Alert);
buildWc('badge-example', Badge);
buildWc('box-example', Box);
buildWc('breadcrumbs-example', Breadcrumbs);
buildWc('button-example', Button);
buildWc('buttongroup-example', ButtonGroup);
buildWc('buttonpill-example', ButtonPill);
buildWc('callout-example', Callout);
buildWc('callout-fallback-placements-example', CalloutFallbackPlacements);
buildWc('callout-flip-example', CalloutFlip);
buildWc('callout-static-example', CalloutStatic);
buildWc('card-example', Card);
buildWc('checkbox-example', Checkbox);
buildWc('datepicker-example', DatePicker);
buildWc('expandable-example', Expandable);
buildWc('icon_-example', Icon_);
buildWc('icon-example', Icon);
buildWc('icon-code-example', IconCode);
buildWc('link-example', Link);
buildWc('modal-example', Modal);
buildWc('pageindicator-example', PageIndicator);
buildWc('pagination-example', Pagination);
buildWc('pill-example', Pill);
buildWc('popover-example', Popover);
buildWc('popover-fallback-placements-example', PopoverFallbackPlacements);
buildWc('popover-flip-example', PopoverFlip);
buildWc('popover-static-example', PopoverStatic);
buildWc('radio-example', Radio);
buildWc('radiobuttons-example', RadioButtons);
buildWc('rangeslider-example', RangeSlider);
buildWc('select-example', Select);
buildWc('slider-example', Slider_);
buildWc('slider-beta-example', Slider);
buildWc('spinner-example', Spinner);
buildWc('steps-example', Steps);
buildWc('switch-example', Switch);
buildWc('tabs-example', Tabs);
buildWc('textarea-example', TextArea);
buildWc('textfield-example', TextField);
buildWc('toast-example', Toast);
buildWc('tooltip-example', Tooltip);
buildWc('tooltip-fallback-placements-example', TooltipFallbackPlacements);
buildWc('tooltip-flip-example', TooltipFlip);
buildWc('tooltip-static-example', TooltipStatic);
buildWc('utilities-example', Utilities);
buildWc('text-example', Text);

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
