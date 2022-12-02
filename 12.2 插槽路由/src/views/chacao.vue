<template>
  <div class="container">
<Category title="美食">
    <img slot="center" src="https://s3.ax1x.om/2021/01/16/srJlq0.jpg">
    <a slot="footer" href="http://www.atguigu.com">更多美食</a>
    </Category>
<Category title="游戏">
<ul slot="center">
<li v-for="(item,index) in games" :key="index">{{item}}</li>
</ul>
<div class="foot" slot="footer">
<a href="">单机游戏</a>
<a href="">网络游戏</a>
</div>
</Category>
<Category title="电影">
<video slot="center" controls src="http://clips.vorwaerts-gmbh.mp3"></video>
<div class="foot">
<a href="">经典</a>
<a href="">热门</a>
<a href="">推荐</a>
</div>
<h4>欢迎前来观影</h4>

</Category>
</div>
</template>
<script>
import title from ".././components/title";
export default {
  data() {
    return {};
  },
  methods: {},
  created() {},
  mounted() {},
  components: {
    title
  },
  computed: {},
  watch: {}
};
</script>


