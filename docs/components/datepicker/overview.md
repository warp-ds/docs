# Date picker - Overview
A date picker allows the user to select a specific calendar date.

<ComponentsStatus />

## General

The date picker consists of a text field and a popover calendar panel. It is designed to allow users to select a single date in a clean, accessible manner. The popover appears upon click/tap and closes on date selection or when the user clicks/taps outside the popover.

Related components: [Text field](../textfield/overview.md)

## Example
<ThemeSwitcher />
<datepicker-example />

## Anatomy

::: image-block
![Example of a focused date input field with an open calendar below displaying January 2023 and the current selection is the 11th. The example is surrounded by four numbered highlights, pointing to the label, date input field, the optional calendar icon and the calendar popover](/components/datepicker/overview-anatomy.svg)
:::


**1. Label**: Indicates what information the field requires.

**2. Date input field**: Selecting this field opens the date picker component. Users can also input dates into the field. Once a date is selected, the option will be shown in the text input. This example shows date formatted in `dd.mm.yyyy` but this is controlled by the user's browser locale settings (operating system is also fallback).

**3. Calendar icon (optional)**: Opens the calendar popover and helps indicate what information the field requires. Not an accessibility requirement but we recommend including it for ease of keyboard navigation.

**4. Calendar popover**: Contains the list of all dates. Left and right buttons allowing to navigate the months, month and year header, calendar grid with weekdays and days of the month.



<component-questions />
