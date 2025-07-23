<script setup>
  import data from './data.json';
  import { mapFrameworkStatuses } from '../utils.js';
</script>

## Platform & Framework Support
<components-status v-bind="mapFrameworkStatuses(data.frameworks)" />

## Overview

A slider provides a visual indication of an adjustable value within a defined range (minimum and maximum values) by moving a handle along a horizontal track.

Sliders are available in two different variants: Single (read docs below) and Range slider.

## Anatomy

::: image-block
![Example of a Slider](/components/slider/overview-1.svg)
:::

**1. Label**: Describes what the slider controls or adjusts.

**2. Fill/Active track**: Visualises the selected portion of the slider range until selected value.

**3. Tooltip**: Displays the current value while dragging the handle, providing immediate feedback.

**4. Track**: Represents the full range of selectable values.

**5. Handle**: A movable indicator used to select a value along the track.

**6. Minimum value**: Indicates the lowest selectable value and visually defines the start of the range.

**7. Maximum value**: Indicates the highest selectable value and visually defines the end of the range.

**8. Number input**: Allows a value to be entered manually within the slider’s range.
