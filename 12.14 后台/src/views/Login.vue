<template>
  <div class="wrap">
    <div class="center">
      <div class="top">
        <img
          src="1.jpg"
          alt=""
          class="imgs"
        />
      </div>
      <div class="tests">
        <el-form ref="form" :model="form" label-width="80px" :rules="rules">
          <el-form-item prop="username">
            <el-input
              v-model="form.username"
              prefix-icon="el-icon-user-solid"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              v-model="form.password"
              prefix-icon="el-icon-s-goods"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              style="margin-left: 200px"
              @click="submitForm('form')"
              >登陆</el-button
            >
            <el-button>重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { setToken } from "../../untils/auth"
import { STATUS } from "@/constStatus/initStatus"
export default {
  data() {
    return {
      form: {
        username: "",
        password: ""
      },
      rules: {
        username: [{ required: true, message: "请输入账号", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    }
  },
  methods: {
    /**登陆接口 */
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$http
            .post(this.$http.addorUrl("/login"), this.form)
            .then((res) => {
              console.log(res)
              if (res.data.meta.status == STATUS.SUCCESS) {
                setToken(res.data.data.token)
                this.$notify({
                  title: "登陆成功",
                  message: res.data.meta.mag,
                  type: "success",
                  duration: 4000
                })
                this.$router.replace("/welcome")
              } else {
                this.$notify.error({
                  title: "登陆失败",
                  message: res.data.meta.mag,
                  duration: 2000
                })
              }
            })
        }
      })
    }
  },
  created() {},
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.wrap {
  width: 100vw;
  height: 100vh;
  position: relative;
}
.center {
  width: 500px;
  height: 300px;
  background: #a5cefc;
  position: absolute;
  opacity: 0.5;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  box-shadow: 0 0 10px #fff;
  border-radius: 5%;
}
.top {
  width: 130px;
  height: 130px;
  border: 1px solid #efefef;
  border-radius: 50%;
  padding: 5px;
  position: absolute;
  left: 170px;
  top: -60px;
  .imgs {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #efefef;
  }
}
.tests {
  margin-top: 120px;
  width: 430px;
}
</style>
