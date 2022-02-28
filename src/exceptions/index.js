const top = 1000

const getExceptions = function (suff, byTag, tag) {
  let exceptions = {}
  Object.keys(byTag).forEach(k => {
    if (k === tag) {
      return
    }
    let words = byTag[k].slice(0, top)
    words.forEach(w => {
      if (w.endsWith(suff)) {
        exceptions[w] = k
      }
    })
  })

  let out = {}
  Object.entries(exceptions).forEach(a => {
    out[a[1]] = out[a[1]] || []
    out[a[1]].push(a[0])
  })
  return out
}
export default getExceptions