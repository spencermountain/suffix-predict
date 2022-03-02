
const combine = function (all) {
  let byLen = []
  Object.keys(all).forEach(k => {
    all[k].forEach(o => {
      byLen[o.suff.length] = byLen[o.suff.length] || {}
      byLen[o.suff.length][o.suff] = k
    })
  })
  return byLen
}

export default combine