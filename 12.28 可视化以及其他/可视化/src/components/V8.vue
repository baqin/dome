<template>
	<div class="box">
		<ul>
			<li :class="{active:flag==0}" @click="flag=0">ALL</li>
			<li :class="{active:flag==1}" @click="flag=1">北京</li>
			<li :class="{active:flag==2}" @click="flag=2">上海</li>
			<li :class="{active:flag==3}" @click="flag=3">深圳</li>
			<li :class="{active:flag==4}" @click="flag=4">杭州</li>
			<li :class="{active:flag==5}" @click="flag=5">南京</li>
			<li :class="{active:flag==6}" @click="flag=6">武汉</li>
		</ul>
 </div>
</template>

<script>
export default {
	data () {
		return {
			flag:0
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
.active{
	background: #8f9daa;
}
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
