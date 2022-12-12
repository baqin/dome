<template>
  <div>
    <el-container>
      <el-aside
        :width="isCollapse == true ? '230px' : '0px'"
        :collapse="isCollapse"
      >
        <div class="imgstitle">

          <h3 class="title">电商管理系统</h3>
        </div>

        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          background-color="#22a0ff"
          text-color="#fff"
          active-text-color="#ffd04b"
          router
        >
          <el-submenu v-for="item in list" :key="item.id" :index="item.path">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{ item.authName }}</span>
            </template>
            <el-menu-item-group>
              <el-menu-item
                :index="ele.path"
                v-for="ele in item.children"
                :key="ele.id"
                @click="add(item.authName, ele.authName)"
                >{{ ele.authName }}</el-menu-item
              >
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <div class="home-top">
          <h2>
            <i class="el-icon-s-fold" @click="hide"></i>
          </h2>
          <el-button type="primary" @click="outland">退出</el-button>
        </div>
        <div class="crumbs">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/welcome' }"
              ><span @click="authName = []">首页</span></el-breadcrumb-item
            >
            <el-breadcrumb-item
              v-for="(item, index) in authName"
              :key="index"
              >{{ item }}</el-breadcrumb-item
            >
          </el-breadcrumb>
        </div>

        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      isCollapse: true,
      authName: []
    }
  },
  methods: {
    hide() {
      this.isCollapse = !this.isCollapse
    },
    // 控制左侧显示与隐藏
    outland() {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$router.push("/login")
          this.$message({
            type: "success",
            message: "删除成功!"
          })
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          })
        })
    },
    // 退出按钮
    add(item, ele) {
      this.authName = [item, ele]
    }
  },
  created() {
    this.$http.get(this.$http.addorUrl("/menus")).then((res) => {
      // console.log(res)
      if (res.data.meta.status == 200) {
        this.list = res.data.data
      }
    })
  },
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.crumbs {
  margin-top: 5px;
  margin-bottom: 20px;
}
.home-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.imgstitle {
  text-align: center;
	color:#00c4e6;
}
.title {
  padding: 10px;
  margin-top: 10px;
}
.imgs {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #efefef;
  margin: 5px;
}
.el-aside {
  background-color: #a0c9f9;
  color: #fff;
  // text-align: center;
  height: 100vh;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  // text-align: center;
  // line-height: 160px;
}
.el-menu-vertical-demo {
  margin-top: 20px;
}
</style>
