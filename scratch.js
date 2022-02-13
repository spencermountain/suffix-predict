import { classify, predict, compress, uncompress, test } from './src/index.js'

let words = [

]

let model = classify(words)
console.dir(model, { depth: 5 })
console.log(predict('saved', model))

test(words)
