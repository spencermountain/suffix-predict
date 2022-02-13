
// sort by diff, and then by nos
const sort = function (arr) {
  return arr.sort((a, b) => {
    if (a.diff > b.diff) {
      return -1
    } else if (a.diff < b.diff) {
      return 1
    } else {
      if (a.nos > b.nos) {
        return 1
      } else if (a.nos < b.nos) {
        return -1
      }
    }
    return 0
  })
}

const sortByLength = function (arr) {
  return arr.sort((a, b) => {
    if (a.suff.length > b.suff.length) {
      return -1
    } else if (a.suff.length < b.suff.length) {
      return 1
    }
    return 0
  })
}

// are there shorter rules that are just as good?
const preferShort = function (rules) {
  rules = rules.filter((rule, i) => {
    for (let k = i + 1; k < rules.length; k += 1) {
      let smaller = rules[k]
      if (rules[i].suff.endsWith(smaller.suff)) {
        // we have found a rule that is smaller
        // is it just as good?
        if (smaller.diff >= rule.diff) {
          return false
        }
      }
    }
    return true
  })
  return rules
}

const clearOut = function (rules) {
  rules.forEach((rule, i) => {
    for (let k = i + 1; k < rules.length; k += 1) {
      let smaller = rules[k]
      // is it a subset, and it's worse?
      if (smaller.nos > rule.nos) {
        rules[k].redundant = true
      }
    }
  })
  return rules.filter(rule => !rule.redundant)
}

const decide = function (allRules) {
  Object.keys(allRules).forEach(k => {
    let rules = allRules[k].filter(o => o.diff > 0)
    rules = sortByLength(rules)
    rules = preferShort(rules)
    rules = clearOut(rules)
    rules = sort(rules)
    console.log(rules)
    // console.log(arr)
  })

}
export default decide