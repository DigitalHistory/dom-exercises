# DOM Pratice

In this trivial repository you will find one other file, [index.html](index.html). Your task is to make a set of sequential changes to the page using either the native JavaScript DOM-related functions or jQuery (recommnded, and described below). 

## Tasks 

1. Set the text-color of all h2 elements to `red` (or use [a more exciting shade](https://www.rapidtables.com/web/css/css-color.html))
2. Set the background-color of all `ul` elements to "gold"
3. Set the text content of the `h1` element to "DOM Practice for JavaScript"
4. Set the text content of **the second li only** to `random noise`
4. Add a new `p` element to the end of **the first article only**
5. Set the HTML content of that new element to `I am a paragraph with <em>italics</em> and <strong>bold</strong>.`
6. Finally, remove these instructions from the DOM

## Some Hints

Once you start to understand jQuery, these operations are not so hard.  Remember:

- select elements by calling jQuery wiht a CSS-selector-like string. For instance, `$('div>p.main')` will find all `p` elements that are direct children of a `div` element and havea  class of `main`.
- it is also possible to call jQuery using **an HTML element objet rather than a string**.  We'll do this below.
- invoking that function (`$('div>p.main')`) creates a **jQuery object** which has many powerful **methods** which you can now call by appending `.methodName` to the object. We mostly use the following methods in our homework: 
  - `$().css(property, value)` will set the given CSS property value for all matching elements
  - `$().text(newValue)` will replace the existing text content of the element with `newValue`
  - `$().html(newHTML)` is very similar, but will parse the text string and create any new HTML nodes as required
  - it is possible to **iterate over the elements returned in a jQuery objet** using **either** array-like notation such as e.g. `$()[3]` to retrieve the **fourth** matching element in the DOM, **or** the array-like `each()` method which will perform an action for **each** matching element, e.g. (`$().each(function () {this.method(something)})`).  The latter method is cool but involves a callback function
  - when retrieving and acting on **individual nodes from the jQuery object** one really tricky aspect is that **the nodes themselves are not jQuery objects but native HTML objects**. They have  methods, but they are **not jQuery methods**. If you want to use jQuery methods on them, you will have to wrap the result in another call to jQuery. So for instance, if you want to set a CSS value for the 5th matching element on a query you will do something like this (read carefully!): `$($('p')[4]).css('font-family', 'Dingbats')`.

