<template>
  <div class="home">
    <img src="../assets/头部.png" alt="" />
    <div class="box">
      <div class="left">
        <V1></V1>
        <V2></V2>
        <V3></V3>
        <V4></V4>
        <V5></V5>
        <V6></V6>
      </div>
      <div class="right">
        <V7></V7>
        <V8></V8>
        <div class="nav">
					<V9></V9>
        <V10></V10>
				</div>
        <V11></V11>
        <V12></V12>
        <V13></V13>
      </div>
    </div>
  </div>
</template>

<script>
import V1 from "@/components/V1.vue"
import V2 from "@/components/V2.vue"
import V3 from "@/components/V3.vue"
import V4 from "@/components/V4.vue"
import V5 from "@/components/V5.vue"
import V6 from "@/components/V6.vue"
import V7 from "@/components/V7.vue"
import V8 from "@/components/V8.vue"
import V9 from "@/components/V9.vue"
import V10 from "@/components/V10.vue"
import V11 from "@/components/V11.vue"
import V12 from "@/components/V12.vue"
import V13 from "@/components/V13.vue"
export default {
  data() {
    return {}
  },
  methods: {},
  created() {},
  mounted() {},
  components: {
    V1,
    V2,
    V3,
    V4,
    V5,
    V6,
    V7,
    V8,
    V9,
    V10,
    V11,
    V12,
    V13
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.home {
  background: #000;
  width: 100vw;
  height: 100vh;
  img {
    width: 100vw;
    height: 40px;
  }
}
.box {
  display: flex;
  width: 100%;
  .left {
flex: 25%;
  }
.right{
flex: 75%;
padding: 0 0 0 5px;
box-sizing: border-box;
.nav{
	display: flex;
	width: 100%;
}
}
}
</style>
