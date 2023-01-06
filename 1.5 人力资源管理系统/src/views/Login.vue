<template>
  <div class="login">
    <div class="center">
      <h1>iHRM 后台登陆系统</h1>
      <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        :rules="rules"
        label-width="40px"
        class="demo-ruleForm"
        status-icon>
        <el-form-item prop="username">
          <el-input
            :prefix-icon="ElementPlusIconsVue.UserFilled"
            v-model="ruleForm.mobile"
            style="height: 50px; opacity: 0.5"
          />
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            :prefix-icon="ElementPlusIconsVue.Lock"
            v-model="ruleForm.password"
            style="height: 50px; opacity: 0.5"
            show-password
          />
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            class="click-login"
            @click="submitForm(ruleFormRef)"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
      <h4 style="text-align: center; color: #ffffff">还没有账号？立即注册</h4>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, toRefs } from 'vue'
import { FormInstance, FormRules } from 'element-plus'
import { useRouter, useRoute } from 'vue-router'

/**引入封装好的登录校验 */
import * as TS from '../common/defind/defind'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
import { LoginPost, profilePost } from '../common/api/api'
import { ElNotification } from 'element-plus'
const router = useRouter()

const ruleFormRef = ref<FormInstance>()
/**账号密码双向绑定 */
const ruleForm = reactive<TS.LoginForm>({
  mobile: '13800000002',
  password: '123456'
})
/**账号密码的校验 */
const rules = reactive<FormRules>({
  mobile: [
    {
      required: true,
      message: '用户名不能为空',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '密码不能为空',
      trigger: 'blur'
    }
  ]
})
/**登录按钮的事件 */
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      if (ruleForm.mobile == '13800000002' && ruleForm.password == '123456') {
        LoginPost(ruleForm).then((res) => {
          console.log(res)
          router.push('/dashboard')
          ElNotification({
            title: '登录成功',
            message: '登录成功',
            type: 'success'
          })
        })
      } else {
        ElMessage.error('用户名或密码错误')
      }
    }
  })
}
</script>

<style lang="scss" scoped>
// 全局
.login {
  width: 100vw;
  height: 100vh;
  background: url(../assets/背景图.jpg);
  background-size: 100% 100%;
  /**中间内容 */
  .center {
    width: 500px;
    height: 500px;
    // background: #fff;
    position: absolute;
    // opacity: 0.5;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    // box-shadow: 0 0 10px #ddd;
    border-radius: 5%;

    h1 {
      color: #fff;
      font-size: 45px;
      text-align: center;
      margin-top: 10px;
    }
    .click-login {
      width: 460px;
      height: 50px;
    }
  }
}

.demo-ruleForm {
  width: 460px;
  margin-top: 20px;
}
</style>

function url(url: any, arg1: string) { throw new Error("Function not
implemented."); }
