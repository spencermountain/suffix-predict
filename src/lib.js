const isObject = val => {
  return Object.prototype.toString.call(val) === '[object Object]'
}

const fromObj = function (obj) {
  let pairs = []
  Object.keys(obj).forEach(k => {
    obj[k].forEach(str => {
      pairs.push([str, k])
    })
  })
  return pairs
}

const init = function (pairs) {
  if (isObject(pairs)) {
    pairs = fromObj(pairs)
  }
  return pairs
}

export { init }