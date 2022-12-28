<template>
	<div>
		<div class="box">
			<h4>当前热卖品类</h4>
			<p style="font-size:12px;">Hot category</p>
			<p class="p1">最后更新时间:{{new Date().toLocaleString()}}</p>
			<div
			id="main3"
			style="width: 350px; height: 103px"
			class="child6-imgs"
		></div>
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
			var chartDom = document.getElementById('main3');
			var myChart2 = echarts.init(chartDom);
			var option;

			option = {
				title: {
					// text: '当前热卖品类',
					// subtext: 'Fake Data',
					textStyle: {
						color: '#fff',
            fontSize: 12, // 字体大小
					},
				},
				color: ['#89a455'],
				xAxis: {
					type: 'category',
					data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
				},
				yAxis: {
					type: 'value',
				},
				series: [
					{
						data: [120, 200, 150, 80, 70, 110, 130],
						type: 'bar',
						showBackground: true,
						backgroundStyle: {
							color: 'rgba(180, 180, 180, 0.2)',
						},
					},
				],
			};

			option && myChart2.setOption(option);
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
height: 110px;
	width: 100%;
	background: #2a2b2d;
	color: #fff;
	margin-top: 5px;
	box-sizing: border-box;
	padding: 5px;
	position: relative;
	.p1{
		font-size:12px;
		margin:-30px 0 0 150px;
	}
	img{
		width: 400px;
		height: 55px;
	}
}
</style>
