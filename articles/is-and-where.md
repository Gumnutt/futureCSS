---
title: ":is() and :where()"
date: 2022-04-01
teaser: "These seemingly small additions to CSS selector syntax are going to have a big impact"
---

When writing CSS, you can sometimes end up with long selector lists to target multiple elements with the same style rules. For example, if you want to color adjust any `<b>` tags found inside a heading element, you could write:

```css
h1 > b, h2 > b, h3 > b, h4 > b, h5 > b, h6 > b {
  color: hotpink;
}
```

Instead, you could use :is() and improve legibility while avoiding a long selector:

```css
:is(h1,h2,h3,h4,h5,h6) > b {
  color: hotpink;
}
```

Legibility and shorter selector conveniences are only a piece of the value that `:is()` and `:where()` bring to CSS.

## Browser compatibility

The `:is` and `:where` pseudo-classes are supported in Chromium (>=88), Firefox (>= 78) and Safari (>=14). See MDN's browser compatibility table for more information. Some older browser versions support the `:is()` selector as `:matches()` or `-webkit-any()`. For more information see the `:is()` page on MDN.

## Get to know :is() and :where()

These are functional pseudo-class selectors, notice the `()` at the end and the way they start with `:`. Think of these as runtime dynamic function calls that match elements. When writing CSS, they give you a way to group elements together in the middle, beginning or end of a selector. They also can change specificity, giving you power to nullify or increase specificity.

## Grouping the selectors

Anything that `:is()` can do regarding grouping, so can `:where()`. This includes being used anywhere in the selector, nesting, and stacking them. Full CSS flexibility you know and love. Here's a few examples:

```css
/* at the beginning */
:where(h1,h2,h3,h4,h5,h6) > b {
  color: hotpink;
}

/* in the middle */
article :is(header,footer) > p {
  color: gray;
}

/* at the end */
.dark-theme :where(button,a) {
  color: rebeccapurple;
}

/* multiple */
:is(.dark-theme, .dim-theme) :where(button,a) {
  color: rebeccapurple;
}

/* stacked */
:is(h1,h2):where(.hero,.subtitle) {
  text-transform: uppercase;
}

/* nested */
.hero:is(h1,h2,:is(.header,.boldest)) {
  font-weight: 900;
}
```

Each of the above selector examples demonstrates the flexibility of these two functional pseudo-classes. To find areas of your code that could benefit from `:is()` or `:where()`, look for selectors with multiple commas and selector repetition.

## simple and complex selectors with :is()

Here's a few examples of simple and complex selectors to help illustrate the ability:

```css
article > :is(p,blockquote) {
  color: black;
}

:is(.dark-theme.hero > h1) {
  font-weight: bold;
}

article:is(.dark-theme:not(main .hero)) {
  font-size: 2rem;
}
```
<div class="info-box">

### Gotchas

Normally, when using a , to create a list of selectors, if any of the selectors are invalid, all of the selectors are invalidated and the list will fail to match elements. That is to say they are not forgiving of errors. :is() and :where() though are forgiving, and can get you out of a bind!

</div>

So far, :is() and :where() are syntactically interchangeable. It's time to look at how they're different.

## The difference between :is() and :where()

When it comes to specificity, `:is()` and `:where()` strongly diverge. For a brush up on specificity, see the specificity module on Learn CSS.

In short

- `:where()` has no specificity.<br/>
  `:where()` squashes all the specificity in the selector list passed as functional parameters. This is a first of its kind selector feature.
- `:is()` takes the specificity of its most specific selector.<br/>
  `:is(a,div,#id)` has a specificity score of an ID, 100 points.

Taking on the highest specificity selector from the list has only been a gotcha for me when I was getting too excited about grouping. I was always able to improve legibility by moving the high specificity selector to it's own selector where it wouldn't have so much impact. Here's an example of what I mean:

```css
article > :is(header, #nav) {
  background: white;
}

/* better as */
article > header,
article > #nav {
  background: white;
}
```

With `:where()`, I'm waiting to see libraries offer versions with no specificity. The specificity competition between author styles and library styles could come to an end. There would be no specificity to compete with when writing CSS. CSS has been working on a grouping feature like this for quite some time, it's here, and it's still largely unexplored territory. Have fun making smaller stylesheets and removing commas.