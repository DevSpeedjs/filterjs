# Filterjs

This package has been fully re-created the documentation below will help you with the new syntax.

Another package for filtering text and curse words. 

## Quick start

```js

const {TextFilter} = require('devspeed-filterjs');

const message = new TextFilter({
  text: "shut the **** up", // set the text that is being manipulated
  disableBlackList:  false, // set to false by default.
  customBlacklist: ['foo', 'aah'], // create the custom blacklist.
})


```
### censorWith
> The `censorWith` option allow to you change the default **replacer** to what ever you like.

```js
const message = new TextFilter({
  text: "hello 'badword'",
  censorWith: "#"
})

message.censor()  // returns hello ######
```

### customBlacklist 

> The `customBlacklist` allows you to create your own custom **blacklist** words this will override the default blacklist and create a new one.
 
### disableBlacklist

> The  `disableblacklist`  disables the blacklist functionality  which means the `censor()` function won't filter the text. it will just return the text.


## censor Function
> checks if the text have any blacklist words in it. note that this package already have default blacklist  words if you want to see what it looks like **click here** 

```js
const mystr = new TextFilter({
  text: "shut the 'nastyword' up", 
})

mystr.censor() // returns shut the **** up
// or
mystr.censor("nastyword you")  // returns ****** you
```

> if you want your `text` to be censored globaly. You can use `option textoveride` see below for example

### before

```js 
const filter = new TextFilter({
  text: "shut the 'nastyword' up", 
})

console.log(filter.censor())// returns "shut the ****** up"
console.log(filter.text) // returns "shut the ******* up"
```
### after

```js
const filter = new TextFilter({
  text: "shut the 'nastyword' up",
  textoveride: true, // false by default
})
console.log(filter.censor())// returns "shut the **** up"
console.log(filter.text) // returns "shut the **** up"
``` 
> `textoverride` determines if the `censor()` function should filter the text globaly.

## hasblacklist function

> The `hasblacklist()` function checks a string and determines whether it contains a blacklist strings and return `true` or `false`

```js
const filter = new TextFilter({
  text: "shut the 'nastyword' up",
})

console.log(filter.hasblacklist())  // returns true 
```
> another way that you can use the `hasblacklist` function is passing a string as the first parameter.

```js
 console.log(filter.hasblacklist("some text"))
```
more example 

```js
filter.hasblacklist("nastyword jake",(results, match, text)=>{
  // results returns true are false
 // match returns an array with the blacklistword that was found in the text

  if(results) {
    console.log(result) // true
    console.log(match) // ["nastyword"]
    console.log(text) //  nastyword jake
  }
})
```


