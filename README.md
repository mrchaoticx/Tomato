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

## .sauce 
Create style sheets and render them alongside `.ripe` for `FOUC` prevention.

```js
//Create Style Sheet
Tomato.sauce(`.yourClass {color:yellow; weiht: 600;}`);
```
## .vine
Directly access elements within `.ripe` without declaration. 

```js
 .vine("(#/./ )Your Element")
```

## All knowing .ripe

## Performance

