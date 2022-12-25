<template>
	<div class="home">
		<h1>互联网产业全球布局看板</h1>
		<V1></V1>
		<V2></V2>
		<V3></V3>
		<V4></V4>
 </div>
</template>

<script>
import V1 from "@/components/V1.vue"
import V2 from "@/components/V2.vue"
import V3 from "@/components/V3.vue"
import V4 from "@/components/V4.vue"
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
    V1,V2,V3,V4
	},
	computed: {

	},
	watch: {

	},
}
</script>

<style lang='scss' scoped>
.home{
	background: #000;
	width: 100vw;
	height: 100vh;
	h1{
		text-align: center;
		color: #fff;
	}

}
</style>
