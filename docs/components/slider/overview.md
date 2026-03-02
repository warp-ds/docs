# Slider - Overview

Sliders are best suited for cases where people need to quickly set a value within a designated range. They offer an intuitive way to adjust settings like volume, price filters, or relative distances.

See also [Range slider](/components/range-slider/overview.md).

<ComponentsStatus />

## Example

<ThemeSwitcher />

<style-isolate>
    <div>
        <h3 class="h4">Default Slider</h3>
        <w-slider label="Volume" min="0" max="100">
            <w-slider-thumb name="volume"></w-slider-thumb>
        </w-slider>
    </div>
    <div>
        <h3 class="h4">Slider with step</h3>
        <w-slider label="Rating" min="0" max="10" step="1">
            <w-slider-thumb name="rating"></w-slider-thumb>
        </w-slider>
    </div>
    <div>
        <h3 class="h4">Slider with suffix</h3>
        <w-slider label="Price" min="0" max="1000" suffix="kr">
            <w-slider-thumb name="price"></w-slider-thumb>
        </w-slider>
    </div>
</style-isolate>

## Overview

A slider provides a visual indication of an adjustable value within a defined range (minimum and maximum values) by moving a handle along a horizontal track.

Sliders are available in two different variants:

- Single (documented here)
- [Range slider](/components/range-slider/overview.md)

## Anatomy

::: image-block
![Example of a Slider](/components/slider/overview-anatomy.svg)
:::

1. **Label (optional)**: Describes what the slider controls or adjusts.
1. **Filled/active track**: Visualises the selected portion of the slider range up to the selected value.
1. **Tooltip**: Displays the current value while dragging the handle, providing immediate feedback.
1. **Track**: Represents the full range of available selectable values.
1. **Handle**: Movable indicator used to select a value along the track.
1. **Minimum range label (optional)**: Indicates the lowest selectable value and visually defines the start of the range.
1. **Maximum range label (optional)**: Indicates the highest selectable value and visually defines the end of the range.
1. **Value input/text field (optional)**: Displays the current selected value by the handle and allows manual entry.
1. **Input suffix (optional)**: Provides contextual clarification for values when their meaning is ambiguous, such as currency or measurement units.

<component-questions />
