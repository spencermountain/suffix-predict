import predict from '../predict/index.js'
import classify from '../getRules/index.js'
import { init } from '../lib.js'

const countRules = function (rules) {
  let count = 0
  rules.forEach(obj => {
    count += Object.keys(obj).length
  })
  return count
}

const percent = (part, total) => {
  let num = (part / total) * 100;
  num = Math.round(num * 10) / 10;
  return num;
};

const blue = str => '\x1b[34m' + str + '\x1b[0m'
const green = str => '\x1b[32m' + str + '\x1b[0m'
const red = str => '\x1b[31m' + str + '\x1b[0m'
const yellow = str => '\x1b[33m' + str + '\x1b[0m'

const test = function (pairs) {
  pairs = init(pairs)
  let wrong = 0
  let nulls = 0
  const model = classify(pairs)
  console.log('\n\n')
  console.log(blue(countRules(model.rules)), ' rules')
  console.log(blue(Object.keys(model.exceptions).length), ' exceptions')
  pairs.forEach(pair => {
    let [str, tag] = pair
    let found = predict(str, model)
    if (found === tag) {
      // console.log(`\x1b[32m✓\x1b[0m`)
    } else if (!found) {
      nulls += 1
    } else {
      console.log(`\x1b[31m✗\x1b[0m  - ${str}`)
      wrong += 1
    }
  })
  if (wrong === 0) {
    console.log(`\x1b[32m✓ no errors\x1b[0m`)
  } else {
    console.log(red(wrong.toLocaleString()), ' wrong')
    console.log(green(percent(pairs.length - wrong, pairs.length) + '%') + ' correct')
  }
  console.log(yellow(nulls.toLocaleString()), `(${percent(nulls, pairs.length)}%) null `)
}
export default test