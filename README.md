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

## .cage
Create synced returns to elements across the page.

```js
Tomato.cage()
```
Creating a function with `.cage` by-passes limitations in `.ripe`, proper structure and HOW IT CAN interact wirh `.ripe`can be seen in docs.

> [!NOTE]
> Limitation `.ripe` is intended to create and render things to the page not act as a function. `.cage` has the proper call and passes this barrier.
> `.cage` allows you to sync and create functions other wise you couldnt without the libarary and passes a limitation.
```
