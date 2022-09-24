# Filterjs

This package has been fully re-created the documentation below will help you with the new syntax.

Another package for filtering text and curse words. 

## Quick start

```js

const {TextFilter} = require('devspeed-filterjs');

const message = new TextFilter({
  text: "shut the fook up", // set the text that is being manipulated
  disableBlackList:  false, // set to false by default.
  customBlacklist: ['foo', 'aah'], // create the custom blacklist.
})


```

### blacklist

>  The blacklist words are the words that are not allowed in the text that is being filtered.

### customBlacklist 

> The `customBlacklist` allows you to create your own custom **blacklist** words this will override the default blacklist and create a new one.
 
### disableBlacklist

> The  `disableblacklist`  disables the blacklist functionality  which means the `censor()` function won't filter the text it will just return the text as it was.


## censor Function
> checks if the message has a blacklist and censor it like this  ****.  note that this package already have default blacklist  words if you want to see what it looks like **click here** 

```js
const mystr = new TextFilter({
  text: "shut the fook up", 
})

mystr.censor() // returns shut the **** up
// or
mystr.censor("fuck you")  // returns **** you
```

> if you want your `text` to be censored globaly. You can use `option textoveride` see below for example

### before

```js 
const filter = new TextFilter({
  text: "shut the fook up", 
})

console.log(filter.censor())// returns "shut the **** up"
console.log(filter.text) // returns "shut the fook up"
```
### after

```js
const filter = new TextFilter({
  text: "shut the fook up",
  textoveride: true, // set to false by default
})
console.log(filter.censor())// returns "shut the **** up"
console.log(filter.text) // returns "shut the **** up"
``` 
> `textoverride` determines wheater the `censor()` function should set the filtered Text globaly.




