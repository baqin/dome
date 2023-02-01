<template>
  <div class="box">
    <el-form
      ref="loginForm"
      :model="loginForm"
      :rules="loginRules"
      class="nav"
      auto-complete="on"
      label-position="left"
    >
      <div class="title-container">
        <h3 class="title">
          <img src="@/assets/下载.png" alt="" />
        </h3>
      </div>

      <el-form-item prop="mobile">
        <i class="el-icon-user-solid"> </i>
        <el-input
          ref="username"
          v-model="loginForm.mobile"
          placeholder="请输入手机号"
          type="text"
          tabindex="1"
        />
      </el-form-item>

      <el-form-item prop="password">
        <i class="el-icon-lock"> </i>
        <el-input
          :key="passwordType"
          show-password
          ref="password"
          v-model="loginForm.password"
          :type="passwordType"
          placeholder="请输入密码"
          tabindex="2"
          @keyup.enter.native="handleLogin"
        />
        <span class="show-pwd"> </span>
      </el-form-item>

      <el-button
        class="loginBtn"
        :loading="loading"
        type="primary"
        style="width: 100%; margin-bottom: 30px"
        @click="handleLogin"
        >登录</el-button
      >

      <div class="tips">
        <!-- <span style="margin-right: 20px">账号：13800000002</span>
        <span> 密码：123456</span> -->
				<p>还没有账号？立即注册</p>
      </div>
    </el-form>
  </div>
</template>

<script>
import { login } from "../../untils/login"
import { setToken, getToken } from "../../untils/auth"
export default {
  data() {
    return {
      loginForm: {
        mobile: "13800000002",
        password: "123456"
      },
      loginRules: {
        mobile: [
          { required: true, trigger: "blur", message: "手机号不能为空" },
          { min: 6, max: 16, message: "密码的长度应该为6-12位之间" }
        ],
        password: [
          { required: true, trigger: "blur", message: "密码不能为空" },
          {
            min: 6,
            max: 16,
            message: "密码的长度应该为6-16位之间"
          }
        ]
      },
      loading: false,
      passwordType: "password"
    }
  },

  methods: {
    handleLogin() {
      this.loading = true
      login({ ...this.loginForm }).then((res) => {
        this.loading = false
        console.log(res.data.data)
        setToken(res.data.data)
        this.$router.push("/index")
				 this.$notify({
          // title: '成功',
          message: '登录成功',
          type: 'success'
        });
      })
    }
  }
}
</script>

<style lang="scss">
$bg: #283443;
$light_gray: #68b0fe;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .box .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.box {
  background: url("../../assets/1.jpg") no-repeat; // 设置背景图片
  background-position: center; // 将图片位置设置为充满整个屏幕
  .el-input {
    display: inline-block;
    height: 47px;
    width: 93%;

    input {
      background: transparent;
      border: 0px;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(255, 255, 255, 0.7); // 输入登录表单的背景色
    border-radius: 5px;
    color: #454545;
  }
  .el-form-item__error {
    color: #fff;
  }
  .loginBtn {
    background: #407ffe;
    height: 64px;
    line-height: 32px;
    font-size: 24px;
  }
}
</style>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;

.box {
  min-height: 100%;
  width: 100vw;
	height: 100vh;
  background-color: $bg;
  overflow: hidden;
  i {
    margin-left: 20px;
  }
  .nav {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;
		p{
			text-align: center;
		}
  }
  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }
}
</style>
