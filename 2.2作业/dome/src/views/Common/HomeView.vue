<!-- 登录页面 -->
<template>
  <div class="home">
    <div class="login">
      <!-- 标题 -->
      <h1>iHRM后台登录系统</h1>
      <!-- 表单 -->
      <el-form class="from" ref="ruleForm" :model="form" :rules="rules">
        <el-form-item prop="mobile">
          <el-input placeholder="mobile" v-model="form.mobile" prefix-icon="el-icon-user" />
        </el-form-item>
        <el-form-item prop="password">
          <el-input placeholder="password" show-password v-model="form.password" prefix-icon="el-icon-lock" />
        </el-form-item>
        <el-button class="btn" type="primary" @click="submitForm">登录</el-button>
      </el-form>
      <div class="text">账号：13800000002 密码：123456</div>
      <!-- 底部 -->
      <div class="foot">
        <a class="color" href="https://shuiruohanyu.gitee.io/yyds/document/">学习文档</a>
      </div>
    </div>
  </div>
</template>

<script>
import { login } from "@/api/login"
import { setToken } from "@/Untils/auth"
export default {
  data() {
    return {
      form: {
        mobile: "13800000002",
        password: "123456"
      },
      rules: {
        mobile: [{ required: true, message: "请输入账号", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    }
  },
  methods: {
    /*登录逻辑*/
    submitForm() {
      /*判空*/
      if (this.form.mobile == "" || this.form.password == "") {
        this.$message.error("账号或密码为空")
      } else {
        login(this.form).then((res) => {
          console.log(res)
          if (res.data.code == 10000) {
            setToken(res.data.data) //存储token
            this.$router.push("/userIndex") //跳转页面
            //提示信息
            this.$notify({
              title: "操作",
              message: "登录成功",
              type: "success"
            })
          } else {
            this.$notify({
              title: "操作",
              message: res.data.message,
              type: "warning"
            })
          }
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  background-image: url(@/assets/background.jpg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
}
.login {
  width: 400px;
  padding: 10px;
  margin: 180px auto;
  .from {
    margin-top: 20px;
    .btn {
      width: 100%;
    }
  }
}
h1 {
  margin: 0;
  color: #fff;
  font-family: "宋体";
  font-size: 42px;
  text-align: center;
}
.text {
  color: #fff;
  margin-top: 15px;
  font-size: 14px;
  margin-bottom: 20px;
}
.foot {
  text-align: center;
  .color {
    padding: 10px;
    background-color: orange;
    color: #fff;
    border: none;
    font-size: 14px;
    border-radius: 6px;
    text-decoration: none;
  }
}
</style>
