<!-- 我的信息 -->
<template>
  <!-- 个人信息 -->
  <div class="Myinfor">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span style="color: #409eff; padding-bottom: 16px; border-bottom: 3px solid #409eff">个人信息</span>
      </div>
      <div style="display: flex">
        <div class="left">
          <img src="http://ihrm-java.itheima.net/static/img/img.0615818.jpeg" alt="" />
        </div>
        <div class="right">
          <p>
            <span>姓名</span>
            <span>
              <el-input v-model="form.username" placeholder="请输入内容"></el-input>
            </span>
          </p>
          <p>
            <span>手机号</span>
            <span>
              <el-input v-model="form.mobile" placeholder="请输入内容"></el-input>
            </span>
          </p>
          <p>
            <span>性别</span>
            <el-select placeholder="男" value="男">
              <el-option label="男" value="男"> </el-option>
              <el-option label="女" value="女"> </el-option>
            </el-select>
          </p>
          <p>
            <span>出生日期</span>
            <el-date-picker type="date" v-model="form.correctionTime" placeholder="选择日期"> </el-date-picker>
          </p>
          <p style="padding-left: 90px">
            <el-button type="primary">保存</el-button>
            <el-button>取消</el-button>
          </p>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import { getUsername } from "@/api/Homepage"
export default {
  data() {
    return {
      form: {}
    }
  },
  created() {
    // 发起请求
    getUsername().then((res) => {
      console.log(res)
      this.form = res.data.data
    })
  }
}
</script>

<style lang="scss" scoped>
.Myinfor {
  padding: 10px;
}
p {
  display: flex;
  align-items: center;
  span:nth-child(1) {
    display: inline-block;
    width: 80px;
    text-align: right;
    margin-right: 10px;
  }
}
.left {
  img {
    width: 300px;
    height: 300px;
  }
}
</style>
