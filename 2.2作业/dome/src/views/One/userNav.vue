<template>
  <!-- 右边导航部分 -->
  <div class="type-right" style="width: 45%; margin-left: 10px">
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
    <el-card style="margin-top: 10px" id="main"></el-card>
    <!-- 帮助链接 -->
    <el-card class="box-card" style="margin-top: 10px">
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
</template>

<script>
import * as echarts from "echarts"
export default {
  data() {
    return {
      applyStatus: false,
      leaveStatus: false
    }
  },
  mounted() {
    var chartDom = document.getElementById("main")
    var myChart = echarts.init(chartDom)
    var option

    option = {
      title: {
        text: "Basic Radar Chart"
      },
      legend: {
        data: ["Allocated Budget", "Actual Spending"]
      },
      radar: {
        // shape: 'circle',
        indicator: [
          { name: "Sales", max: 6500 },
          { name: "Administration", max: 16000 },
          { name: "Information Technology", max: 30000 },
          { name: "Customer Support", max: 38000 },
          { name: "Development", max: 52000 },
          { name: "Marketing", max: 25000 }
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
  }
}
</script>

<style lang="scss" scoped>
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
  padding: 10px;
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
.type {
  margin-top: 10px;
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
