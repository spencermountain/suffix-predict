import { classify, predict, compress, uncompress, test, validate, debug } from './src/index.js'

import rb from '/Users/spencer/mountain/fr-compromise/learn/giga/results/Adverb.js'
import jj from '/Users/spencer/mountain/fr-compromise/learn/giga/results/Adjective.js'
import nn from '/Users/spencer/mountain/fr-compromise/learn/giga/results/Noun.js'
import vb from '/Users/spencer/mountain/fr-compromise/learn/giga/results/Verb.js'

let want = nn
let rest = [].concat(jj, vb, vb)
let model = classify(want, rest)
console.dir(model, { depth: 5 })
// console.log(compress(model))

// console.log('\n\n', predict('identify', model))
// console.log(debug('vilify', model))

// words.Noun.forEach(str => {
//   if (predict(str, model) === null) {
//     console.log(str, predict(str, model))
//   }
// })

// test(words)
