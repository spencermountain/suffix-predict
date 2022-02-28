const top = 1000

const getExceptions = function (rules, byTag, tag) {
  let exceptions = {}
  rules.forEach(r => {
    Object.keys(byTag).forEach(k => {
      if (k === tag) {
        return
      }
      let words = byTag[k].slice(0, top)
      words.forEach(w => {
        if (w.endsWith(r.suff)) {
          exceptions[w] = k
        }
      })
    })
  })
  return exceptions
}
export default getExceptions