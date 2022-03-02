const postProcess = function (results) {
  let already = new Set()
  Object.keys(results).forEach(k => {
    results[k] = results[k].filter(r => {
      if (already.has(r.suff)) {
        console.log('- ' + r.suff)
        return false
      }
      already.add(r.suff)
      return true
    })
  })
  return results
}
export default postProcess