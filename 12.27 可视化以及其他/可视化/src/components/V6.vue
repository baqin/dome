<template>
	<div>
		<div class="box">
			<h4>当前热卖品类</h4>
			<p style="font-size:12px;">Hot category</p>
			<p class="p1">最后更新时间:{{new Date().toLocaleString()}}</p>
			<img src="../assets/柱形图.png" alt="">
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
