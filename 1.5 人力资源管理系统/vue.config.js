const { defineConfig } = require('@vue/cli-service')
let target =
  process.env.VUE_APP_MOCK_ENABLE == 'true'
    ? 'http://localhost:3090'
    : process.env.VUE_APP_CONSOLE_URL
module.exports = defineConfig({
  transpileDependencies: true,
  // 默认关闭生产环境的资源
  lintOnSave: false,
  // 根目录
  publicPath: './',
  productionSourceMap: false,
  // 打包时候的文件夹名称
  outputDir: 'dist',
  // 放置打包时静态资源文件生成的存放位置
  assetsDir: 'assets',
  // 本地的环境代理配置
  devServer: {
    // 端口号
    port: '9999',
    host: 'localhost',
    // 默认是否打开浏览器
    open: false,
    // 是都启用https
    https: false,
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        // 默认开启代理模式
        changeOrigin: true,
        // 如果是http接口,需要配置该参数
        secure: false,
        // 代理的地址
        target: target,
        // 路径的重命名
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: ''
        }
      }
    }
  }
})
