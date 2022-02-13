import test from 'tape'
import { classify, predict } from '../src/index.js'
import misc from './data/misc.js'
import frNous from './data/fr-nous.js'
import frWords from './data/fr-words.js'
import futureSimple from './data/future-simple.js'

test('misc', function (t) {
  let model = classify(misc)
  Object.keys(misc).forEach(tag => {
    let pairs = misc[tag]
    pairs.forEach(str => {
      let found = predict(str, model)
      t.equal(found, tag, str + ' : ' + found)
    })
  })
  t.end()
})

test('frNous', function (t) {
  let pairs = []
  frNous.forEach(a => {
    pairs.push([a[0], 'En'])
    pairs.push([a[1], 'Fr'])
  })
  let model = classify(pairs)
  pairs.forEach(a => {
    let [str, tag] = a
    let found = predict(str, model)
    t.equal(found, tag, str + ' : ' + found)
  })
  t.end()
})

test('frWords', function (t) {
  let pairs = []
  frWords.forEach(a => {
    pairs.push([a[0], 'Fr'])
    pairs.push([a[1], 'En'])
  })
  let model = classify(pairs)
  pairs.forEach(a => {
    let [str, tag] = a
    let found = predict(str, model)
    t.equal(found, tag, str + ' : ' + found)
  })
  t.end()
})

test('futureSimple', function (t) {
  let pairs = []
  futureSimple.forEach(a => {
    pairs.push([a[0], 'Pres'])
    pairs.push([a[1], 'Fut'])
  })
  let model = classify(pairs)
  pairs.forEach(a => {
    let [str, tag] = a
    let found = predict(str, model)
    t.equal(found, tag, str + ' : ' + found)
  })
  t.end()
})

