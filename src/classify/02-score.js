const percent = (part, total) => {
  let num = (part / total) * 100;
  num = Math.round(num * 10) / 10;
  return num;
};

const getWrongs = function (rules, outs) {
  rules = rules.map(a => {
    let [suff, yes, per] = a
    let nos = outs.filter(str => str.endsWith(suff)).length
    let outp = percent(nos, outs.length)
    return {
      suff,
      yes,
      // strength,
      nos,
      // outp,
      diff: per - outp
    }
  })
  return rules.sort((a, b) => {
    if (a.diff > b.diff) {
      return -1
    } else if (a.diff < b.diff) {
      return 1
    }
    return 0
  })
}
export default getWrongs