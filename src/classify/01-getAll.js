const max = 6

const getSuffixes = function (str = '') {
  let list = []
  for (let i = max; i >= 0; i -= 1) {
    if (str.length - 1 <= i) {
      continue
    }
    let n = str.length - i - 1
    let suffix = str.substring(n, n + str.length - 1)
    list.push(suffix)
  }
  return list.reverse()
}

const toPercent = function (res, total) {
  return res.map(a => {
    let num = (a[1] / total) * 100;
    num = Math.round(num * 10) / 10;
    a.push(num)
    return a
  })
}

const getAll = function (arr) {
  let res = {}
  arr.forEach((str) => {
    let list = getSuffixes(str)
    list.forEach(suff => {
      res[suff] = res[suff] || 0
      res[suff] += 1
    })
  })
  res = Object.entries(res)
  res = toPercent(res, arr.length)
  return res.sort((a, b) => {
    if (a[1] > b[1]) {
      return -1
    } else if (a[1] < b[1]) {
      return 1
    }
    return 0
  })
}

export default getAll
