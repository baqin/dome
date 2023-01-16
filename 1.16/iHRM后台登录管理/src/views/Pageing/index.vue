<!-- 主页面 -->
<template>
  <div class="common-layout">
    <el-container>
      <el-aside :width="isCollapse == false ? '250px' : '70px'">
        <div class="logo">
          <img src="../../assets/baimg.png" alt="" />
        </div>
        <el-menu
          default-active="/dashboard"
          class="el-menu-vertical-demo"
          :collapse="isCollapse"
          background-color="#5080fd"
          text-color="#ffffff"
          active-text-color="#43a7fe"
          router
        >
          <el-menu-item
            index="/dashboard"
            @click="tabList('首页', '/dashboard', 0)"
          >
            <p solt="title" class="el-icon-platform-eleme textIcon">
              <span>首页</span>
            </p>
          </el-menu-item>
          <el-menu-item
            index="/employees"
            @click="tabList('员工', '/employees', 1)"
          >
            <!-- <i class="el-icon-user-solid" solt="title">员工</i> -->
            <p solt="title" class="el-icon-user-solid textIcon">
              <span>员工</span>
            </p>
          </el-menu-item>
          <el-menu-item
            index="/setting"
            @click="tabList('设置', '/setting', 2)"
          >
            <p solt="title" class="el-icon-s-tools textIcon">
              <span>设置</span>
            </p>
          </el-menu-item>
          <el-menu-item
            index="/permission"
            @click="tabList('权限管理', '/permission', 3)"
          >
            <p solt="title" class="el-icon-s-goods textIcon">
              <span>权限管理</span>
            </p>
          </el-menu-item>
          <el-menu-item
            index="/social_securitys"
            @click="tabList('社保', '/social_securitys', 4)"
          >
            <p solt="title" class="el-icon-s-grid textIcon">
              <span>社保</span>
            </p>
          </el-menu-item>
          <el-menu-item
            index="/approvals"
            @click="tabList('审批', '/approvals', 5)"
          >
            <p solt="title" class="el-icon-s-data textIcon">
              <span>审批</span>
            </p>
          </el-menu-item>
          <el-menu-item
            index="/attendances"
            @click="tabList('考勤', '/attendances', 6)"
          >
            <p solt="title" class="el-icon-s-release textIcon">
              <span>考勤</span>
            </p>
          </el-menu-item>
          <el-menu-item
            index="/salarys"
            @click="tabList('工资', '/salarys', 7)"
          >
            <p solt="title" class="el-icon-star-on textIcon">
              <span>工资</span>
            </p>
          </el-menu-item>
          <el-menu-item
            index="/departments"
            @click="tabList('组织架构', '/departments', 8)"
          >
            <p solt="title" class="el-icon-more textIcon">
              <span>组织架构</span>
            </p>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <div class="header">
            <div class="collapse">
              <i
                :class="
                  isCollapse == false ? 'el-icon-s-fold' : 'el-icon-s-unfold'
                "
                @click="isCollapse = !isCollapse"
                :size="25"
              ></i>
            </div>
            <div class="firmTitle">
              江苏传智播客教育科技股份有限公司
              <span>体验版</span>
            </div>
            <div class="rightTabs">
              <el-dropdown @command="handleCommand">
                <span class="el-dropdown-link">
                  <img :src="$store.state.staffPhoto" alt="" />
                  <p>{{ username }}</p>

                  <i class="el-icon-arrow-down"></i>
                </span>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item command="a">首页</el-dropdown-item>
                    <el-dropdown-item command="b">退出登录</el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </div>
          </div>
          <div class="bottom">
            <div
              v-for="(item, index) in tabLists"
              :class="{ flagActive: item.flags == flags }"
              @click="toPath(item.name, item.flags)"
            >
              {{ item.path }}
              <i class="el-icon-close" @click="toDelete(index)"></i>
            </div>
          </div>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import router from "@/router"
import { getProfile } from "../../untils/pageing"
export default {
  data() {
    return {
      isCollapse: false,
      username: "管理员",
      tabLists: [
        {
          path: "首页",
          name: "/dashboard",
          flags: 0
        }
      ],
      flags: 0
    }
  },
  methods: {
    handleCommand(command) {
      console.log(command)
    },
    // 下拉菜单点击事件
    getList() {
      getProfile().then((res) => {
        console.log(res)
        this.username = res.data.data.username
        this.$store.commit("getCompanyId", res.data.data.companyId)
      })
    },
    tabList(path, name, flags) {
      let flag = false
      this.flags = flags
      this.tabLists.forEach((i) => {
        if (i.path.includes(path) == true) {
          flag = true
        }
      })
      if (flag == false) {
        this.tabLists.push({ path, name, flags })
      }
    },
    toPath(path, flags) {
      this.$router.push(path)
      this.flags = flags
    },
    toDelete(index) {
      this.tabLists.splice(index, 1)
    }
  },
  created() {
    this.getList()
  },
  mounted() {},
  components: { router },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.common-layout {
  width: 100%;
  height: 100%;
  .el-container {
    width: 100%;
    height: 100%;
    background: #edeff2;
  }
  .el-aside {
    height: 100%;
    background: url(../../assets/dabg.png) no-repeat;
    background-position: 0px 772px;
    background-color: #5080fd;
    background-size: 100%;
    box-shadow: 2px 0 6px rgb(0 21 41 / 35%);
    .logo {
      height: 75px;
      width: 100%;
      text-align: center;
      img {
        width: 80%;
        // height: 100%;
        margin: 7px;
      }
    }
    // ul {
    // 	width: 100%;
    // 	height: 742px;
    // 	background: #5080fd;
    // 	padding-top: 15px;
    // 	li {
    // 		height: 11%;
    // 		padding: 0 26px;
    // 		line-height: 82px;
    // 		font-size: 20px;
    // 		display: flex;
    // 		color: white;
    // 		i {
    // 			margin-top: 24px;
    // 			margin-right: 24px;
    // 		}
    // 	}
    // }
    .el-menu {
      width: 100%;
      height: 742px;
      margin-top: 15px;
      border-right: 0 !important;
      .el-menu-item {
        height: 11%;
        padding: 0 26px;
        line-height: 82px;
        font-size: 20px;
        display: flex;
        .textIcon {
          line-height: 82px;
          font-size: 22px;
          span {
            margin-left: 30px;
          }
        }
      }
      .el-menu-item:hover {
        background: #ecf5ff !important;
        color: #5080fd !important;
      }
    }
  }
  .el-header {
    height: 110px !important;
    padding: 0;
    .header {
      background: #4e7efc;
      position: relative;
      display: flex;
      .collapse {
        line-height: 66px;
        // margin-top: 8px;
        padding: 0 14px;
        color: white;
        overflow: hidden;
        font-size: 24px;
      }
      .firmTitle {
        font-size: 24px;
        line-height: 66px;
        margin-left: 10px;
        color: #fff;
        span {
          background: #84a9fe;
          font-size: 20px;
          padding: 5px 10px;
          display: inline-block;
          height: 30px;
          line-height: 30px;
          border-radius: 10px;
          margin-left: 15px;
        }
      }
      .rightTabs {
        // line-height: 66px;
        // margin-top: 8px;
        display: flex;
        color: white;
        position: absolute;
        right: 0;
        top: 0;
        .icons {
          padding-top: 18px;
          margin-right: 20px;
        }
        ::v-deep .el-color-picker__trigger {
          width: 40px !important;
          height: 40px !important;
          margin-top: 13px;
          margin-right: 20px;
        }
        .screenfull-svg[data-v-0c576603] {
          fill: #ffffff;
        }
        .el-dropdown {
          margin-left: 25px;
          color: black;
          font-size: 20px;
          padding-right: 20px;
          .el-dropdown-link {
            display: flex;
            i {
              color: white;
              margin-top: 18px;
              font-size: 26px;
            }
            p {
              margin-top: 20px;
              font-size: 18px;
              margin-left: 5px;
            }
            img {
              width: 34px;
              height: 34px;
              border-radius: 50%;
              margin-top: 15px;
            }
          }
        }
      }
    }
    .bottom {
      padding: 5px 20px 5px 20px;
      height: 40px;
      background: white;
      display: flex;
      div {
        border: 1px solid #ccc;
        margin-right: 10px;
        padding-left: 15px;
        padding-right: 15px;
        padding-top: 8px;
      }
    }
  }
}

.is-active {
  background: white !important;
  color: #43a7fe !important;
}

.flagActive {
  background: #409eff !important;
  color: white !important;
}
</style>
