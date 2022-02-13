import getAll from './01-getAll.js'
import countWrongs from './02-score.js'
import decideOn from './03-compact.js'

const splitFor = function (val, pairs) {
  let ins = new Set()
  let outs = new Set()
  pairs.forEach(a => {
    let [w, v] = a
    if (v === val) {
      ins.add(w)
    } else {
      outs.add(w)
    }
  })
  return {
    ins: Array.from(ins),
    outs: Array.from(outs),
  }
}

const classify = function (pairs) {
  let vals = new Set()
  pairs.forEach(a => {
    vals.add(a[1])
  })
  vals = Array.from(vals)
  let rules = {}
  vals.forEach(val => {
    let { ins, outs } = splitFor(val, pairs)
    let inRules = getAll(ins)
    inRules = countWrongs(inRules, outs)
    rules[val] = inRules
  })
  rules = decideOn(rules)
  return rules
}
export default classify