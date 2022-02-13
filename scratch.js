import { classify, predict, compress, uncompress, test } from './src/index.js'

let words = [
  ['walking', 'Gerund'],
  ['talking', 'Gerund'],
  ['smoking', 'Gerund'],
  ['following', 'Gerund'],
  ['sitting', 'Gerund'],

  ['walk', 'Infinitive'],
  ['talk', 'Infinitive'],
  ['smoke', 'Infinitive'],
  ['sting', 'Infinitive'],
  ['follow', 'Infinitive'],
  ['sit', 'Infinitive'],

  ['walked', 'PastTense'],
  ['talked', 'PastTense'],
  ['smoked', 'PastTense'],
  ['stung', 'PastTense'],
  ['followed', 'PastTense'],
  ['sat', 'PastTense'],
]

let model = classify(words)
console.dir(model, { depth: 5 })
// console.log(predict('saved', model))

test(words)
