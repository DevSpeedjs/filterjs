const { FilterText} = require('./lib/filter.js')




const filter = new FilterText({
    text: "fuck you"
})

console.log(filter.censor())