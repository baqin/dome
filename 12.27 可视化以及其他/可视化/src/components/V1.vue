<template>
	<div class="nav">
		<div>
			<h3>慕课外卖用户总数</h3>
			<p style="font-size:12px;">User Total Count</p>
			<h2>2,024,280</h2>
			<p style="color: #8ebf55;">每日增长率: 73.90% 每月增长率: 117.37%</p>
			<!-- <img src="../assets/1.png" alt="" srcset=""> -->
			<div id="main" style="width: 350px;height:8px;"></div>
		</div>
 </div>
</template>

<script>
import * as echarts from 'echarts';
export default {
	data () {
		return {
			 option : {
				grid: {
					top: 0,
					bottom: 0,
					left: '0',
					right: '10%',
				},
				xAxis: {
					show: false,
					type: 'value',
					boundaryGap: [0, 0],
				},
				yAxis: [
					{
						type: 'category',
						data: [''],
						axisLine: { show: false },
						axisTick: [
							{
								show: false,
							},
						],
					},
				],
				series: [
					{
						name: '金额',
						type: 'bar',
						zlevel: 1,
						itemStyle: {
							normal: {
								barBorderRadius: 30,
								color: new echarts.graphic.LinearGradient(1, 0, 0, 1, [
									{
										offset: 1,
										color: '#939496',
									},
								]),
							},
						},
						barWidth: 20,
						data: [15],
					},
					{
						name: '背景',
						type: 'bar',
						barWidth: 20,
						barGap: '-100%',
						data: [20],
						itemStyle: {
							normal: {
								color: '#424345',

								barBorderRadius: 30,
							},
						},
					},
				],
			}
		}
	},
	methods: {

	},
	created () {

	},
	mounted () {
		var myChart = echarts.init(document.getElementById('main'));
		 myChart.setOption(this.option);
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
#main{

	border: 1px solid #939496;
}
.nav{
	background: #424345;
	width: 100%;
	color: #fff;
	padding: 5px;
	box-sizing: border-box;
	img{
		width: 95%;
	}
}
</style>
