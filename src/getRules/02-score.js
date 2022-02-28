const percent = (part, total) => {
  let num = (part / total) * 100;
  num = Math.round(num * 10) / 10;
  return num;
};

const round = n => Math.round(n * 10) / 10

const getWrongs = function (rules, outs) {
  rules = rules.map(a => {
    let [suff, yes, per] = a
    let nos = outs.filter(str => str.endsWith(suff)).length
    let outp = percent(nos, outs.length)
    return {
      suff,
      yes,
      nos,
      per,
      outp,
      diff: round(per - outp)
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