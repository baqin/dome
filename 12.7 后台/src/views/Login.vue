<template>
  <div class="wrap">
    <div class="center">
      <div class="top">
        <img
          src="https://img1.baidu.com/it/u=1761313604,2010451631&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=700"
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
            <el-button >重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import {setToken} from '../../untils/auth.js'
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
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$http({method:"post",data:this.form,url:'/api/login'}).then(res=>{
						console.log(res);
						setToken(res.data.data.token)
					  this.$router.push('/Index')
					})
        } else {
          console.log("error submit!!")
          return false
        }
      })
    },

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
  background: #2b4b6b;
  position: relative;
}
.center {
  width: 500px;
  height: 300px;
  background: #fff;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  box-shadow: 0 0 10px #ddd;
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
  width: 450px;
}
</style>
