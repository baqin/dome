const { defineConfig } = require("@vue/cli-service")
console.log(process)
// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const { VueLoaderPlugin } = require('vue-loader');
console.log(typeof process.env.VUE_APP_MOCK_ENABLE)
let target =
  process.env.VUE_APP_MOCK_ENABLE == "true"
    ? "http://localhost:3090"
    : process.env.VUE_APP_CONSOLE_URL
module.exports = defineConfig({
  /***入口起点(entry point) 指示 webpack 应该使用哪个模块 */
	// entry: './src/main.js',
	/**output 属性告诉 webpack 在哪里输出它所创建的 bundle，以及如何命名这些文件 */
	/**通过 output.filename 和 output.path 属性，来告诉 webpack bundle 的名称，
	 * 以及我们想要 bundle 生成(emit)到哪里 */
	// output: {
	// 	path: path.resolve(__dirname, 'dist'),
	// 	filename: 'my-first-webpack.bundle.js',
	// },
  /***
	 * webpack 的配置中，loader 有两个属性
	 * test 属性，识别出哪些文件会被转换
	 * use 属性，定义出在进行转换时，应该使用哪个 loader。
	 * 碰到「在 require()/import 语句中被解析为 '.txt' 的路径
	 * 先 use(使用) raw-loader 转换一下。
	 */
  // module: {
	// 	rules: [
	// 		{
	// 			test: /\.txt$/,
	// 			use: 'raw-loader',
	// 		},
	// 		{
	// 			test: /\.vue$/,
	// 			include: /src/,
	// 			use: ['vue-loader'],
	// 		},
	// 		{
	// 			test: /\.js$/,
	// 			use: {
	// 				loader: 'babel-loader',
	// 				options: {
	// 					presets: ['@babel/preset-env'],
	// 					plugins: [
	// 						[
	// 							'transform-remove-console',
	// 							{
	// 								exclude: ['log'],
	// 							},
	// 						],
	// 					],
	// 				},
	// 			},
	// 		},
	// 		{
	// 			test: /\.css$/,
	// 			use: ['style-loader', 'css-loader'],
	// 		},
	// 	],
	// },
	/***想要使用一个插件，你只需要 require() 它，然后把它添加到 plugins 数组中。
	 * 多数插件可以通过选项(option)自定义
	 * 也可以在一个配置文件中因为不同目的而多次使用同一个插件，
	 * 这时需要通过使用 new 操作符来创建一个插件实例。
	 *  */
	// plugins: [
	// 	new HtmlWebpackPlugin({
	// 		template: './src/index.html',
	// 	}),
	// 	new CleanWebpackPlugin(),
	// 	new VueLoaderPlugin(),
	// ],
	/***通过选择 development, production 或 none 之中的一个，来设置 mode 参数，
	 * 你可以启用 webpack 内置在相应环境下的优化。其默认值为 production。 */

	// mode: 'production',
  transpileDependencies: true,
  // 根目录
  publicPath: "./",
  lintOnSave: false,
  // 默认关闭生产环境的资源
  productionSourceMap: false,
  // 打包时候的文件夹名称
  outputDir: "dist",
  // 放置打包时静态资源文件生成的存放位置
  assetsDir: "assets",
  // 本地的环境代理配置
  devServer: {
    // 端口号
    port: "9999",
    // 开发运行时域名，设置成'0.0.0.0',在同一个局域网下,如果你的项目在运行，同时可以通过你的http://ip:port/...访问你的项目
    host: "localhost",
    // 默认是否打开浏览器
    open: false,
    // 是都启用https
    https: false,
    // proxy:{
    //   "/api":{
    //     // 默认开启代理模式
    //     changeOrigin:true,
    //     // 如果是http接口,需要配置该参数
    //     secure:false,
    //     // 代理的地址
    //     target:"url",
    //     // 路径的重命名
    //     pathRewrite:{
    //       "^/api":""
    //     }
    //   }
    // }
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
