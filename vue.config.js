// const path = require('path')
const webpack = require('webpack')

module.exports = {
  productionSourceMap: false,

  // outputDir: path.resolve(__dirname, './docs'),

  // For hot reload
  devServer: {
    host: 'localhost'
  },

  chainWebpack: (config) => {
    config.plugins.delete('prefetch')

    // SVG
    config.module
      .rule('vue')
      .use('vue-svg-inline-loader')
      .loader('vue-svg-inline-loader')

    // Remove unnecessary moment locales
    config.plugin('ignore')
      .use(webpack.IgnorePlugin, [
        /^\.\/locale$/, /moment$/
      ])
      .end()

    config.plugin('define').tap((definitions) => {
      definitions[0]['process.env']['CHAIN'] = JSON.stringify(process.env.CHAIN)
      return definitions
    })
  }
}
