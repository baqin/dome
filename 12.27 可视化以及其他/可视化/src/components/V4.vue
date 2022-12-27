<template>
	<div>
		<div class="box">
			<img src="../assets/4.png" class="img1">
		<p class="p1">男性用户人数</p>
		<p class="p2">Number of male users</p>
		<h3 class="h31">869,913 <span style="font-size:15px;">万人</span></h3>
		<img src="../assets/4.png" class="img2">
		<p class="p3">女性用户人数</p>
		<p class="p4">Number of female users</p>
		<h3 class="h32">870,006万人</h3>
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
	width: 100%;
	background: #2a2b2d;
	color: #fff;
	margin-top: 5px;
	box-sizing: border-box;
	padding: 5px;
	position: relative;
	.img1{
		padding: 10px;
	}
	.p1{
		position: absolute;
		top:10px;
		left: 60px;
	}
	.p2{
		position: absolute;
		top:30px;
		left: 60px;
		font-size: 12px;
	}
	.h31{
		position: absolute;
		top:50px;
		left: 60px;
	}
	.img2{
		padding: 10px 0 0 120px;
	}
	.p3{
		position: absolute;
		top:10px;
		left: 230px;
	}
	.p4{
		position: absolute;
		top:30px;
		left: 230px;
		font-size: 12px;
	}
	.h32{
		position: absolute;
		top:50px;
		left: 230px;
	}
}
</style>
