import getAll from './01-getAll.js'
import score from './02-score.js'
import compact from './03-compact.js'
import fmt from './04-fmt.js'


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
  let byGroup = {}
  vals.forEach(val => {
    let { ins, outs } = splitFor(val, pairs)
    let inRules = getAll(ins)
    inRules = score(inRules, outs)
    byGroup[val] = inRules
  })
  // keep only good rules
  byGroup = compact(byGroup)
  // console.log(byGroup)
  return fmt(byGroup, pairs)
}
export default classify