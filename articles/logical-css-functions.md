---
title: "Logical CSS functions"
date: 2022-04-01
teaser: "Control element sizing, maintain proper spacing, and implement fluid typography using these well-supported CSS functions."
---

Responsive design is evolving and becoming increasingly nuanced, CSS itself is constantly evolving and providing authors increased control. The `min()`, `max()`, and `clamp()` functions, now supported in all modern browsers, are among the latest tools in making authoring websites and apps more dynamic and responsive.

When it comes to flexible and fluid typography, controlled element resizing, and maintaining proper spacing, `min()`, `max()`, and `clamp()` can help.

> The math functions, calc(), min(), max(), and clamp() allow mathematical expressions with addition (+), subtraction (-), multiplication (\*), and division (/) to be used as component values [CSS Values And Units Level 4](https://www.w3.org/TR/css-values-4/#calc-notation)

You can use `min()`, `max()`, and `clamp()` on the right hand side of any CSS expression where it would make sense. For `min()` and `max()`, you provide an argument list of values, and the browser determines which one is either the smallest or largest, respectively. For example, in the case of: `min(1rem, 50%, 10vw)`, the browser calculates which of these relative units is the smallest, and uses that value as the actual value.

## CSS min()

The `min()` function selects the smallest value from a list of comma-separated expressions.

<iframe height="600" style="width: 100%;" scrolling="no" title="CSS min() Function" src="https://codepen.io/una/embed/rNeGNVL?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/una/pen/rNeGNVL">
  CSS min() Function</a> by Una Kravets (<a href="https://codepen.io/una">@una</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## CSS max()

The `max()` function selects the largest value from a list of comma-separated expressions.

<iframe height="600" style="width: 100%;" scrolling="no" title="CSS max() Function" src="https://codepen.io/una/embed/RwaZXqR?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/una/pen/RwaZXqR">
  CSS max() Function</a> by Una Kravets (<a href="https://codepen.io/una">@una</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## CSS clamp()

To use `clamp()` enter three values: a minimum value, ideal value (from which to calculate), and maximum value.

<iframe height="600" style="width: 100%;" scrolling="no" title="CSS clamp() Function" src="https://codepen.io/una/embed/bGpoGdJ?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/una/pen/bGpoGdJ">
  CSS clamp() Function</a> by Una Kravets (<a href="https://codepen.io/una">@una</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

Any of these functions can be used anywhere a `<length>`, `<frequency>`, `<angle>`, `<time>`, `<percentage>`, `<number>`, or `<integer>` is allowed. You can use these on their own (i.e. `font-size: max(0.5vw, 50%, 2rem)`), in conjunction with `calc()` (i.e. `font-size: max(calc(0.5vw - 1em), 2rem)`), or composed (i.e. `font-size: max(min(0.5vw, 1em), 2rem)`).

## Fluid typography

In order to enable fluid typography, Mike Riethmeuller popularized a technique that uses the calc() function to set a minimum font size, maximum font size, and allow for scaling from the min to the max.

With clamp(), you can write this more clearly. Rather than requiring a complex string, the browser can do the work for you. Set the minimum acceptable font size (for example, 1.5rem for a title, maximum size (i.e. 3rem) and ideal size of 5vw.

Now, we get typography that scales with the viewport width of the page until it reaches the limiting minimum and maximum values, in a much more succinct line of code:

```css
p {
  font-size: clamp(1.5rem, 5vw, 3rem);
}
```

<iframe height="300" style="width: 100%;" scrolling="no" title="Fluid Typography Demo" src="https://codepen.io/una/embed/ExyYXaN?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/una/pen/ExyYXaN">
  Fluid Typography Demo</a> by Una Kravets (<a href="https://codepen.io/una">@una</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
