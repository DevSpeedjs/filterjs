const {TextFilter} = require('./lib/filter.js')




const filter = new TextFilter({
    text: "fuck you"
})
console.log(filter.censor('hi fucker', {override: false}))

console.log(filter.text)