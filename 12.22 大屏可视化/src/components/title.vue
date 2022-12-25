<template>
	<div>
		<div class="box">
			<div class="left">
				<slot></slot>
			</div>
			<div class="right"></div>
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
	display: flex;
	color: white;
	.left{
		font-size: .225rem;
		background: url(../assets/line1.png) no-repeat;
		background-position: -1.9rem .34rem;
		padding-right:.15rem;
		height: .5rem;
	}
	.right{
		flex:1;
		background: url(../assets/line2.png) no-repeat;
		background-position: -5.375rem .2rem;
	}
}
</style>
