<template>
	<div>
		<div class="box">
			<img src="../assets/3.png" alt="" srcset="">
			<h4 class="h41">慕课外卖登录设备</h4>
			<h2 style="font-size:20px;">1,365,633台</h2>
			<p class="p1">Dowbu of inteend conees</p>
			<ul>
				<li><h4 class="h42">522,041</h4><p class="p2">Andreld</p></li>
				<li><h4 class="h42">471,645</h4><p class="p2">ios</p></li>
				<li><h4 class="h42">371,947</h4><p class="p2">pc</p></li>
			</ul>
		</div>
 </div>
</template>

<script>
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
	width: 25%;
	background: #2a2b2d;
	color: #fff;
	margin-top: 5px;
	box-sizing: border-box;
	position: relative;
	img{
		width: 100px;
		height: 100px;
		padding: 10px 0 0 10px;
	}
	.h41{
		position: absolute;
		top: 10px;
		left: 115px;
	}
	h2{
		position: absolute;
		top: 15px;
		left: 266px;
	}
	.p1{
			position: absolute;
		top: 30px;
		left: 115px;
		font-size:12px;
	}
	ul{
		position: absolute;
		margin:-50px  0 0 70px;
		display: flex;
		justify-content: space-between;
		text-align: center;
		// align-items: center;
		width: 70%;
		color: #fff;
		li{
			padding:0 0 0 36px;
			box-sizing: border-box;
			.h42{
				font-size:14px;
			}
			.p2{
				font-size:12px;
			}
		}
}
}
</style>
