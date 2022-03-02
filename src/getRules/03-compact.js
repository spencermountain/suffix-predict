
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
      return 1
    } else if (a.suff.length < b.suff.length) {
      return -1
    }
    return 0
  })
}

// are there longer rules that are mostly just as good?
const preferLong = function (rules) {
  rules = rules.filter((rule, i) => {
    for (let k = i + 1; k < rules.length; k += 1) {
      let safer = rules[k]
      if (safer.suff.endsWith(rules[i].suff)) {
        let diff = rule.yes - safer.yes
        let drop = Math.round((diff / rule.yes) * 100)
        // is this longer version within 30% of the short one?
        if (drop < 30) {
          // console.log(rule.suff, ' -> ', safer.suff, drop + '% ')
          return false //remove the short one
        }
      }
    }
    return true
  })
  return rules
}


const decide = function (rules) {
  rules = rules.filter(o => o.diff > 1.1 && o.yes > 5 && o.yes > o.nos)
  rules = sortByLength(rules)
  rules = preferLong(rules)
  rules = sort(rules)
  return rules
}
export default decide