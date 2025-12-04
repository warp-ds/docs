# Date picker

## Principle

Users should be able to manually enter a date, whether or not they interact with the date picker component.

---

## Keyboard Navigation

### For Input Field:

#### 1st <kbd>Tab</kbd> key
Focus moves to the **day** field (“dd”), allowing the user to manually enter a day value.

Pressing <kbd aria-label="Arrow Up">↑</kbd> or <kbd aria-label="Arrow Down">↓</kbd> increments or decrements the day (01–31).

#### 2nd <kbd>Tab</kbd> key
Focus moves to the **month** field (“mm”), allowing the user to manually enter a month value.

Pressing <kbd aria-label="Arrow Up">↑</kbd> or <kbd aria-label="Arrow Down">↓</kbd> increments or decrements the month (01–12).

#### 3rd <kbd>Tab</kbd> key
Focus moves to the **year** field (“yyyy”), allowing the user to manually enter a year.

Pressing <kbd aria-label="Arrow Up">↑</kbd> or <kbd aria-label="Arrow Down">↓</kbd> increments or decrements the year (starting from the current year).

#### 4th <kbd>Tab</kbd> key
Focus moves to the calendar icon.

Pressing <kbd>Enter</kbd> opens the calendar popover.
Pressing <kbd>Enter</kbd> again closes it.

#### 5th <kbd>Tab</kbd> key
Moves focus to the next interactive element in the interface.

---

### Once the Calendar Popover is Open:

#### 1st <kbd>Tab</kbd> key
Focus moves to the **previous month** button <kbd aria-label="Less than key">&lt;</kbd>.

Pressing <kbd>Enter</kbd> navigates to the previous month.

#### 2nd <kbd>Tab</kbd> key
Focus moves to the **next month** button <kbd aria-label="More than key">&gt;</kbd>.

Pressing <kbd>Enter</kbd> navigates to the next month.

#### 3rd <kbd>Tab</kbd> key
Focus moves to the **current date** in the calendar grid.

Use the arrow keys
<kbd aria-label="Arrow Left">←</kbd> <kbd aria-label="Arrow Right">→</kbd> <kbd aria-label="Arrow Up">↑</kbd> <kbd aria-label="Arrow Down">↓</kbd>
to navigate between available dates.

Pressing <kbd>Enter</kbd> selects the focused date and updates the input field.

#### 4th <kbd>Tab</kbd> key
Moves focus to the next interactive element in the interface. The calendar popover closes.

---

## VoiceOver / Screen Reader

It's not necessary to explain how to use, open, or close the date picker when the text field receives focus — as long as its behavior is intuitive and accessible.

