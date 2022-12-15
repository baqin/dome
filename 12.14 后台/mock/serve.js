let express = require("express") //引入express
let Mock = require("mockjs") //引入mock
const loginData = require("./common/login.json")
const menusData = require("./common/menus.json")
const usersData = require("./common/users.json")
let app = express() //实例化express

// 登陆接口
app.use("/login", function (req, res) {
  console.log(req, "req")
  res.json(
    Mock.mock({
      ...loginData
    })
  )
})

// 左侧导航
app.use("/menus", function (req, res) {
  console.log(req, "req")
  res.json(
    Mock.mock({
      ...menusData
    })
  )
})

app.use("/users", function (req, res) {
  console.log(req, "req")
  res.json(
    Mock.mock({
      ...usersData
    })
  )
})
app.listen("3090", () => {
  console.log("监听端口 8888")
})
