---
title: "accent-color"
date: 2022-03-30
teaser: "Bring your brand color to built-in HTML form inputs with one line of code."
---

Today's HTML form elements are difficult to customize. It feels as if it's a choice between few or no custom styles, or resetting input styles and build it up from scratch. Building it up from scratch ends up being much more work than anticipated. It can also lead to forgotten styles for element states (indeterminate, I'm looking at you), and the loss of built-in accessibility features. To fully recreate what the browser provides may be more work than you're looking to take on.

```css
accent-color: hotpink;
```

<div class="demo--accent-color">
  <fieldset color-scheme="light">
    <label for="default-light">
      Default
      <input type="checkbox" id="default-light" checked>
    </label>
    <label for="accented-light">
      Tinted
      <input class="accented" type="checkbox" id="accented-light" checked>
    </label>
  </fieldset>
</div>
