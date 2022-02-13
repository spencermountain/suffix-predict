import { init } from "../lib.js";

const validate = function (pairs) {
  pairs = init(pairs)

  let already = {}
  pairs.forEach(a => {
    let [w, tag] = a
    if (already[w] !== undefined && already[w] !== tag) {
      console.log(w, `  - ${already[w]},  ${tag}`)
    }
    already[w] = tag
  })
}
export default validate