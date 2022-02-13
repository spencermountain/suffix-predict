// apply the model to our string
const predict = function (str, model) {
  let { rules, exceptions } = model
  if (exceptions.hasOwnProperty(str)) {
    return exceptions[str]
  }
  for (let size = rules.length; size > 0; size -= 1) {
    let n = str.length - size
    let suffix = str.substring(n, n + str.length - 1)
    if (rules[size] && rules[size].hasOwnProperty(suffix)) {
      return rules[size][suffix]
    }
  }
  return null
}
export default predict