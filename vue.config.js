const { defineConfig } = require('@vue/cli-service')
const path = require('path')

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  chainWebpack: config => {
    const dir = path.resolve(__dirname, 'src/assets/icons')

    config.module
        .rule('svg-sprite')
        .test(/\.svg$/)
        .include.add(dir).end() // 包含 icons 目录
        .use('svg-sprite-loader').loader('svg-sprite-loader').options({extract: false}).end()
    config.plugin('svg-sprite').use(require('svg-sprite-loader/plugin'), [{plainSprite: true}])
    config.module.rule('svg').exclude.add(dir)
  }
})
