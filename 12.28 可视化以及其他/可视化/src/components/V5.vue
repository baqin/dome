<template>
	<div>
		<div class="box">
			 <h3  style="font-size:14px;">慕课外卖骑手概况</h3>
			<p style="font-size:12px;">Ride Greowfl nav</p>
			<!-- <img src="../assets/曲线.png" alt="">  -->
			<div id="charts5" style="width: 345px; height: 125px"></div>
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

	},
	created () {

	},
	mounted () {
			var myChart5 = echarts.init(document.getElementById('charts5'));

			const colorList = ['#537085', '#537085', '#537085', '#537085', '#537085'];
			var option = {
				// backgroundColor: '#fff',
				title: {
					// text: '慕课外卖骑手概况',
					textStyle: {
						fontSize: 12,
						fontWeight: 400,
						color: '#fff',
					},
					left: 'left',
					top: '5%',
				},
				legend: {
					icon: 'circle',
					top: '5%',
					right: '5%',
					itemWidth: 6,
					itemGap: 20,
					textStyle: {
						color: '#537085',
					},
				},
				tooltip: {
					trigger: 'axis',
					axisPointer: {
						label: {
							show: true,
							backgroundColor: '#fff',
							color: '#537085',
							borderColor: 'r#537085',
							shadowColor: '#537085',
							shadowOffsetY: 0,
						},
						lineStyle: {
							width: 0,
						},
					},
					backgroundColor: '#fff',
					textStyle: {
						color: '#5c6c7c',
					},
					padding: [10, 10],
					extraCssText: 'box-shadow: 1px 0 2px 0 rgba(163,163,163,0.5)',
				},
				grid: {
					top: '15%',
				},
				xAxis: [
					{
						type: 'category',
						data: [
							'1月',
							'2月',
							'3月',
							'4月',
							'5月',
							'6月',
							'7月',
							'8月',
							'9月',
							'10月',
							'11月',
							'12月',
						],
						axisLine: {
							lineStyle: {
								color: '#DCE2E8',
							},
						},
						axisTick: {
							show: false,
						},
						axisLabel: {
							interval: 0,
							textStyle: {
								color: '#556677',
							},
							// 默认x轴字体大小
							fontSize: 12,
							// margin:文字到x轴的距离
							margin: 15,
						},
						axisPointer: {
							label: {
								// padding: [11, 5, 7],
								padding: [0, 0, 10, 0],
								margin: 15,
								// 移入时的字体大小
								fontSize: 12,
								backgroundColor: {
									type: 'linear',
									x: 0,
									y: 0,
									x2: 0,
									y2: 1,
									colorStops: [
										{
											offset: 0,
											color: '#fff', // 0% 处的颜色
										},
										{
											// offset: 0.9,
											offset: 0.86,
											/*
0.86 = （文字 + 文字距下边线的距离）/（文字 + 文字距下边线的距离 + 下边线的宽度）

                        */
											color: '#fff', // 0% 处的颜色
										},
										{
											offset: 0.86,
											color: '#537085', // 0% 处的颜色
										},
										{
											offset: 1,
											color: '#33c0cd', // 100% 处的颜色
										},
									],
									global: false, // 缺省为 false
								},
							},
						},
						boundaryGap: false,
					},
				],
				yAxis: [
					{
						type: 'value',
						axisTick: {
							show: false,
						},
						axisLine: {
							show: true,
							lineStyle: {
								color: '#DCE2E8',
							},
						},
						axisLabel: {
							textStyle: {
								color: '#556677',
							},
						},
						splitLine: {
							show: false,
						},
					},
					{
						type: 'value',
						position: 'right',
						axisTick: {
							show: false,
						},
						axisLabel: {
							textStyle: {
								color: '#556677',
							},
							formatter: '{value}',
						},
						axisLine: {
							show: true,
							lineStyle: {
								color: '#DCE2E8',
							},
						},
						splitLine: {
							show: false,
						},
					},
				],
				series: [
					{
						name: '去年月份骑手',
						type: 'line',
						data: [10, 10, 30, 12, 15, 3, 7,6,10,12,15,12],
						symbolSize: 1,
						symbol: 'circle',
						smooth: true,
						yAxisIndex: 0,
						showSymbol: false,
						lineStyle: {
							width: 5,
							color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
								{
									offset: 0,
									color: '#9effff',
								},
								{
									offset: 1,
									color: '#9E87FF',
								},
							]),
							shadowColor: 'rgba(158,135,255, 0.3)',
							shadowBlur: 10,
							shadowOffsetY: 20,
						},
						itemStyle: {
							normal: {
								color: colorList[0],
								borderColor: colorList[0],
							},
						},
					},
					{
						name: '今年月份骑手',
						type: 'line',
						data: [150, 120, 170, 140, 500, 160, 110,100,200,140,150,200],
						symbolSize: 1,
						yAxisIndex: 1,
						symbol: 'circle',
						smooth: true,
						showSymbol: false,
						lineStyle: {
							width: 5,
							color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
								{
									offset: 0,
									color: '#fe9a',
								},
								{
									offset: 1,
									color: '#fe9a8b',
								},
							]),
							shadowColor: 'rgba(254,154,139, 0.3)',
							shadowBlur: 10,
							shadowOffsetY: 20,
						},
						itemStyle: {
							normal: {
								color: colorList[2],
								borderColor: colorList[2],
							},
						},
					},
				],
			};
			myChart5.setOption(option);
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
#charts5{
	margin-top: -15px;
}
.box{
	height: 105px;
	width: 100%;
	background: #2a2b2d;
	color: #fff;
	margin-top: 5px;
	box-sizing: border-box;
	padding: 5px;
	position: relative;
	img{
		width: 400px;
		height: 55px;
}
}
</style>

