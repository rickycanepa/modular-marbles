const { createMarble } = require("./marbleMaker.js")
const { weaveBag } = require("./bagMaker.js")

let test = createMarble()
// console.log(test)

const bag = weaveBag("silk")
console.log(bag)