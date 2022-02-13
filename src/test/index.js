import predict from '../predict/index.js'
import classify from '../classify/index.js'
import { init } from '../lib.js'

const countRules = function (rules) {
  let count = 0
  rules.forEach(rule => {
    count += rule.length
  })
  return count
}

const test = function (pairs) {
  pairs = init(pairs)
  let wrong = 0
  const model = classify(pairs)
  console.log(countRules(model.rules), ' rules')
  console.log(Object.keys(model.exceptions).length, ' exceptions')
  pairs.forEach(pair => {
    let [str, tag] = pair
    let found = predict(str, model)
    if (found === tag) {
      // console.log(`\x1b[32m✓\x1b[0m`)
    } else {
      console.log(`\x1b[31m✗\x1b[0m  - ${str}`)
      wrong += 1
    }
  })
  if (wrong === 0) {
    console.log(`\x1b[32m✓\x1b[0m`)
  }
  console.log(wrong.toLocaleString(), ' wrong')
}
export default test