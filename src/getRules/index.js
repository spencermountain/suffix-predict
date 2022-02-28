import getAll from './01-getAll.js'
import score from './02-score.js'
import compact from './03-compact.js'
import fmt from './04-fmt.js'
import { init } from '../lib.js'

const validate = (arr) => {
  return arr.filter(str => str)
}


const unwrap = function (byTag, want) {
  let rest = []
  Object.keys(byTag).forEach(tag => {
    if (tag !== want) {
      rest = rest.concat(byTag[tag])
    }
  })
  return { list: byTag[want], rest }
}

const classify = function (byTag, tag) {
  let { list, rest } = unwrap(byTag, tag)
  list = validate(list)
  rest = validate(rest)
  let inRules = getAll(list)
  // let outRules = getAll(rest)
  let rules = score(inRules, rest)


  // keep only good rules
  rules = compact(rules)
  return rules
  // return fmt(rules, byTag, tag)
}
export default classify