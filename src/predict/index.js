// apply the model to our string
const predict = function (str, model, debug) {
  let { rules, exceptions } = model
  if (exceptions.hasOwnProperty(str)) {
    if (debug) {
      console.log(`${str} - exception`)
    }
    return exceptions[str]
  }
  for (let size = rules.length; size > 0; size -= 1) {
    let n = str.length - size
    let suffix = str.substring(n, n + str.length - 1)
    if (rules[size] && rules[size].hasOwnProperty(suffix)) {
      if (debug) {
        console.log(`${str} - rule ${suffix}  -> ${rules[size][suffix]}`)
      }
      return rules[size][suffix]
    }
  }
  if (debug) {
    console.log(`${str} - [passthrough]`)
  }
  return null
}

export default predict