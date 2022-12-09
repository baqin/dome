<template>
	<div>
		<el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/Index' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>数据统计</el-breadcrumb-item>
      <el-breadcrumb-item>数据报表</el-breadcrumb-item>
    </el-breadcrumb>
		<div id="main" style="width: 1200px; height: 400px;margin-top:60px;"></div>
 </div>
</template>

<script>
import * as echarts from "echarts";
export default {
	data () {
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
		}
	},
	methods: {
		fn(){
			  this.$http.get("/api/reports/type/1").then((res) => {
        console.log(res)
        // this.list = res.data.data.users
        // this.total = res.data.data.total
      })
		}
	},
	created () {
		this.fn()
	},
	mounted () {
		 var myChart = echarts.init(document.getElementById("main"));
    myChart.setOption(this.list);
	},
	components: {

	},
	computed: {

	},
	watch: {

	},
}
</script>

<style lang='scss' scoped>
</style>
