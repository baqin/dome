<template>
  <div>
    <el-container>
      <el-header>
        <el-breadcrumb separator="/" class="box">
          <el-breadcrumb-item>首页</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="boxs"><i class="el-icon-info"></i></div>
      </el-header>
      <el-main>
        <div class="wrap">
          <div class="top1">当日数据:</div>
          <div class="top2">1新增用户</div>
          <div class="top2">0新增订单</div>
          <div class="top2">10新增管理员</div>
        </div>
        <div class="wrap">
          <div class="top5">总数据:</div>
          <div class="top2">69837 注册用户</div>
          <div class="top2">32676 订单</div>
          <div class="top2">124575 管理员</div>
        </div>
        <div id="main" style="width: 1200px; height: 400px;margin-top:60px;"></div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  data() {
    return {
      list: {
        title: {
          text: "走势图",
        },
        tooltip: {
          trigger: "axis",
        },
        legend: {},
        toolbox: {
          show: true,
          feature: {
            dataZoom: {
              yAxisIndex: "none",
            },
            dataView: { readOnly: false },
            magicType: { type: ["line", "bar"] },
            restore: {},
            saveAsImage: {},
          },
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
          axisLabel: {
            formatter: "{value}",
          },
        },
        series: [
          {
            name: "新注册用户",
            type: "line",
            data: [10, 11, 13, 11, 12, 12, 9],
            markPoint: {
              data: [
                { type: "max", name: "Max" },
                { type: "min", name: "Min" },
              ],
            },
            markLine: {
              data: [{ type: "average", name: "Avg" }],
            },
          },
          {
            name: "新增订单",
            type: "line",
            data: [1, -2, 2, 5, 3, 2, 0],
            markPoint: {
              data: [{ name: "周最低", value: -2, xAxis: 1, yAxis: -1.5 }],
            },
            markLine: {
              data: [
                { type: "average", name: "Avg" },
                [
                  {
                    symbol: "none",
                    x: "90%",
                    yAxis: "max",
                  },
                  {
                    symbol: "circle",
                    label: {
                      position: "start",
                      formatter: "Max",
                    },
                    type: "max",
                    name: "最高点",
                  },
                ],
              ],
            },
          },
              {
            name: "新增管理员",
            type: "line",
            data: [10, 11, 13, 11, 12, 12, 9],
            markPoint: {
              data: [
                { type: "max", name: "Max" },
                { type: "min", name: "Min" },
              ],
            },
            markLine: {
              data: [{ type: "average", name: "Avg" }],
            },
          },
        ],
      },
    };
  },
  methods: {},
  created() {},
  mounted() {
    var myChart = echarts.init(document.getElementById("main"));
    myChart.setOption(this.list);
  },
  components: {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.el-header {
  background: #eff2f7;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-content: center;
  .box {
    margin-top: 20px;
  }
  .boxs {
    margin-top: 10px;
    font-size: 30px;
  }
}
.wrap {
  display: flex;
  margin-top: 15px;
}
.top1 {
  width: 200px;
  height: 40px;
  background: #ff9800;
  line-height: 40px;
  text-align: center;
  color: #fff;
  font-size: 18px;
  border-radius: 10px;
}
.top5 {
  width: 200px;
  height: 40px;
  background: #20a0ff;
  line-height: 40px;
  text-align: center;
  color: #fff;
  font-size: 18px;
  border-radius: 10px;
}
.top2 {
  width: 200px;
  height: 40px;
  background: #e5e9f2;
  line-height: 40px;
  text-align: center;
  color: #666666;
  font-size: 18px;
  border-radius: 10px;
  margin-left: 30px;
}
</style>
