<script setup>
import Overview from './overview.md';
import data from './data.json';
import { mapFrameworkStatuses } from '../utils.js';
</script>

## Platform & Framework Support

<components-status v-bind="mapFrameworkStatuses(data.frameworks)" />

## Overview

A range slider provides a visual indication of adjustable minimum and maximum values within a defined range by moving two handles along a horizontal track.

Sliders are available in two different variants: Single and Range slider (read docs below).

## Anatomy

::: image-block
![Example of a Range Slider](/components/rangeslider/overview-1.svg)
:::

**1. Label**: Describes what the slider controls or adjusts.

**2. Handles**: Two movable elements used to select a minimum and maximum value within the range.

**3. Fill/Active track**: Visualises the selected portion between the two handles.

**4. Tooltip**: Displays the current value while dragging a handle, providing immediate feedback.

**5. Track**: Represents the full range of selectable values.

**6. Minimum value**: Indicates the lowest selectable value and visually defines the start of the range.

**7. Maximum value**: Indicates the highest selectable value and visually defines the end of the range.

**8. Minimum value number input**: Allows manual entry of the selected minimum value.

**9. Maximum value number input**: Allows manual entry of the selected maximum value.
