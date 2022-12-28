let express = require("express") //引入express
let Mock = require("mockjs") //引入mock
let logindata = require("./common/login.json")
let app = express() //实例化express

/**登录接口 */
app.use("/login", function (req, res) {
  res.json(
    Mock.mock({
      ...logindata
    })
  )
})

app.listen("8091", () => {
  console.log("监听端口 8091")
})
