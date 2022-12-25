<template>
  <div class="box">
    <div class="nav">
      <h6>{{ new Date().toLocaleString() }}</h6>
      <h2>双数智慧公卫-传染病督导平台</h2>
      <h6>长沙双数科技有限公司</h6>
    </div>
    <div class="quan">
      <div class="nan">
        <div class="left">
          <p>当日情况</p>
          <div class="left1">
            <img src="../assets/line1.png" class="img1" />
            <img src="../assets/line2.png" class="img2" />
          </div>
          <ul class="leftul">
            <li class="leftli">
              <img src="../assets/icona.png" />
              <div class="left2">
                <p>今日就诊人数</p>
                <h3><span class="span1">1358</span>人</h3>
              </div>
            </li>
            <li class="leftli">
              <img src="../assets/iconb.png" />
              <div class="left2">
                <p>今日就诊人数</p>
                <h3><span class="span1">1983</span>人</h3>
              </div>
            </li>
            <li class="leftli">
              <img src="../assets/iconc.png" />
              <div class="left2">
                <p>今日就诊人数</p>
                <h3><span class="span1">930</span>人</h3>
              </div>
            </li>
            <li class="leftli">
              <img src="../assets/icond.png" />
              <div class="left2">
                <p>今日就诊人数</p>
                <h3><span class="span1">371</span>人</h3>
              </div>
            </li>
            <li class="leftli">
              <img src="../assets/icone.png" />
              <div class="left2">
                <p>今日就诊人数</p>
                <h3><span class="span1">1683</span>人</h3>
              </div>
            </li>
            <li class="leftli">
              <img src="../assets/iconf.png" />
              <div class="left2">
                <p>今日就诊人数</p>
                <h3><span class="span1">1091</span>人</h3>
              </div>
            </li>
          </ul>
        </div>
        <div class="ltftbot">
          <p>法定传染病检测</p>
          <div class="left1">
            <img src="../assets/line1.png" class="img1" />
            <img src="../assets/line2.png" class="img2" />
          </div>
          <ul class="ltftbot1">
            <li>发病统计</li>
            <li>甲类</li>
            <li>乙类</li>
            <li>丙类</li>
          </ul>
          <ul class="ltftbot1">
            <li>发病数(万)</li>
            <li>0.03<span class="span1">0.0.1%</span></li>
            <li>163.00<span class="span2">千米</span></li>
            <li>163.00<span class="span2">千米</span></li>
          </ul>
          <ul class="ltftbot1 ltftbot2">
            <li>发病率</li>
            <li>0.3<span class="span1">0.0.1%</span></li>
            <li>100%<span class="span2">千米</span></li>
            <li>81.92%<span class="span2">千米</span></li>
          </ul>
        </div>
      </div>

      <div class="center">
        <img src="../assets/map.png" class="imgcenter" />
      </div>
      <div class="title">
        <div class="right">
          <p>同期对比</p>
          <div class="left1">
            <img src="../assets/line1.png" class="img1" />
            <img src="../assets/line2.png" class="img2" />
          </div>
          <ul class="title1">
            <li>
							<div id="contrast1"></div>
							<p>就诊人数</p></li>
            <li>
							<div id="contrast2"></div>
							<p>触发次数</p></li>
            <li>
							<div id="contrast3"></div>
							<p>触发卡数</p></li>
            <li>
							<div id="contrast4"></div>
							<p>去重卡数</p></li>
            <li>
							<div id="contrast5"></div>
							<p>报卡时间</p></li>
            <li>
							<div id="contrast6"></div>
							<p>迟报漏报</p></li>
          </ul>
          <p>就医动态</p>
          <div class="left1">
            <img src="../assets/line1.png" class="img1" />
            <img src="../assets/line2.png" class="img2" />
          </div>
          <div id="myChares1" style="width: 400px; height: 200px"></div>
        </div>
      </div>
    </div>
    <div class="root">
      <div class="root-letf">
        <p>医疗服务</p>
        <div class="left1">
          <img src="../assets/line1.png" class="img1" />
          <img src="../assets/line2.png" class="img2" />
        </div>
        <div class="aa">
          <div class="aa1">
            <p>医师日均报卡星</p>
            <p><span class="span1">12.5</span>张<span class="span2">4.01%</span></p>
          </div>
          <div class="aa1">
            <p>平均爆卡时间</p>
            <p><span class="span1">1234</span>秒<span class="span3">4.01%</span></p>
          </div>
          <div class="aa1">
            <p>医生最高报卡量</p>
            <p><span class="span1">2.3</span>小时<span class="span3">4.01%</span></p>
          </div>
          <div class="aa1">
            <p>最低报卡时间</p>
            <p><span class="span1">0012</span>张<span class="span3">4.01%</span></p>
          </div>
          <div class="aa1">
            <p>医生排除比例</p>
            <p><span class="span1">10.00%</span>张<span class="span3">4.01%</span></p>
          </div>
          <div class="aa1">
            <p>迟报漏报卡数</p>
            <p><span class="span1">0013</span>张<span class="span3">4.01%</span></p>
          </div>
        </div>
      </div>
      <div class="root-center">
        <p>检测机构</p>
        <div class="left1">
          <img src="../assets/line1.png" class="img1" />
          <img src="../assets/line2.png" class="img2" />
        </div>
        <div class="center-a">
        <ul class="center-aa">
					<li>
						<p>医疗机构</p>
						<img src="../assets/bg1.png" class="ing6">
						<img src="../assets/icon1.png" class="img3">
					</li>
					<li>
						<p>床位数</p>
						<img src="../assets/bg1.png" class="ing6">
						<img src="../assets/icon2.png" class="img4">
					</li>
					<li>
						<p>医护人员</p>
						<img src="../assets/bg1.png" class="ing6">
						<img src="../assets/icon3.png" class="img5">
					</li>
				</ul>
        </div>
				<div class="root-centerB">
					<ul>
						<li>
							<div class="institSan1">
               <span style="color: #fff">私人诊所</span>    <span style="color: #02d3f5">765</span>
                  <span style="color: #b71a3d; font-size: 0.15rem">+2.30</span>
                </div>
                <div class="institSan2">
                  <span style="color: #fff">公立医院</span> <span style="color: #02d3f5">765</span>
                  <span style="color: #b71a3d; font-size: 12px">+2.30</span>
                </div>
                <div class="institSan3">
                  <span style="color: #fff">民营医院</span> <span style="color: #02d3f5">765</span>
                  <span style="color: #0ba74e; font-size: 12px">-2.30</span>
                </div>
						</li>
						<li>
							 <div class="institSan4">
                  <span style="color: #fff">床位总数</span> <span style="color: #02d3f5">765</span>
                  <span style="color: #0ba74e; font-size: 12px">+2.30</span>
                </div>
                <div class="institSan5">
                  <span style="color: #fff">空闲床位</span> <span style="color: #02d3f5">765</span>
                  <span style="color: #0ba74e; font-size: 12px">+2.30</span>
                </div>
                <div class="institSan6">
                  <span style="color: #fff">在用床位</span> <span style="color: #02d3f5">765</span>
                  <span style="color: #b71a3d; font-size: 12px">-2.30</span>
                </div>
						</li>
						<li>
							 <div class="institSan7">
                  <span style="color: #fff">总人数</span> <span style="color: #02d3f5">765</span>
                  <span style="color: #b71a3d; font-size: 12px">+2.30</span>
                </div>
                <div class="institSan8">
                  <span style="color: #fff">职业医生</span> <span style="color: #02d3f5">765</span>
                  <span style="color: #b71a3d; font-size: 12px">+2.30</span>
                </div>
                <div class="institSan9">
                  <span style="color: #fff">普通医生</span> <span style="color: #02d3f5">765</span>
                  <span style="color: #b71a3d; font-size: 12px">-2.30</span>
                </div>
						</li>
					</ul>
				</div>
      </div>
      <div class="root-right">
        <p>疾病构成</p>
        <div class="left1">
          <img src="../assets/line1.png" class="img1" />
          <img src="../assets/line2.png" class="img2" />
        </div>
				<div class="root-righta">
            <li>
              <span class="span1">1236</span>万元<br />
              <span>私人诊所</span>
            </li>
            <li>
              <span class="span1">1236</span>万元<br />
              <span>私人诊所</span>
            </li>
            <li>
              <span class="span1">1236</span>万元<br />
              <span>私人诊所</span>
            </li>
          </div>
          <div id="myChares2"></div>
      </div>
    </div>
  </div>
</template>

<script>

import * as echarts from "echarts"
export default {
  data() {
    return {}
  },
  methods: {
		 getContrast() {
      var contrast1 = echarts.init(document.getElementById("contrast1"))
      var contrast2 = echarts.init(document.getElementById("contrast2"))
      var contrast3 = echarts.init(document.getElementById("contrast3"))
      var contrast4 = echarts.init(document.getElementById("contrast4"))
      var contrast5 = echarts.init(document.getElementById("contrast5"))
      var contrast6 = echarts.init(document.getElementById("contrast6"))
      var option1 = {
        color: ["#2497f1", "#183e66"],
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["100%", "85%"],
            avoidLabelOverlap: false,
            hoverAnimation: false, //关闭放大动画
            selectedOffset: 0, //选中块的偏移量
            label: {
              show: false,
              position: "center",
              formatter: "{d}%"
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "18",
                fontWeight: "bold",
                color: "#057cea"
              }
            },
            labelLine: {
              show: false
            },
            data: [
              {
                value: 18,
                name: "直接访问",
                selected: true, //默认选中第一块
                label: {
                  show: true, //默认显示第一块
                  fontSize: "18",
                  color: "#057cea"
                }
              },
              { value: 100, name: "邮件营销" }
            ]
          }
        ]
      }
      var option2 = {
        color: ["#2497f1", "#183e66"],
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["100%", "85%"],
            avoidLabelOverlap: false,
            hoverAnimation: false, //关闭放大动画
            selectedOffset: 0, //选中块的偏移量
            label: {
              show: false,
              position: "center",
              formatter: "{d}%"
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "18",
                fontWeight: "bold",
                color: "#057cea"
              }
            },
            labelLine: {
              show: false
            },
            data: [
              {
                value: 30,
                name: "直接访问",
                selected: true, //默认选中第一块
                label: {
                  show: true, //默认显示第一块
                  fontSize: "18",
                  color: "#057cea"
                }
              },
              { value: 100, name: "邮件营销" }
            ]
          }
        ]
      }
      var option3 = {
        color: ["#2497f1", "#183e66"],
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["100%", "85%"],
            avoidLabelOverlap: false,
            hoverAnimation: false, //关闭放大动画
            selectedOffset: 0, //选中块的偏移量
            label: {
              show: false,
              position: "center",
              formatter: "{d}%"
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "18",
                fontWeight: "bold",
                color: "#057cea"
              }
            },
            labelLine: {
              show: false
            },
            data: [
              {
                value: 40,
                name: "直接访问",
                selected: true, //默认选中第一块
                label: {
                  show: true, //默认显示第一块
                  fontSize: "18",
                  color: "#057cea"
                }
              },
              { value: 100, name: "邮件营销" }
            ]
          }
        ]
      }
      var option4 = {
        color: ["#2497f1", "#183e66"],
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["100%", "85%"],
            avoidLabelOverlap: false,
            hoverAnimation: false, //关闭放大动画
            selectedOffset: 0, //选中块的偏移量
            label: {
              show: false,
              position: "center",
              formatter: "{d}%"
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "18",
                fontWeight: "bold",
                color: "#057cea"
              }
            },
            labelLine: {
              show: false
            },
            data: [
              {
                value: 50,
                name: "直接访问",
                selected: true, //默认选中第一块
                label: {
                  show: true, //默认显示第一块
                  fontSize: "18",
                  color: "#057cea"
                }
              },
              { value: 100, name: "邮件营销" }
            ]
          }
        ]
      }
      var option5 = {
        color: ["#2497f1", "#183e66"],
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["100%", "85%"],
            avoidLabelOverlap: false,
            hoverAnimation: false, //关闭放大动画
            selectedOffset: 0, //选中块的偏移量
            label: {
              show: false,
              position: "center",
              formatter: "{d}%"
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "18",
                fontWeight: "bold",
                color: "#057cea"
              }
            },
            labelLine: {
              show: false
            },
            data: [
              {
                value: 70,
                name: "直接访问",
                selected: true, //默认选中第一块
                label: {
                  show: true, //默认显示第一块
                  fontSize: "18",
                  color: "#057cea"
                }
              },
              { value: 100, name: "邮件营销" }
            ]
          }
        ]
      }
      var option6 = {
        color: ["#2497f1", "#183e66"],
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["100%", "85%"],
            avoidLabelOverlap: false,
            hoverAnimation: false, //关闭放大动画
            selectedOffset: 0, //选中块的偏移量
            label: {
              show: false,
              position: "center",
              formatter: "{d}%"
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "18",
                fontWeight: "bold",
                color: "#057cea"
              }
            },
            labelLine: {
              show: false
            },
            data: [
              {
                value: 100,
                name: "直接访问",
                selected: true, //默认选中第一块
                label: {
                  show: true, //默认显示第一块
                  fontSize: "18",
                  color: "#057cea"
                }
              },
              { value: 100, name: "邮件营销" }
            ]
          }
        ]
      }

      contrast1.setOption(option1)
      contrast2.setOption(option2)
      contrast3.setOption(option3)
      contrast4.setOption(option4)
      contrast5.setOption(option5)
      contrast6.setOption(option6)
    },
    getMyChares1() {
      var myChares1 = echarts.init(document.getElementById("myChares1"))
      var option = {
        // tooltip: {
        //   trigger: "axis",
        //   axisPointer: {
        //     type: "shadow"
        //   }
        // },
        grid: {
          left: "0%",
          right: "8%",
          top: "6%",
          bottom: "0%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            data: ["8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00"],
            axisTick: {
              alignWithLabel: true,
              show: false //隐藏x轴刻度线
            },
            axisLine: {
              show: false //隐藏x轴线
            },
            axisLabel: {
              textStyle: {
                color: "#fafcff" //字体颜色
              }
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            axisLabel: {
              textStyle: {
                color: "#fafcff" //字体颜色
              }
            },
            splitLine: {
              show: false
            }
            // 去除网格线
          }
        ],
        series: [
          {
            name: "Direct",
            type: "bar",
            barWidth: "60%",
            data: [100, 52, 200, 334, 390, 480, 220],
            barWidth: 15,
            //设置柱状图渐变颜色
            itemStyle: {
              //柱形图圆角，鼠标移上去效果，如果只是一个数字则说明四个参数全部设置为那么多
              normal: {
                //柱形图圆角，初始化效果
                barBorderRadius: [20, 20, 20, 20],
                color: new echarts.graphic.LinearGradient(
                  0,
                  1,
                  0,
                  0,
                  [
                    {
                      offset: 0,
                      color: "#11A0D7" // 0% 处的颜色
                    },
                    {
                      offset: 0.6,
                      color: "#0bc1d3" // 60% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "#01f9cb" // 100% 处的颜色
                    }
                  ],
                  false
                )
                // 颜色的渐变
              }
            }
          }
        ]
      }
      myChares1.setOption(option)
    },
    getMyChares2() {
      var myChares2 = echarts.init(document.getElementById("myChares2"))
      var option = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)" // 鼠标悬浮在各分区时的提示内容
        },
        // grid: {
        //   left: "0%",
        //   // right: "60px",
        //   bottom: "0",
        //   containLabel: true
        // },
        legend: {
          right: "40px",
          itemWidth: 14, // 设置宽度
          itemHeight: 14, // 设置高度
          textStyle: {
            color: "#fafcff"
          },
          bottom: "50px",
          orient: "vertical",
          data: ["test1", "test2", "test3", "test4", "test5"]
        },
        series: [
          {
            name: "Nightingale Chart",
            type: "pie",
            radius: [40, 80],
            center: ["50%", "50%"],
            roseType: "area",
            itemStyle: {},
            label: {
              normal: {
                // 各分区的提示内容
                // params: 即下面传入的data数组,通过自定义函数，展示你想要的内容和格式
                formatter: function (params) {
                  return params.percent + "%"
                },
                textStyle: {
                  // 提示文字的样式
                  color: "#fafcff",
                  fontSize: 14
                }
              }
            },
            data: [
              {
                value: 40,
                name: "test1",
                percent: "15.38",
                itemStyle: { color: "#ec704a" }
              },
              {
                value: 38,
                name: "test2",
                percent: "30.77",
                itemStyle: { color: "#2e4453" }
              },
              {
                value: 32,
                name: "test3",
                percent: "7.69",
                itemStyle: { color: "#249cf9" }
              },
              {
                value: 30,
                name: "test4",
                percent: "23.08",
                itemStyle: { color: "#Fdb629" }
              },
              {
                value: 28,
                name: "test5",
                percent: "23.08",
                itemStyle: { color: "#4b5cc4" }
              }
            ]
          }
        ]
      }
      myChares2.setOption(option)
    }
	},
  created() {},
  mounted() {
		this.getContrast()
    this.getMyChares1()
    this.getMyChares2()
  },
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
@keyframes rotate1 {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.root-centerB{
  position: relative;
}
.institSan1{
position: absolute;
top: -145px;
border: 1px solid #53cee2;
left: -155px;
}
.institSan2{
position: absolute;
top: -80px;
border: 1px solid #53cee2;
left: -155px;
}
.institSan3{
position: absolute;
top: -10px;
border: 1px solid #53cee2;
left: -155px;
}
.institSan4{
position: absolute;
top: -145px;
border: 1px solid #53cee2;
left: 25px;
}
.institSan5{
position: absolute;
top: -85px;
border: 1px solid #53cee2;
left: 25px;
}
.institSan6{
position: absolute;
top: -10px;
border: 1px solid #53cee2;
left: 25px;
}
.institSan7{
position: absolute;
top: -145px;
border: 1px solid #53cee2;
left: 205px;
}
.institSan8{
position: absolute;
top: -80px;
border: 1px solid #53cee2;
left: 205px;
}
.institSan9{
position: absolute;
top: -10px;
border: 1px solid #53cee2;
left: 205px;
}
#myChares2{
	width: 300px;
	height: 300px;
	margin-top: -180px;
}
.span1{
	color: #54ceba;
}
.span2{
	color: red;
}
#main {
  margin-top: -20px;
}
.center-a {
  justify-content: space-between;
  width: 100%;
 .center-aa{
	flex: 1;
	display: flex;
	justify-content: space-between;
	color: #fff;
	position: relative;
	.ing6{
    margin: 20px 10px 0 -260px;
	}
	.img3{
	position: absolute;
	top: 80px;
	left: -245px;
}
.img4{
	position: absolute;
	top: 80px;
	left:-65px;
}
.img5{
	position: absolute;
	top: 80px;
	left: 115px;
}
 }
}
.quan {
  display: flex;
  .nan {
    width: 25%;
  }
  .center {
    width: 50%;
  }
  .title {
    width: 25%;
    margin-top: 400px;
  }
}
.root {
  // margin-top: -60px;
  display: flex;
  justify-content: space-between;
  .root-letf {
    margin-top: 10px;
    float: left;
    width: 100%;
    p {
      margin-left: 10px;
      color: #fff;
      font-style: 25px;
    }
    .left1 {
      display: flex;
      padding: 10px 0 0 10px;
      .img1 {
        width: 100px;
        height: 5px;
      }
      .img2 {
        width: 300px;
        margin-left: -20px;
      }

    }
    .aa {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      .aa1 {
        color: #fff;
        width: 40%;
        border: 1px solid #0d3a71;
        padding: 10px 0 0 10px;
        box-sizing: border-box;
        .span1 {
          color: #53cee2;
        }
        .span2 {
          color: red;
        }
        .span3 {
          color: #41b883;
        }
      }
    }
  }
  .root-center {
    width: 50%;
    p {
      margin-left: 10px;
      color: #fff;
      font-style: 25px;
			margin-left: -200px;
    }
    width: 25%;
    .left1 {
      display: flex;
      padding: 10px 0 0 10px;
      .img1 {
        width: 100px;
        height: 5px;
				margin-left: -200px;
      }
      .img2 {
        width: 450px;
      }
    }
  }
  .root-right {
    width: 20%;
    margin-left: 200px;
    p {
      margin-left: 10px;
      color: #fff;
      font-style: 25px;
			margin-left: -160px;
    }
    width: 20%;
    .left1 {
      display: flex;
      padding: 10px 0 0 10px;
      .img1 {
        width: 100px;
        height: 5px;
				margin-left: -200px;
      }
      .img2 {
        width: 300px;

      }
    }
		.root-righta{
			margin-left: -150px;
      color: #fff;
		}
  }
}
.box {
  background: url("../assets/bg.png");
  width: 100vw;
  height: 100vh;
  background-size: 100% 100%;
}
.nav {
  background: url("../assets/topbg.png") no-repeat;
  background-size: 100% 100%;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 15px 40px;
  height: 70px;
  h2 {
    color: #c9eaf7;
  }
  h6 {
    color: #9ab3d2;
  }
}
.left {
  p {
    margin-left: 10px;
    color: #fff;
    font-style: 25px;
  }
  .left1 {
    display: flex;
    padding: 10px 0 0 10px;
    .img1 {
      width: 100px;
      height: 5px;
    }
    .img2 {
      width: 300px;
    }
  }
  .leftul {
    display: flex;
    flex-wrap: wrap;
    width: 380px;
  }
  .leftli {
    width: 190px;
    width: 50%;
    padding: 10px 20px;
    box-sizing: border-box;
    display: flex;
    .left2 {
      h4 {
        color: #9ab3d2;
      }
      h3 {
        color: #fff;
      }
    }
  }
}
.ltftbot {
  margin: 10px 0 0 0;
  p {
    margin-left: 10px;
    color: #fff;
    font-style: 25px;
  }
  .left1 {
    display: flex;
    padding: 10px 0 0 10px;
    .img1 {
      width: 150px;
      height: 5px;
    }
    .img2 {
      width: 250px;
    }
  }
  .ltftbot1 {
    width: 400px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
    color: #fff;
    margin: 10px 10px;
  }
  .ltftbot2 {
    border: 0;
  }
}
.imgcenter {
  position: fixed;
  top: 40%;
  left: 50%;
  width: 300px;
  transform: translate(-50%, -50%);
}
.right {
  p {
    margin-left: 10px;
    color: #fff;
    font-style: 25px;
  }
  .left1 {
    display: flex;
    padding: 10px 0 0 10px;
    .img1 {
      width: 100px;
      height: 5px;
    }
    .img2 {
      width: 300px;
    }
  }
}
.right {
  width: 400px;
  float: right;
  margin-top: -400px;
  .title1 {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
		width: 100%;
		text-align: center;
    li {
      width: 33%;
      text-align: center;
			#contrast1,#contrast2,#contrast3,
			#contrast4,#contrast5,#contrast6 {
          width: 80px;
          height: 50px;
					margin-left: 30px;
        }
    }
  }
}
@keyframes rotate1 {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

</style>
