
const getExceptions = function (rules, byTag, tag) {
  let exceptions = {}
  Object.keys(byTag).forEach(k => {
    if (k === tag) {
      return
    }
    let words = byTag[k]
    rules.forEach(r => {
      words.forEach(w => {
        if (w.endsWith(r.suff)) {
          exceptions[w] = k
        }
      })
    })
  })
  return exceptions
}

// order rules by suffix length
const indexRules = function (rules, tag) {
  let byN = []
  rules.forEach(rule => {
    let len = rule.suff.length
    byN[len] = byN[len] || {}
    byN[len][rule.suff] = tag
  })
  // sort-out empties
  for (let i = 0; i < byN.length; i += 1) {
    byN[i] = byN[i] || {}
  }
  return byN
}

const fmt = function (rules, byTag, tag) {
  let exceptions = getExceptions(rules, byTag, tag)
  rules = indexRules(rules, tag)
  return { rules, exceptions }
}
export default fmt