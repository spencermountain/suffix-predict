import getAll from './01-getAll.js'
import score from './02-score.js'
import compact from './03-compact.js'
import fmt from './04-fmt.js'
import { init } from '../lib.js'

const validate = (arr) => {
  return arr.filter(str => str)
}


const classify = function (list, rest) {
  list = validate(list)
  rest = validate(rest)
  let inRules = getAll(list)
  // let outRules = getAll(rest)
  let rules = score(inRules, rest)


  // keep only good rules
  rules = compact(rules)
  return rules
  // return fmt(byGroup, pairs)
}
export default classify