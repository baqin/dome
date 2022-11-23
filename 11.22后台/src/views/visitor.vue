<template>
  <div>
    <div id="main" style="width: 600px;height:400px;"></div>
 </div>
</template>

<script>
import * as echarts from 'echarts';
export default {
  data () {
    return {
        option: {
  title: {
    text: 'Referer of a Website',
    subtext: 'Fake Data',
    left: 'center'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    left: 'left'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '50%',
      data: [
        { value: 1048, name: '北京' },
        { value: 735, name: '上海' },
        { value: 580, name: '深圳' },
        { value: 484, name: '杭州' },
        { value: 300, name: '其他' }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
}
    }
  },
  methods: {

  },
  created () {

  },
  mounted () {
    var myChart = echarts.init(document.getElementById('main'));
     myChart.setOption(this.option);
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
</style>
