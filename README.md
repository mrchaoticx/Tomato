# Tomato
A lightweight UI Library built for every ocasion.

### .ripe
Tomato `.ripe()` allows us to render HTML to the page. Either at all queries or strictly the first.

```js
//False only renders HTML to the first item with the query, true renders to all.
Tomato.ripe("(#/./ )Query", false, [
  "HTML"
]);
```

### .sauce 
Create style sheets and render them alongside `.ripe` for `FOUC` prevention.

```js
//Create Style Sheet
Tomato.sauce(`.yourClass {color:yellow; weiht: 600;}`);
```
### .vine
Directly access elements within `.ripe` without declaration. 

```js
 .vine("(#/./ )Your Element")
```

### .cage
Create synced returns to elements across the page.

```js
Tomato.cage()
``` 
