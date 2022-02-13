
const fmtRules = function (byRule) {
  let rules = []
  Object.keys(byRule).forEach(k => {
    byRule[k].forEach(rule => {
      rules.push([rule.suff, k])
    })
  })
  rules = rules.sort((a, b) => {
    if (a[0].length > b[0].length) {
      return -1
    } else if (a[0].length < b[0].length) {
      return 1
    }
    return 0
  })
  return rules
}

const getExceptions = function (rules, pairs) {
  let exceptions = {}
  pairs.forEach(a => {
    let [w, tag] = a
    for (let i = 0; i < rules.length; i += 1) {
      if (w.endsWith(rules[i][0]) && tag !== rules[i][1]) {
        exceptions[w] = tag
      }
    }
  })
  return exceptions
}

// order rules by suffix length
const indexRules = function (rules) {
  let byN = []
  rules.forEach(rule => {
    let len = rule[0].length
    byN[len] = byN[len] || {}
    byN[len][rule[0]] = rule[1]
  })
  // sort-out empties
  for (let i = 0; i < byN.length; i += 1) {
    byN[i] = byN[i] || {}
  }
  return byN
}

const fmt = function (byRule, pairs) {
  let rules = fmtRules(byRule)
  let exceptions = getExceptions(rules, pairs)
  rules = indexRules(rules)
  return { rules, exceptions }
}
export default fmt