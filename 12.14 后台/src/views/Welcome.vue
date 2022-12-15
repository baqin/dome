<template>
  <div>
    <h2 style="margin-top: 20px">Welcome！！！</h2>
  </div>
</template>

<script>
import { removeToken } from "../../untils/auth"
export default {
  data() {
    return {
      list: [],
      isCollapse: true
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
    }
    // 退出按钮
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
.imgstitle {
  display: flex;
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
.welcome-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  // background: #6a6277;
  // margin: -20px 0 0 -20px;
  // height: 50px;
}

.el-aside {
  background-color: #6a6277;
  color: #fff;
  height: 100vh;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
}
.el-menu-vertical-demo {
  margin-top: 20px;
}
</style>
