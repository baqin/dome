const { defineConfig } = require("@vue/cli-service")
console.log(process.env.VUE_APP_MOCK_ENABLE)
let target =
  process.env.VUE_APP_MOCK_ENABLE == "false"
    ? "http://ihrm.itheima.net/prod-api"
    : "http://localhost:9999"
console.log(target)

module.exports = defineConfig({
  lintOnSave: false, //关闭语法检查
  transpileDependencies: true,
  outputDir: "dist",
  assetsDir: "assets",
  devServer: {
    port: "9999",
    host: "localhost",
    open: true,
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
          ["^" + process.env.VUE_APP_BASE_API]: ""
        }
      }
    }
  }
})
