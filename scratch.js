import { getRules, getExceptions, combine } from './src/index.js'

import rb from '/Users/spencer/mountain/de-compromise/learn/dictionary/results/Adverb.js'
import jj from '/Users/spencer/mountain/de-compromise/learn/dictionary/results/Adjective.js'
import nn from '/Users/spencer/mountain/de-compromise/learn/dictionary/results/Noun.js'
import vb from '/Users/spencer/mountain/de-compromise/learn/dictionary/results/Verb.js'


let byTag = {
  jj: jj.slice(0, 7000),
  rb: rb.slice(0, 7000),
  nn: nn.slice(0, 7000),
  vb: vb.slice(0, 7000)
}

let all = getRules(byTag)

console.log(combine(all))





// const exceptions = getExceptions('tant', byTag)
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
