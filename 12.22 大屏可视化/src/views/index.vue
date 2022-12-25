<template>
  <div class="Visualize">
    <header>
      <h1>全球涉黄工位-传播病菌的平台</h1>
      <p class="timeClass">{{ new Date().toLocaleString() }}</p>
      <p class="textClass">湖南麻豆科技有限公司</p>
    </header>
    <div class="body">
      <div class="left">
        <titles>
          <template>当日情况</template>
        </titles>
        <ul class="situation">
          <li>
            <p class="situationImg">
              <img src="../assets/icona.png" alt="" />
            </p>
            <p class="situationText">
              今日就诊人数<br />
              <span class="situationNum">1358</span>
              <span class="situationRen">人</span>
            </p>
          </li>
          <li>
            <p class="situationImg">
              <img src="../assets/iconb.png" alt="" />
            </p>
            <p class="situationText">
              今日就诊人数<br />
              <span class="situationNum">1983</span>
              <span class="situationRen">人</span>
            </p>
          </li>
          <li>
            <p class="situationImg">
              <img
                src="../assets/iconc.png"
                alt=""
                style="margin-bottom: 0.04rem"
              />
            </p>
            <p class="situationText">
              今日就诊人数<br />
              <span class="situationNum">930</span>
              <span class="situationRen">人</span>
            </p>
          </li>
          <li>
            <p class="situationImg">
              <img src="../assets/icond.png" alt="" />
            </p>
            <p class="situationText">
              今日就诊人数<br />
              <span class="situationNum">371</span>
              <span class="situationRen">人</span>
            </p>
          </li>
          <li>
            <p class="situationImg">
              <img src="../assets/icone.png" alt="" />
            </p>
            <p class="situationText">
              今日就诊人数<br />
              <span class="situationNum">1683</span>
              <span class="situationRen">人</span>
            </p>
          </li>
          <li>
            <p class="situationImg">
              <img src="../assets/iconf.png" alt="" />
            </p>
            <p class="situationText">
              今日就诊人数<br />
              <span class="situationNum">1091</span>
              <span class="situationRen">人</span>
            </p>
          </li>
        </ul>
        <div class="detect">
          <titles>
            <template>传染监测</template>
          </titles>
          <table cellspacing="0" cellpadding="0">
            <tr>
              <td style="border-bottom: 0.0375rem solid #285996">发病统计</td>
              <td style="border-bottom: 0.0375rem solid #285996">甲类</td>
              <td style="border-bottom: 0.0375rem solid #285996">乙类</td>
              <td style="border-bottom: 0.0375rem solid #285996">丙类</td>
            </tr>
            <tr>
              <td style="border-bottom: 0.0375rem dotted #285996">
                发病数（万）
              </td>
              <td style="border-bottom: 0.0375rem dotted #285996">
                0.03 <span style="color: #01b5dc">↓0.01%</span>
              </td>
              <td style="border-bottom: 0.0375rem dotted #285996">
                163.00 <span style="color: #b71a3d">↑4.01</span>
              </td>
              <td style="border-bottom: 0.0375rem dotted #285996">
                163.00 <span style="color: #b71a3d">↑4.01</span>
              </td>
            </tr>
            <tr>
              <td>发病率（%）</td>
              <td>0.3 <span style="color: #01b5dc">↓0.01%</span></td>
              <td>100% <span style="color: #b71a3d">↑4.01</span></td>
              <td>81.92% <span style="color: #b71a3d">↑4.01</span></td>
            </tr>
          </table>
        </div>
        <div class="medical">
          <titles>
            <template>医疗服务</template>
          </titles>
          <ul>
            <li>
              医师日均报卡量<br />
              <span style="font-size: 0.37rem; color: #00d8f9">12.5</span> 张
              <span style="font-size: 0.15rem; color: #b71a3d">↑4.01%</span>
            </li>
            <li>
              平均报卡时间<br />
              <span style="font-size: 0.37rem; color: #00d8f9">1234</span> 秒
              <span style="font-size: 0.15rem; color: #0ba74e">↓4.01%</span>
            </li>
            <li>
              医生最高报卡量<br />
              <span style="font-size: 0.37rem; color: #00d8f9">2.3</span> 小时
              <span style="font-size: 0.15rem; color: #0ba74e">↓4.01%</span>
            </li>
            <li>
              最低报卡时间<br />
              <span style="font-size: 0.37rem; color: #00d8f9">0012</span> 秒
              <span style="font-size: 0.15rem; color: #0ba74e">↓4.01%</span>
            </li>
            <li>
              医生排除比例<br />
              <span style="font-size: 0.37rem; color: #00d8f9">10.00%</span>
              <span style="font-size: 0.15rem; color: #0ba74e">↓4.01%</span>
            </li>
            <li>
              迟报漏报卡数<br />
              <span style="font-size: 0.37rem; color: #00d8f9">0013</span> 张
              <span style="font-size: 0.15rem; color: #0ba74e">↓4.01%</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="center">
        <div class="earthBox">
          <div class="earth">
            <img src="../assets/lbx.png" alt="" class="earthImg" />
          </div>
        </div>
        <div class="monitor">
          <div class="box">
            <div class="left">监测机构</div>
            <div class="right"></div>
          </div>
          <ul class="institution">
            <li>
              <p>医疗机构</p>
              <img src="../assets/tit1.png" alt="" />
            </li>
            <li>
              <p>床位数</p>
              <img src="../assets/tit1.png" alt="" />
            </li>
            <li>
              <p>医护人员</p>
              <img src="../assets/tit1.png" alt="" />
            </li>
          </ul>
          <ul class="institutionList">
            <li>
              <div class="institSan">
                <img src="../assets/icon1.png" alt="" />
              </div>
              <div class="institSanList">
                <div class="institSan1">
                  私人诊所 <span style="color: #02d3f5">765</span>
                  <span style="color: #b71a3d; font-size: 0.15rem">+2.30</span>
                </div>
                <div class="institSan2">
                  公立医院 <span style="color: #02d3f5">765</span>
                  <span style="color: #b71a3d; font-size: 0.15rem">+2.30</span>
                </div>
                <div class="institSan3">
                  民营医院 <span style="color: #02d3f5">765</span>
                  <span style="color: #0ba74e; font-size: 0.15rem">-2.30</span>
                </div>
              </div>
            </li>
            <li>
              <div class="institSan">
                <img src="../assets/icon2.png" alt="" />
              </div>
              <div class="institSanList">
                <div class="institSan1">
                  床位总数 <span style="color: #02d3f5">765</span>
                  <span style="color: #0ba74e; font-size: 0.15rem">+2.30</span>
                </div>
                <div class="institSan2">
                  空闲床位 <span style="color: #02d3f5">765</span>
                  <span style="color: #0ba74e; font-size: 0.15rem">+2.30</span>
                </div>
                <div class="institSan3">
                  在用床位 <span style="color: #02d3f5">765</span>
                  <span style="color: #b71a3d; font-size: 0.15rem">-2.30</span>
                </div>
              </div>
            </li>
            <li>
              <div class="institSan">
                <img src="../assets/icon3.png" alt="" />
              </div>
              <div class="institSanList">
                <div class="institSan1">
                  总人数 <span style="color: #02d3f5">765</span>
                  <span style="color: #b71a3d; font-size: 0.15rem">+2.30</span>
                </div>
                <div class="institSan2">
                  职业医生 <span style="color: #02d3f5">765</span>
                  <span style="color: #b71a3d; font-size: 0.15rem">+2.30</span>
                </div>
                <div class="institSan3">
                  普通医生 <span style="color: #02d3f5">765</span>
                  <span style="color: #b71a3d; font-size: 0.15rem">-2.30</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="right">
        <titles>
          <template>同期对比</template>
        </titles>
        <ul class="contrast">
          <li>
            <div id="contrast1"></div>
            <br />
            <p>就诊人数</p>
          </li>
          <li>
            <div id="contrast2"></div>
            <br />
            <p>触发次数</p>
          </li>
          <li>
            <div id="contrast3"></div>
            <br />
            <p>触发卡数</p>
          </li>
          <li>
            <div id="contrast4"></div>
            <br />
            <p>去重卡数</p>
          </li>
          <li>
            <div id="contrast5"></div>
            <br />
            <p>报卡时间</p>
          </li>
          <li>
            <div id="contrast6"></div>
            <br />
            <p>迟报漏报</p>
          </li>
        </ul>
        <div class="dongtai">
          <titles>
            <template>就医动态</template>
          </titles>
        </div>
        <div id="myChares1"></div>
        <titles>
          <template>疾病构成</template>
        </titles>
        <div class="myChare">
          <div class="myChareLeft">
            <li>
              <span class="myChareLeftZi">1236</span>万元<br />
              <span class="myChareLeftSi">私人诊所</span>
            </li>
            <li>
              <span class="myChareLeftZi">1236</span>万元<br />
              <span class="myChareLeftSi">私人诊所</span>
            </li>
            <li>
              <span class="myChareLeftZi">1236</span>万元<br />
              <span class="myChareLeftSi">私人诊所</span>
            </li>
          </div>
          <div id="myChares2"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import titles from "../components/title.vue"
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
  components: {
    titles
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.Visualize {
  min-width: 1024px;
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  // background: pink;
  background: url(../assets/bg.png) no-repeat;
  background-size: 100% 100%;
}
header {
  position: relative;
  width: 100%;
  height: 1.25rem;
  background: url(../assets/topbg.png) no-repeat;
  background-size: 100% 100%;
  color: #ccc;
  h1 {
    position: absolute;
    left: 50%;
    top: 50%;
    font-size: 0.4rem;
    color: white;
    transform: translate(-50%, -50%);
  }
  .timeClass {
    position: absolute;
    top: 0.1875rem;
    left: 0.35rem;
  }
  .textClass {
    position: absolute;
    right: 0.35rem;
    top: 0.1875rem;
  }
}
.body {
  width: 100%;
  height: 100%;
  display: flex;
  .left {
    width: 26%;
    padding-left: 0.1875rem;
    .situation {
      width: 100%;
      height: 30%;
      display: flex;
      flex-wrap: wrap;
      margin-top: 0.25rem;
      li {
        height: 33%;
        width: 50%;
        display: flex;
        .situationImg {
          width: 0.75rem;
          height: 0.75rem;
          background: url(../assets/iconbg.png) no-repeat;
          background-size: 100%, 100%;
          text-align: center;
          line-height: 1.1rem;
          margin-right: 0.1875rem;
          img {
            width: 0.45rem;
            height: 0.45rem;
          }
        }
        .situationText {
          font-size: 0.17rem;
          color: #708196;
          margin-top: 0.125rem;
        }
        .situationNum {
          font-size: 0.3rem;
          color: #59dac3;
          margin-right: 0.125rem;
        }
        .situationRen {
          color: white;
          font-size: 0.2rem;
        }
      }
    }
    .detect {
      width: 100%;
      height: 10%;
      margin-bottom: 0.95rem;
      color: white;
      table {
        width: 100%;
        height: 100%;
        color: white;
      }
    }
    .medical {
      width: 100%;
      height: 30%;
      ul {
        height: 100%;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        li {
          width: 49%;
          height: 30%;
          background: url(../assets/main_top_bottom.png) no-repeat;
          background-size: 100% 100%;
          margin-bottom: 0.0625rem;
          padding-top: 0.155rem;
          padding-left: 0.155rem;
          font-size: 0.2rem;
          color: white;
        }
      }
    }
  }
  .center {
    flex: 1;
    position: relative;
    .earthBox {
      // margin-bottom: 0.71rem;
      height: 46%;
      .earth {
        margin: 1rem auto 0rem;
        width: 40%;
        height: 4.5rem;
        background: url(../assets/map.png) no-repeat;
        background-size: 100% 100%;
        .earthImg {
          width: 5.75rem;
          position: absolute;
          left: 2.95rem;
          top: 0.325rem;
          transform: rotate(162deg);
          animation: rotate1 15s linear infinite;
        }
      }
    }

    .monitor {
      padding-left: 0.5rem;
      padding-right: 0.5rem;
      height: 30%;
      .box {
        width: 100%;
        display: flex;
        color: white;
        .left {
          width: 1.125rem;
          font-size: 0.225rem;
          background: url(../assets/line1.png) no-repeat;
          background-position: -1.82rem 0.35rem;
          // padding-right: 12px;
          padding-left: 0rem;
          height: 0.5rem;
        }
        .right {
          flex: 1;
          background: url(../assets/line2.png) no-repeat;
          background-position: -0.75rem 0.2rem;
        }
      }
      .institution {
        color: white;
        display: flex;
        font-size: 0.1875rem;
        margin-top: 0.05rem;
        li {
          flex: 1;
          display: flex;
          img {
            margin-top: 0.075rem;
            margin-left: 0.275rem;
            height: 0.1rem;
          }
        }
      }
      .institutionList {
        height: 100%;
        display: flex;
        li {
          flex: 1;
          display: flex;
          .institSan {
            width: 35%;
            height: 100%;
            background: url(../assets/bg1.png) no-repeat;
            background-position: 0px 0.5rem;
            background-size: 100% 1.875rem;
            position: relative;
            margin-top: 0.125rem;
            img {
              position: absolute;
              top: 1.15rem;
              left: 0.2rem;
            }
          }
          .institSanList {
            width: 65%;
            height: 100%;
            font-size: 0.1875rem;
            color: white;
            .institSan1 {
              width: 92%;
              height: 0.625rem;
              background: url(../assets/main_top_bottom.png) no-repeat;
              background-size: 100% 0.625rem;
              margin-top: 0.275rem;
              line-height: 0.625rem;
              padding-left: 0.125rem;
            }
            .institSan2 {
              width: 92%;
              height: 0.625rem;
              background: url(../assets/main_top_bottom.png) no-repeat;
              background-size: 100% 0.625rem;
              margin-top: 0.375rem;
              line-height: 0.625rem;
              padding-left: 0.125rem;
            }
            .institSan3 {
              width: 92%;
              height: 0.625rem;
              background: url(../assets/main_top_bottom.png) no-repeat;
              background-size: 100% 0.625rem;
              margin-top: 0.35rem;
              line-height: 0.625rem;
              padding-left: 0.125rem;
            }
          }
        }
      }
    }
  }
  .right {
    width: 26%;
    .contrast {
      height: 17%;
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      li {
        width: 33%;
        height: 50%;
        margin-bottom: 40px;
        margin-top: 8px;
        #contrast1 {
          width: 100%;
          height: 90%;
        }
        #contrast2 {
          width: 100%;
          height: 90%;
        }
        #contrast3 {
          width: 100%;
          height: 90%;
        }
        #contrast4 {
          width: 100%;
          height: 90%;
        }
        #contrast5 {
          width: 100%;
          height: 90%;
        }
        #contrast6 {
          width: 100%;
          height: 90%;
        }
        p {
          text-align: center;
          color: white;
          font-size: 0.16rem;
        }
      }
    }
    .dongtai {
      margin-top: 100px;
    }
    #myChares1 {
      width: 100%;
      height: 18%;
      margin-bottom: 8px;
      // background-color: red;
    }
    .myChare {
      width: 100%;
      height: 28%;
      display: flex;
      .myChareLeft {
        width: 16%;
        height: 100%;
        color: white;
        li {
          padding-top: 14px;
          height: 33%;
        }
        .myChareLeftZi {
          font-size: 0.3rem;
          color: #00ccf0;
        }
        .myChareLeftSi {
          color: #6783a6;
          font-size: 15px;
        }
        // background: red;
      }
      #myChares2 {
        width: 84%;
        height: 100%;
        // background-color: red;
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
