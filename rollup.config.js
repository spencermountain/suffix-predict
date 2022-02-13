import { terser } from 'rollup-plugin-terser'
const name = 'suffix-predict'

import { version } from './package.json'
const banner = `/* ${name} ${version} MIT */`

export default [
  {
    input: 'src/index.js',
    output: [
      {
        file: `builds/${name}.mjs`,
        format: 'esm',
        banner: banner,
      },
    ],
    plugins: [terser()],
  },
  {
    input: 'src/index.js',
    output: [
      {
        file: `builds/${name}.js`,
        format: 'umd',
        name: 'suffixPredict',
        banner: banner,
      },
    ],
    plugins: [terser()],
  }
]
