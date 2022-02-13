import predict from '../predict/index.js'
import classify from '../classify/index.js'

const test = function (pairs) {
  const model = classify(pairs)
  pairs.forEach(pair => {
    let [str, tag] = pair
    let found = predict(str, model)
    if (found === tag) {
      console.log(`\x1b[32m✓\x1b[0m`)
    } else {
      console.log(`\x1b[31m✗\x1b[0m  - ${str}`)
    }
  })
}
export default test