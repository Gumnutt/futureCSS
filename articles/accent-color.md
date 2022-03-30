---
title: "accent-color"
date: 2022-03-30
teaser: "Bring your brand color to built-in HTML form inputs with one line of code."
---

Today's HTML form elements are difficult to customize. It feels as if it's a choice between few or no custom styles, or resetting input styles and build it up from scratch. Building it up from scratch ends up being much more work than anticipated. It can also lead to forgotten styles for element states (indeterminate, I'm looking at you), and the loss of built-in accessibility features. To fully recreate what the browser provides may be more work than you're looking to take on.

## The new way

<div>
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

```css
input {
  accent-color: deeppink;
}
```

</div>

## The old way

<div>
  <fieldset color-scheme="light">
    <label class="control control--checkbox">
      Custom checkbox
      <input type="checkbox" checked="checked"/>
      <div class="control__indicator"></div>
    </label>
  </fieldset>

```sass
.control {
display: block;
position: relative;
padding-left: 30px;
cursor: pointer;
}

.control__indicator {
position: absolute;
top: 2px;
left: 0;
height: 20px;
width: 20px;
background: #e6e6e6;
}

.control--checkbox .control__indicator:after {
left: 8px;
top: 4px;
width: 3px;
height: 8px;
border: solid #fff;
border-width: 0 2px 2px 0;
transform: rotate(45deg);
}

.control__indicator:after {
content: "";
position: absolute;
display: none;
}

.control input {
&:checked {
  ~ .control__indicator:after {
    display: block;
  }

  ~ .control__indicator {
    background: deeppink;
  }
}

position: absolute;
z-index: -1;
opacity: 0;
}
```

</div>

## Supported elements

Currently, only four elements will tint via the accent-color property: checkbox, radio, range and progress.

<fieldset color-scheme="light">
  <label for="accented-light--radio">
    Radio
    <input class="accented" type="radio" id="accented-light--radio">
  </label>
  <label for="accented-light--range">
    Range
    <input class="accented" type="range" id="accented-light--range">
  </label>
  <label class="accented" for="accented-light--progress">
    Progress
    <progress max="100" value="50">50%</progress>
  </label>
</fieldset>
