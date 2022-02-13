import { classify, predict, compress, uncompress, test, validate, debug } from './src/index.js'

import adj from '/Users/spencer/mountain/minimum-model/root-dictionary/adj.js'
import nouns from '/Users/spencer/mountain/minimum-model/root-dictionary/noun.js'
import verbs from '/Users/spencer/mountain/minimum-model/root-dictionary/verb.js'


let words = [

]
words = {
  Adjective: adj,
  Noun: nouns,
  Verb: verbs
}
// validate(words)

let model = classify(words)
// console.dir(model, { depth: 5 })
// console.log(predict('vilify', model))
console.log(debug('vilify', model))

test(words)
