# Filterjs

This package has been fully re-created the documentation below will help you with the new syntax.

Filter is an utilty package that can help you filter user inputs such strings, arrays and maybe even numbers as the package expands more features will be added. Filterjs have a built **blacklist word** censory system.

## Quick start

```js

const {TextFilter} = require('devspeed-filterjs');

const message = new TextFilter({
  text: "some text goes to her", // set the text that is being manipulated
  disableBlackList:  false; // set to false by default, 
  customBlacklist: ['foo', 'aah'], // create the custom blacklist,
})


```

### blacklist

>  The blacklist words are the words that are not allowed in the text that is being filtered.

### customBlacklist 

 > The `customBlacklist` allows you to add your own custom **blacklist** words.
 
### disableBlacklist

> The  `disableblacklist`  disables the blacklist functionality  which means the `censor()` function won't work


## censor Function
> checks if the message has a blacklist and censor it like this  ****.  note that this package already have default blacklist  words if you want to see what it looks like **click here** 

```js
message.censor() // filters 
```

> You can `override` the text that is being filtered if you set it with the `FilterText` class example below

```js

const message = new TextFilter({
  text: "some texts curse words", // ruturns some texts **** *****
})

message.censor('some texts') // returns some texts
```

> To prevent Text from overriding globaly you can set `options.override` to false.

```js
const newMessage = message.censor("some curse words", {override: false})
```
