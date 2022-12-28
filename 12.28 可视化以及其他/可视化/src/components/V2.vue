<template>
	<div>
		<div class="box">
			<h4>慕课外卖用户年龄分布&平均年龄</h4>
			<h2 style="margin:-25px 0 0 260px">30.08岁</h2>
			<p style="font-size:12px;">Dowbon of Age</p>
			<!-- <img src="../assets/2.png" alt="" srcset=""> -->
		<div id="charts" style="width: 350px;height:30px;"></div>
			<!-- <ul class="ul1">
				<li>0</li>
				<li>300,000</li>
				<li>600,000</li>
				<li>900,000</li>
				<li>1,200,000</li>
				<li>1,500,000</li>
				<li>1,739,222</li>
			</ul> -->
			<ul class="ul2">
				<li><h4>304,378</h4><p>0-20</p></li>
				<li><h4>505,391</h4><p>20-30</p></li>
				<li><h4>725,216</h4><p>30-50</p></li>
				<li><h4>505,391</h4><p>≥50</p></li>
			</ul>
		</div>
 </div>
</template>

<script>
import * as echarts from 'echarts';
export default {
	data () {
		return {

		}
	},
	methods: {
		getMychart() {
      var myChart = echarts.init(document.getElementById("charts"))
      var option = {
        color: ["#7da244", "#c6f278", "#d1f996", "#fafb9d"],
        legend: {},
        grid: {
          left: "5%",
          right: "6%",
          bottom: "3%",
          top: "8%",
          containLabel: true
        },
        xAxis: {
          type: "value",
          // show:false, // 不显示坐标轴线、坐标轴刻度线和坐标轴上的文字
          splitLine: {
            show: false // 不显示网格线
          },
          axisLine: {
            show: true, // 是否显示坐标轴轴线
            // symbol: ['none', 'arrow'],     // 轴线两端箭头，两个值，none表示没有箭头，arrow表示有箭头
            // symbolSize: [10, 15],     // 轴线两端箭头大小，数值一表示宽度，数值二表示高度
            lineStyle: {
              color: "#48494d", // 坐标轴线线的颜色
              width: "1", // 坐标轴线线宽
              type: "solid" // 坐标轴线线的类型（solid实线类型；dashed虚线类型；dotted点状类型）
            }
          }
        },
        yAxis: {
          type: "category",
          axisTick: {
            show: false //刻度线
          },
          axisLine: {
            show: false //隐藏y轴
          },
          axisLabel: {
            show: false //隐藏刻度值
          }

          // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        series: [
          {
            // name: 'Direct',
            type: "bar",
            stack: "total",
            // emphasis: {
            //   // focus: 'series'
            // },
            data: [500000],
            barWidth: 8
          },
          {
            // name: 'Mail Ad',
            type: "bar",
            stack: "total",
            label: {
              // show: true
            },
            emphasis: {
              focus: "series"
            },
            data: [500000]
          },
          {
            // name: 'Affiliate Ad',
            type: "bar",
            stack: "total",
            label: {
              // show: true
            },
            emphasis: {
              focus: "series"
            },
            data: [800000]
          },
          {
            // name: 'Video Ad',
            type: "bar",
            stack: "total",
            label: {
              // show: true
            },
            emphasis: {
              focus: "series"
            },
            data: [200000]
          }
        ]
      }
      myChart.setOption(option)
    }
	},
	created () {

	},
	mounted () {
		this.getMychart()
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
.box{
	width: 100%;
	background: #2a2b2d;
	color: #fff;
	margin-top: 5px;
	box-sizing: border-box;
	padding: 5px;
	#charts{
		width: 90%;
	}
	.ul1{
		display: flex;
		color: #43454a;
font-size:12px;
justify-content: space-between;
box-sizing: border-box
	}
	.ul2{
		display: flex;
		justify-content: space-between;
		text-align: center;
		align-items: center;
		width: 100%;
		color: #fff;
		li{
			padding: 15px;
			box-sizing: border-box;
		}
	}
}
</style>
