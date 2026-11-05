> Typography

# Whitespace
Utilities for controlling an element's white-space property.

## Quick reference

| Class | Description |
|-------|-------------|
| `whitespace-normal` | `white-space: normal` |
| `whitespace-nowrap` | `white-space: nowrap` |
| `whitespace-pre` | `white-space: pre` |
| `whitespace-pre-line` | `white-space: pre-line` |
| `whitespace-pre-wrap` | `white-space: pre-wrap` |
| `whitespace-break-spaces` | `white-space: break-spaces` |

## Basic usage

### Normal
Use `whitespace-normal` to cause text to wrap normally within an element. Newlines and spaces will be collapsed.

<example-container>
  <div class="ex-inner-box s-text text-body">
    <div class="whitespace-normal">Hey everyone!
    It's almost 2042,       and we still don't know if there is aliens living among us, or do we? Maybe the person writing this is an alien.
    You will never know.</div>
  </div>
</example-container>

```html
<div class="whitespace-normal">Hey everyone!

It's almost 2042,     and we still don't know if there is aliens living among us, or do we? Maybe the person writing this is an alien.

You will never know.</div>
```

### No Wrap
Use `whitespace-nowrap` to prevent text from wrapping within an element. Newlines and spaces will be collapsed.

<example-container>
  <div class="ex-inner-box s-text text-body overflow-auto">
    <div class="whitespace-nowrap">Hey everyone!
    It's almost 2042,       and we still don't know if there is aliens living among us, or do we? Maybe the person writing this is an alien.
    You will never know.</div>
  </div>
</example-container>

```html
<div class="whitespace-nowrap">Hey everyone!

It's almost 2042,     and we still don't know if there is aliens living among us, or do we? Maybe the person writing this is an alien.

You will never know.</div>
```

### Pre
Use `whitespace-pre` to preserve newlines and spaces within an element. Text will not be wrapped.

<example-container>
  <div class="ex-inner-box s-text text-body overflow-auto">
    <div class="whitespace-pre">Hey everyone!<br/><br/>
    It's almost 2042,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;and we still don't know if there is aliens living among us, or do we? Maybe the person writing this is an alien.<br/><br/>
    You will never know.</div>
  </div>
</example-container>

```html
<div class="whitespace-pre">Hey everyone!

It's almost 2042,     and we still don't know if there is aliens living among us, or do we? Maybe the person writing this is an alien.

You will never know.</div>
```

### Pre Line
Use `whitespace-pre-line` to preserve newlines but not spaces within an element. Text will be wrapped normally.

<example-container>
  <div class="ex-inner-box s-text text-body overflow-auto">
    <div class="whitespace-pre-line">Hey everyone!<br/><br/>
    It's almost 2042, and we still don't know if there is aliens living among us, or do we? Maybe the person writing this is an alien.<br/><br/>
    You will never know.</div>
  </div>
</example-container>

```html
<div class="whitespace-pre-line">Hey everyone!

It's almost 2042, and we still don't know if there is aliens living among us, or do we? Maybe the person writing this is an alien.

You will never know.</div>
```

### Pre Wrap
Use `whitespace-pre-wrap` to preserve newlines and spaces within an element. Text will be wrapped normally.

<example-container>
  <div class="ex-inner-box s-text text-body overflow-auto">
    <div class="whitespace-pre-wrap">Hey everyone!<br/><br/>
    It's almost 2042,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;and we still don't know if there is aliens living among us, or do we? Maybe the person writing this is an alien.<br/><br/>
    You will never know.</div>
  </div>
</example-container>

```html
<div class="whitespace-pre-wrap">Hey everyone!

It's almost 2042,       and we still don't know if there is aliens living among us, or do we? Maybe the person writing this is an alien.

You will never know.</div>
```
