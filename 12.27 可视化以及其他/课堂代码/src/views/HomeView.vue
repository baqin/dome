<template>
<div class="home">
<div>我是一个自定义的hook</div>
<h3>{{ point }}</h3>
<h3>横轴:{{point.x }}</h3>
<h3>纵轴: {{ point.y }}</h3>
</div>
</template>
<script lang="ts">
import { defineComponent } from "vue"; 
import usePoint from '../hook/usePoint.js';
export default defineComponent({
setup(){
const point = usePoint(); //复用打点hook(封装数据以及其要用的生命周期钩子) 组合式api的好处
console.log(point,"point");
return{
point
}
}
})
</script>