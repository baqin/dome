<template>
  <div class="users">
    <!-- 搜索添加按钮 -->
    <div class="users-top">
      <el-input
        placeholder="请输入内容"
        v-model="page.query"
        class="input-with-select"
        style="width: 400px; margin-right: 20px"
      >
        <el-button
          slot="append"
          icon="el-icon-search"
          @click="search"
        ></el-button>
      </el-input>
      <el-button type="primary" @click="addusers">添加用户</el-button>
    </div>

    <!-- 表格 -->
    <el-table :data="list" border style="width: 100%; margin-top: 10px">
      <el-table-column type="index" label="#" width="50"> </el-table-column>
      <el-table-column prop="username" label="姓名" width="180">
      </el-table-column>
      <el-table-column prop="email" label="邮箱"> </el-table-column>
      <el-table-column prop="mobile" label="电话"> </el-table-column>
      <el-table-column prop="role_name" label="角色"> </el-table-column>
      <el-table-column prop="mg_state" label="状态">
        <template slot-scope="scope">
          <el-switch
            v-model="scope.row.mg_state"
            active-color="#13ce66"
            inactive-color="#ff4949"
            @change="change(scope.row.id, scope.row.mg_state)"
          >
          </el-switch>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            class="el-icon-edit"
            type="primary"
            @click="edit(scope.row)"
          ></el-button>
          <el-button
            size="mini"
            type="danger"
            class="el-icon-delete"
            @click="del(scope.row.id)"
          ></el-button>
          <el-button
            size="mini"
            type="warning"
            class="el-icon-setting"
            @click="distribution(scope.row)"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="page.pagenum"
      :page-sizes="[1, 2, 5, 10]"
      :page-size="page.pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      style="margin-top: 15px"
    >
    </el-pagination>

    <!-- 引入弹框组件 -->
    <usersevent
      v-if="dialogVisible"
      ref="usersUpdate"
      @dynamicqd="dynamicqd"
      :title="title"
      :editid="editid"
      @userfp="userfp"
    ></usersevent>
  </div>
</template>

<script>
import usersevent from "../Usermanage/Users-event.vue"
import { STATUS } from "@/constStatus/initStatus"
export default {
  data() {
    return {
      page: {
        query: "",
        pagenum: 1,
        pagesize: 10
      }, //分页
      list: [], //渲染页面数据
      total: 0, //数据的总页数
      dialogVisible: false, //显示隐藏弹框
      dialogVisible1: false, //分配权限的表单
      title: "添加用户", //动态设置弹框标题
      editid: -1, //-1就是添加,其他就是编辑
      ids: 0 //保存点击得那个一个
    }
  },
  methods: {
    /**封装渲染接口 */
    render() {
      this.$http({
        method: "get",
        url: this.$http.addorUrl("/users"),
        params: this.page
      }).then((res) => {
        // console.log(res)
        if (res.data.meta.status == STATUS.SUCCESS) {
          this.list = res.data.data.users
          this.total = res.data.data.total
        }
      })
    },

    /**切换分页 */
    handleSizeChange(val) {
      this.page.pagesize = val
      this.render()
    },
    /**切换分页 */
    handleCurrentChange(val) {
      this.page.pagenum = val
      this.render()
    },
    /**删除事件 */
    del(id) {
      // console.log(id)
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$http({
            method: "delete",
            url: this.$http.addorUrl(`/users/${id}`)
          }).then((res) => {
            {
              // console.log(res)
              if (res.data.meta.status == STATUS.SUCCESS) {
                this.render()
                // 删除调用渲染
              }
            }
          })
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
		
    /**添加用户按钮 */
    addusers() {
      this.title = "添加用户"
      this.editid = -1
      this.dialogVisible = true
      this.$nextTick(() => {
        this.$refs.usersUpdate.info()
      })
    },

    /**组件传过来的确定按钮 */
    dynamicqd(info) {
      // console.log(info)
      if (this.editid == -1) {
        this.$http.post("/api/users", info).then((res) => {
          // console.log(res)
          if (res.data.meta.status == STATUS.ERROR) {
            this.render()
            this.dialogVisible = false
            this.$message({
              message: "添加成功",
              type: "success"
            })
            info = {
              username: "",
              password: "",
              email: "",
              mobile: ""
            }
          } else {
            this.$message.error("添加失败")
            return false
          }
        })
      } else {
        this.$http({
          method: "put",
          url: this.$http.addorUrl(`/users/${this.editid}`),
          data: { email: info.email, mobile: info.mobile }
        }).then((res) => {
          // console.log(res)
          if (res.data.meta.status == STATUS.SUCCESS) {
            this.dialogVisible = false
            this.$message({
              message: "编辑成功",
              type: "success"
            })
            this.render()
          } else {
            this.$message.error("编辑失败")
            return false
          }
          // this.role_id = res.data.data.role_id
        })
      }
    },

    /**编辑按钮 */
    edit(row) {
      this.row = row
      this.title = "编辑用户"
      this.dialogVisible = true
      this.$nextTick(() => {
        /**点击编辑按钮把row传给子组件，子组件通过info进行接收 */
        this.$refs.usersUpdate.info(row)
      })
      this.editid = row.id
    },
    /**用户状态切换 */
    change(id, state) {
      this.$http({
        method: "put",
        url: this.$http.addorUrl(`users/${id}/state/${state}`)
      }).then((res) => {
        // console.log(res)
        if (res.data.meta.status == STATUS.SUCCESS) {
          this.$message({
            message: res.data.meta.msg,
            type: "success"
          })
          this.render()
        }
      })
    },

    /**分配权限 */
    distribution(row) {
      // console.log(row)
      this.ids = row.id
      this.dialogVisible1 = true
      this.$http({
        method: "get",
        url: this.$http.addorUrl("roles")
      }).then((res) => {
        // console.log(res)
        if (res.data.meta.status == STATUS.SUCCESS) {
          this.$nextTick(() => {
            this.$refs.usersUpdate.info1({
              row: row,
              arrs: res.data.data
            })
          })
        }
      })
    },

    /**子传过来得事件, 权限确定按钮 */
    userfp(val) {
      this.$http({
        method: "put",
        url: this.$http.addorUrl(`users/${this.ids}/role`),
        data: { rid: val.qxname }
      }).then((res) => {
        // console.log(res)
        if (res.data.meta.status == STATUS.SUCCESS) {
          this.$message({
            message: "更新角色成功",
            type: "success"
          })
          this.dialogVisible1 = false
          this.render()
        } else {
          this.$message.error("更新角色失败")
        }
      })
    },
    /**搜索按钮 */
    search() {
      this.render()
    }
  },
  created() {
    this.render()
  },
  mounted() {},
  components: {
    usersevent
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.users {
  border: 1px solid #ebeef5;
  background-color: #fff;
  color: #303133;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  padding: 20px;
}
.users-top {
  display: flex;
}
</style>
