# Range slider - Overview

Range sliders are best suited for cases where people need to quickly set a value within a designated range. They offer an intuitive way to adjust settings like volume, price filters, or relative distances.

See also [Slider](/components/slider/overview.md).

<ComponentsStatus />

## Examples

<ThemeSwitcher />

<style-isolate>
    <div>
        <h3 class="h4">Default Range Slider</h3>
        <w-slider label="Production year" min="1950" max="2025">
            <w-slider-thumb slot="from" name="from-year"></w-slider-thumb>
            <w-slider-thumb slot="to" name="to-year"></w-slider-thumb>
        </w-slider>
    </div>
    <div>
        <h3 class="h4">Open-ended Range Slider</h3>
        <w-slider label="Price range" min="0" max="10000" suffix="kr" open-ended>
            <w-slider-thumb slot="from" name="min-price"></w-slider-thumb>
            <w-slider-thumb slot="to" name="max-price"></w-slider-thumb>
        </w-slider>
    </div>
</style-isolate>

## General

A Range slider provides a visual indication of adjustable minimum and maximum values within a defined range by moving two handles along a horizontal track.

Sliders are available in two different variants: [Single](/components/slider/overview.md) and Range slider (read docs below).

## Anatomy

::: image-block
![Example of a Range slider](/components/rangeslider/overview-anatomy.svg)
:::

1. **Label (optional)**: Describes what type of data the slider controls or adjusts.
1. **Handles**: Two movable elements used to select a minimum and maximum value within the range.
1. **Filled/active track**: Visualises the selected portion between the two handles.
1. **Tooltip**: Displays the current value while dragging a handle, providing immediate feedback.
1. **Track**: Represents the full possible range of selectable values.
1. **Minimum range label (optional)**: Indicates the lowest selectable value and defines the start of the range.
1. **Maximum range label (optional)**: Indicates the highest selectable value and defines the end of the range.
1. **Minimum value input/text field (optional)**: Displays the current minimum value selected by the left handle and allows manual entry.
1. **Maximum value input/text field (optional)**: Displays the current maximum value selected by the right handle and allows manual entry.
1. **Input suffix (optional)**: Provides contextual clarification for values when their meaning is ambiguous, such as currency or measurement units.

<component-questions />
