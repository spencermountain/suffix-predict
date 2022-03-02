import predict from './predict/index.js'
import getRules from './getRules/index.js'
import test from './test/index.js'
import getExceptions from './exceptions/index.js'
import validate from './validate/index.js'
import { compress, uncompress } from './compress/index.js'
import combine from './combine.js'

const debug = (str, model) => predict(str, model, true)



export { predict, getRules, compress, uncompress, test, validate, debug, getExceptions, combine }

