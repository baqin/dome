<!-- 首页模块 -->
<template>
  <div class="user">
    <div class="content">
      <el-card class="box-card">
        <!-- 头部 -->
        <div class="card-top">
          <div class="img">
            <img :src="staffPhoto" alt="" />
          </div>
          <div>
            <div style="font-size: 20px">早安，{{ username }}，祝你开心每一天!</div>
            <div style="font-size: 16px; color: #aaa">{{ username }} | 传智博客-总裁办</div>
          </div>
        </div>
      </el-card>
      <!-- 下面部分 -->
      <div class="type">
        <div class="type-left">
          <!-- 工作日历 -->
          <el-card class="box-card">
            <template #header>
              <div class="card-header">
                <span>工作日历</span>
              </div>
            </template>
            <div>
              <el-calendar ref="calendar"> </el-calendar>
            </div>
          </el-card>
          <!-- 左边公告部分 -->
          <el-card class="box-card">
            <template #header>
              <div class="card-header">
                <span>公告</span>
              </div>
            </template>
            <div style="display: flex; align-items: center">
              <img src="http://ihrm-java.itheima.net/static/img/img.0615818.jpeg" alt="" style="width: 60px" />
              <div>
                <span class="span">朱继柳</span> 发布了 第1期"传智大讲堂"互动讨论获奖名单公布
                <div style="margin-top: 10px">2018-07-21 15：21：38</div>
              </div>
            </div>
            <div style="padding: 0 60px 0 20px">
              <hr />
            </div>
            <div style="display: flex; align-items: center">
              <img src="http://ihrm-java.itheima.net/static/img/img.0615818.jpeg" alt="" style="width: 60px" />
              <div>
                <span class="span">朱继柳</span> 发布了 第1期"传智大讲堂"互动讨论获奖名单公布
                <div style="margin-top: 10px">2018-07-21 15：21：38</div>
              </div>
            </div>
            <div style="padding: 0 60px 0 20px">
              <hr />
            </div>
            <div style="display: flex; align-items: center">
              <img src="http://ihrm-java.itheima.net/static/img/img.0615818.jpeg" alt="" style="width: 60px" />
              <div>
                <span class="span">朱继柳</span> 发布了 第1期"传智大讲堂"互动讨论获奖名单公布
                <div style="margin-top: 10px">2018-07-21 15：21：38</div>
              </div>
            </div>
            <div style="padding: 0 60px 0 20px">
              <hr />
            </div>
          </el-card>
        </div>
        <!-- 右边导航部分 -->
        <div class="type-right">
          <!-- 流程申请 -->
          <el-card class="box-card">
            <div class="card-header">
              <span class="right-top">流程申请</span>
            </div>
            <div class="top-btn">
              <button @click="applyStatus = !applyStatus">加班离职</button>
              <button @click="leaveStatus = !leaveStatus">请假调休</button>
              <button>审批列表</button>
              <button @click="$router.push('/Myinfor')">我的信息</button>
            </div>
          </el-card>
          <!-- 绩效指数 -->
          <el-card class="box-card">
            <div class="card-header">
              <span class="right-top">绩效指数</span>
            </div>
            <div class="top-btn" id="main"></div>
          </el-card>
          <!-- 帮助链接 -->
          <el-card class="box-card">
            <div class="card-header">
              <span class="right-top">帮助链接</span>
            </div>
            <div class="right-img">
              <img src="@/assets/url.png" alt="" />
              <div>
                <span>入门指南</span>
                <span>在线帮助手册</span>
                <span>联系技术支持</span>
              </div>
            </div>
          </el-card>
        </div>
      </div>
    </div>
    <Overtime v-if="applyStatus" />
    <leavetake v-if="leaveStatus" />
  </div>
</template>

<script>
import Overtime from "./Overtime.vue"
import leavetake from "./leavetake.vue"
import { getUsername } from "@/api/Homepage"
import * as echarts from "echarts"

export default {
  data() {
    return {
      applyStatus: false,
      leaveStatus: false,
      username: "管理员",
      staffPhoto: "http://ihrm-java.itheima.net/static/img/head.b6c3427.jpg"
    }
  },
  created() {
    /*发起请求*/
    getUsername().then((res) => {
      console.log(res)
      this.username = res.data.data.username
    })
  },
  mounted() {
    var chartDom = document.getElementById("main")
    var myChart = echarts.init(chartDom)
    var option

    option = {
      title: {
        text: "人力资源基础绩效表"
      },
      radar: {
        // shape: 'circle',
        indicator: [
          { name: "考勤", max: 6500 },
          { name: "工资", max: 16000 },
          { name: "社保", max: 30000 },
          { name: "工作效率", max: 46000 },
          { name: "知识分享", max: 56000 },
          { name: "代码行数", max: 36000 }
        ]
      },
      series: [
        {
          name: "Budget vs spending",
          type: "radar",
          data: [
            {
              value: [4200, 3000, 20000, 35000, 50000, 18000],
              name: "Allocated Budget"
            },
            {
              value: [5000, 14000, 28000, 26000, 42000, 21000],
              name: "Actual Spending"
            }
          ]
        }
      ]
    }

    option && myChart.setOption(option)
  },
  components: { Overtime, leavetake }
}
</script>

<style lang="scss" scoped>
#main {
  width: 600px;
  height: 450px;
}
.box-card {
  margin-top: 10px;
  font-size: 14px;
}
.type {
  display: flex;
}
.type-right {
  width: 45%;
  margin-left: 10px;
}
.span {
  color: #4475fa;
}
.user {
  height: 100%;
}
p {
  background-color: #eaecef;
  width: 100%;
  margin: 0;
  text-align: center;
  padding-bottom: 10px;
}
.content {
  padding: 0 10px;
  background-color: #eaecef;
}
.img {
  width: 80px;
  height: 80px;
  margin-right: 20px;
  img {
    width: 100%;
    height: 100%;
  }
}
.el-card__body,
.el-main {
  padding: 10px;
}
.card-top {
  display: flex;
  div:nth-child(2) {
    padding-top: 10px;
  }
}
.type-left {
  width: 55%;
}
.right-top {
  font-size: 20px;
  padding-bottom: 10px;
  border-bottom: 6px solid #8a97f8;
}
.top-btn {
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  button {
    padding: 10px 30px;
    margin-top: 10px;
    margin-right: 20px;
    border: 1px solid #ccc;
    color: rgba(67, 66, 66, 0.802);
    background-color: #ffffff;
    border-radius: 10px;
  }
}
.top-btn button:hover {
  cursor: pointer;
}
.right-img {
  width: 100%;
  margin-top: 30px;
  img {
    width: 100%;
  }
  div {
    display: flex;
    justify-content: space-between;
  }
}
</style>
