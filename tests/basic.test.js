import test from 'tape'
import { classify, predict } from '../src/index.js'

test('basic', function (t) {
  let pairs = [
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

  let model = classify(pairs)

  pairs.forEach(pair => {
    let [str, tag] = pair
    let found = predict(str, model)
    t.equal(found, tag, str)
  })
  // also support unseen words
  let unseen = [
    ['sneak', 'Infinitive'],
    ['swung', 'PastTense'],
    ['slumping', 'Gerund'],
  ]
  unseen.forEach(pair => {
    let [str, tag] = pair
    let found = predict(str, model)
    t.equal(found, tag, str)
  })
  t.end()
})