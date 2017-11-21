import resolve from 'rollup-plugin-node-resolve'
// import commonjs from 'rollup-plugin-commonjs'
import replace from 'rollup-plugin-replace'
import uglify from 'rollup-plugin-uglify'
import babel from 'rollup-plugin-babel'

export default {
  name: 'vdom.js',
  input: './src/index.js',
  output: {
    file: './dist/vdom.js',
    format: 'umd'
  },
  plugins: [
    resolve(),
    /**
     * doc: [babel rollup](https://rollupjs.org/#babel)
     * for detail: [discuss](https://github.com/rollup/rollup-plugin-babel/issues/120)
     */
    babel(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    uglify()
  ]
}
