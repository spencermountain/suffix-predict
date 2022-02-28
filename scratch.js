import { getRules, getExceptions } from './src/index.js'

import rb from '/Users/spencer/mountain/fr-compromise/learn/giga/results/Adverb.js'
import jj from '/Users/spencer/mountain/fr-compromise/learn/giga/results/Adjective.js'
import nn from '/Users/spencer/mountain/fr-compromise/learn/giga/results/Noun.js'
import vb from '/Users/spencer/mountain/fr-compromise/learn/giga/results/Verb.js'


let byTag = {
  jj: jj.slice(0, 5000),
  rb: rb.slice(0, 5000),
  nn: nn.slice(0, 5000),
  vb: vb.slice(0, 5000)
}

let want = 'vb'
let rules = getRules(byTag, want)
// rules = rules.slice(0, 1)
console.dir(rules, { depth: 5 })
// const exceptions = getExceptions(rules, byTag, want)
// console.log(exceptions)
// console.log(compress(model))

// console.log('\n\n', predict('identify', model))
// console.log(debug('vilify', model))

// words.Noun.forEach(str => {
//   if (predict(str, model) === null) {
//     console.log(str, predict(str, model))
//   }
// })

// test(words)
