const percent = (part, total) => {
  let num = (part / total) * 100;
  num = Math.round(num * 10) / 10;
  return num;
};

const getWrongs = function (rules, outs) {
  return rules.map(a => {
    let [suff, yes, strength] = a
    let nos = outs.filter(str => str.endsWith(suff)).length
    // let outp = percent(outs, outs.length)
    return {
      suff,
      yes,
      // strength,
      nos,
      // outp,
      diff: yes - nos
    }
  })
}
export default getWrongs