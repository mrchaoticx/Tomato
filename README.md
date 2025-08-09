# Tomato
A lightweight UI Library built on speed and needs.

## .ripe
With Tomato `.ripe()` allows us to render our HTML to the page. Either at all queries or the strictly first.

```js
//False only renders HTML to the first item with the query, true renders to all.
Tomato.ripe("(#/./ )Query", false, [
  "HTML"
]);
```
