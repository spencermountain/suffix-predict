import test from 'tape'
import { classify, predict } from '../src/index.js'
import data from './data.js'

test('data', function (t) {
  let model = classify(data)
  Object.keys(data).forEach(tag => {
    let pairs = data[tag]
    pairs.forEach(str => {
      let found = predict(str, model)
      t.equal(found, tag, str + ' : ' + found)
    })
  })
  t.end()
})