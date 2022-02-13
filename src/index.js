import predict from './predict/index.js'
import classify from './classify/index.js'
import test from './test/index.js'
import validate from './validate/index.js'
import { compress, uncompress } from './compress/index.js'

const debug = (str, model) => predict(str, model, true)

export { predict, classify, compress, uncompress, test, validate, debug }

