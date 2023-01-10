<template>
  <!-- 首页 -->
  <div class="dashboard">
    <el-card class="header" shadow="always">
      <img src="../../assets/head.b6c3427.jpg" alt="" />
      <div class="title">
        <p class="header-top">早安, {{ username }}, 祝你开心每一天！</p>
        <p class="header-bottom">
          {{ username }} | {{ companyName }}-{{ departmentName }}
        </p>
      </div>
    </el-card>
    <div class="dashbody">
      <div class="dashbody-left">
        <el-card class="calendar">
          <template #header>
            <div class="card-header">
              <span style="font-size: 30px">工作日历</span>
            </div>
          </template>
          <el-calendar>
            <template #date-cell="{ data }"></template>
          </el-calendar>
        </el-card>
        <el-card class="announcement">
          <template #header>
            <div class="card-header">
              <span style="font-size: 30px">公告</span>
            </div>
          </template>
          <div class="contentItem">
            <ul class="noticeList">
              <li>
                <div class="item">
                  <img src="../../assets/img.0615818.jpeg" alt="" />
                  <div>
                    <p>
                      <span class="col">朱继柳</span>
                      发布了 第1期“传智大讲堂”互动讨论获奖名单公布
                    </p>
                    <p>2018-07-21 15:21:38</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="item">
                  <img src="../../assets/img.0615818.jpeg" alt="" />
                  <div>
                    <p>
                      <span class="col">朱继柳</span>
                      发布了 第2期“传智大讲堂”互动讨论获奖名单公布
                    </p>
                    <p>2018-07-21 15:21:38</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="item">
                  <img src="../../assets/img.0615818.jpeg" alt="" />
                  <div>
                    <p>
                      <span class="col">朱继柳</span>
                      发布了 第3期“传智大讲堂”互动讨论获奖名单公布
                    </p>
                    <p>2018-07-21 15:21:38</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </el-card>
      </div>
      <div class="dashbody-right">
        <el-card shadow="always" class="process processone">
          <div class="header headTit">
            <span class="header-title">流程申请</span>
          </div>
          <div class="sideNav">
            <ul class="clearfix">
              <li>
                <a>
                  <span>加班离职</span>
                </a>
              </li>
              <li>
                <a>
                  <span>请假调休</span>
                </a>
              </li>
              <li>
                <a href="#/approvals/approvals" class="">
                  <span>审批列表</span>
                </a>
              </li>
              <li>
                <a href="#/approvals/myinfo" class="">
                  <span>我的信息</span>
                </a>
              </li>
            </ul>
          </div>
        </el-card>
        <el-card shadow="always" class="process process-two">
          <div class="header headTit">
            <span class="header-title">快速开始/便捷导航</span>
          </div>
          <div class="sideNav">
            <ul class="clearfix">
              <li>
                <a href="#">人事月报</a>
              </li>
              <li>
                <a href="#">考勤查询</a>
              </li>
              <li>
                <a href="#">考勤统计</a>
              </li>
              <li>
                <a href="#">员工审核</a>
              </li>
              <li>
                <a href="#">组织架构</a>
              </li>
            </ul>
          </div>
        </el-card>
        <el-card shadow="always" class="process process-three">
          <div class="header headTit">
            <span class="header-title">帮助链接</span>
          </div>
          <div class="sideLink">
            <div class="el-row">
              <div class="el-col el-col-8">
                <a href="#">
                  <span class="iconGuide"></span>
                  <p>入门指南</p>
                </a>
              </div>
              <div class="el-col el-col-8">
                <a href="#">
                  <span class="iconHelp"></span>
                  <p>在线帮助手册</p>
                </a>
              </div>
              <div class="el-col el-col-8">
                <a href="#">
                  <span class="iconTechnology"></span>
                  <p>联系技术支持</p>
                </a>
              </div>
            </div>
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
import { getUser, getProfile } from "../../untils/dashboard/"
export default {
  data() {
    return {
      username: "管理员",
      companyName: "",
      departmentName: "",
      userId: ""
    }
  },
  methods: {
    getProfile() {
      getProfile().then((res) => {
        console.log(res)
        this.userId = res.data.data.userId
      })
    },
    getUser() {
      setTimeout(() => {
        getUser(this.userId).then((res) => {
          // console.log(res)
          this.username = res.data.data.username
          this.companyName = res.data.data.companyName
          this.departmentName = res.data.data.departmentName
        })
      }, 300)
    }
  },
  created() {
    this.getProfile()
  },
  mounted() {
    this.getUser()
  },
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.dashboard {
  // margin: 10px;
  width: 100%;
  height: 100%;
}
.header {
  ::v-deep .el-card__body {
    display: flex;
    img {
      width: 150px;
      height: 150px;
    }
    .title {
      margin-left: 10px;
      padding-top: 30px;
      .header-top {
        font-size: 30px;
        padding-bottom: 20px;
      }
      .header-bottom {
        font-size: 25px;
        color: #7f8c8d;
      }
    }
  }
}

.dashbody {
  width: 100%;
  // height: 75%;
  margin-top: 25px;
  // background: red;
  display: flex;
  .el-card {
    padding: 8px 16px;
  }
  .dashbody-left {
    width: 55%;
    .calendar {
      height: 540px;
      // background: blue;
      .el-calendar {
        height: 450px;
        --el-calendar-cell-width: 64px;
      }
    }
    .announcement {
      margin-top: 25px;
      height: 560px;
    }
    .contentItem {
      padding: 0 30px;
      .noticeList {
        list-style: none;
        li {
          padding: 18px 0 10px;
          border-bottom: 1px solid #ccc;
          .item {
            display: flex;
            img {
              width: 70px;
              height: 70px;
              margin-right: 15px;
            }
            p {
              margin-bottom: 12px;
              font-size: 20px;
              span {
                color: #8a97f8;
              }
            }
          }
        }
      }
    }
  }
  .dashbody-right {
    width: 44%;
    margin-left: 1%;
    .process {
      // height: 280px;
      // background: green;
      .header {
        .header-title {
          font-size: 30px;
          border-bottom: 6px solid #8a97f8;
          padding-bottom: 14px;
        }
      }
      .sideNav {
        padding: 36px 0 18px;
        .clearfix {
          li {
            list-style: none;
            border: 1px solid #ddd;
            border-radius: 5px;
            width: 180px;
            height: 60px;
            text-align: center;
            line-height: 60px;
            margin: 0 15px 10px 0;
            font-size: 20px;
            float: left;
            color: #777;
            a {
              color: #777;
              text-decoration: none;
            }
          }
        }
      }
      .sideLink {
        padding: 36px 0 18px;
        .el-col {
          text-align: center;
        }
        a {
          color: #777;
          text-decoration: none;

          span {
            display: inline-block;
            width: 90px;
            height: 90px;
          }
          .iconGuide {
            background: url(../../assets/精灵图.png) no-repeat;
            background-position: 10px 10px;
            // background-size: 100% 100%;
          }
          .iconHelp {
            background: url(../../assets/精灵图.png) no-repeat;
            background-position: -215px 10px;
          }
          .iconTechnology {
            background: url(../../assets/精灵图.png) no-repeat;
            background-position: -455px 10px;
          }
        }
      }
    }
    .processone {
      padding-bottom: 60px;
    }
    .process-two {
      margin-top: 25px;
      padding-bottom: 60px;
    }
    .process-three {
      margin-top: 25px;
      padding-bottom: 30px;
    }
  }
}
</style>
