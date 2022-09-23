# Filterjs

This package has been fully re-created the documentation below will help you with the new syntax.

Filter is an utilty package that will help with filtering user inputs so string, arrays and maybe event numbers as this package expands more features will be added. Filterjs have a built **banword** censory system.

## Quick start
```js
const {FilterText} = require('devspeed-filterjs');

const message = new FilterText({
  text: "some text goes to her", // Set the text value
  disableBlackList:  false; // Default this is set to false,
  customBlacklist: ['foo', 'aah'], // create a custom blacklist 
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

const message = new FilterText({
  text: "some texts curse words", // ruturns some texts **** *****
})

message.censor('some texts') // returns some texts
```

> To prevent Text from overriding globaly you can set `options.override` to false.

```js
const newMessage = message.censor("some curse words", {override: false})
```
