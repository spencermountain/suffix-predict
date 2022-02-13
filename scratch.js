import { classify, predict, compress, uncompress, test, validate, debug } from './src/index.js'

import jj from '/Users/spencer/mountain/minimum-model/root-dictionary/adj.js'
import nn from '/Users/spencer/mountain/minimum-model/root-dictionary/noun.js'
import vb from '/Users/spencer/mountain/minimum-model/root-dictionary/verb.js'

let adj = jj.slice(0, 12)
let verbs = vb.slice(0, 27)
let nouns = nn.slice(0, 18)

let words = [

]
words = {
  Adjective: adj,
  Noun: nouns,
  Verb: verbs
}
// validate(words)

words = {
  Adjective: [
    'available',
    'large',
    'same',
    'effective',
    'appropriate',
  ],
  Noun: [
    'time',
    'rate',
    'people',
    'employee',
  ],
  Verb: [
    'be',
  ]
}

let model = classify(words)
// console.dir(model, { depth: 5 })

// console.log('\n\n', predict('identify', model))
// console.log(debug('vilify', model))

words.Noun.forEach(str => {
  if (predict(str, model) === null) {
    console.log(str, predict(str, model))
  }
})

test(words)
