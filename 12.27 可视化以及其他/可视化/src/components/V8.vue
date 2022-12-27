<template>
	<div class="box">
		<ul>
			<li style="background:#8f9daa">ALL</li>
			<li>北京</li>
			<li>上海</li>
			<li>深圳</li>
			<li>杭州</li>
			<li>南京</li>
			<li>武汉</li>
		</ul>
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

margin-top: 5px;
	color: #fff;


	ul{

		width: 100%;
		display: flex;
	justify-content: space-between;
	li{
		border: 1px solid #ccc;
		flex: 1;
		text-align: center;
		
		align-items: center
	}
	}
}
</style>
