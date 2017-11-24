const merge = require('webpack-merge')
const prod = require('./webpack.prod.config')

module.exports = merge(prod, {
  output: {
    filename: '../index.js',
    library: 'sme-vdom'
  }
})
