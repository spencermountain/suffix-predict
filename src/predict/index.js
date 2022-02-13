const getSuffixes = function (str = '') {
  let list = []
  for (let i = max; i >= 0; i -= 1) {
    if (str.length - 1 <= i) {
      continue
    }
    let n = str.length - i - 1
    let suffix = str.substring(n, n + str.length - 1)
    list.push(suffix)
  }
  return list.reverse()
}

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