<template>
  <div class="roles">
    <!-- 头部添加 -->
    <div class="roles-top">
      <el-button type="primary" @click="rolesadd">添加角色</el-button>
    </div>

    <!-- 表格 -->
    <el-table :data="list" style="width: 100%; margin-top: 10px">
      <el-table-column type="expand">
        <template slot-scope="props">
          <div class="roles-slot">
            <el-row
              v-for="item in props.row.children"
              :key="item.id"
              style="border: 1px solid #ccc"
            >
              <el-col :span="5" style="border-left: 1px solid #ccc">
                <el-button type="primary"
                  >{{ item.authName }}
                  <i
                    class="el-icon-close"
                    @click="delRoles(props.row.id, item.id)"
                  ></i
                ></el-button>
                <i class="el-icon-caret-right"></i>
              </el-col>

              <el-col :span="16">
                <el-row v-for="ele in item.children" :key="ele.id">
                  <el-col :span="8">
                    <el-button type="success"
                      >{{ ele.authName }}
                      <i
                        class="el-icon-close"
                        @click="delRoles(props.row.id, ele.id)"
                      ></i
                    ></el-button>
                    <i class="el-icon-caret-right"></i>
                  </el-col>

                  <el-col :span="12">
                    <el-button
                      v-for="i in ele.children"
                      :key="i.id"
                      type="warning"
                      >{{ i.authName }}
                      <i
                        class="el-icon-close"
                        @click="delRoles(props.row.id, i.id)"
                      ></i></el-button
                  ></el-col>
                </el-row>
              </el-col>
            </el-row>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="#" type="index"> </el-table-column>
      <el-table-column label="角色名称" prop="roleName"> </el-table-column>
      <el-table-column label="描述" prop="roleDesc"> </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            class="el-icon-edit"
            type="primary"
            @click="edit(scope.row)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            class="el-icon-delete"
            @click="del(scope.row.id)"
            >删除</el-button
          >
          <el-button
            size="mini"
            type="warning"
            class="el-icon-setting"
            @click="distribution(scope.row.id, scope.row)"
            >分配权限</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <roles-update
      v-if="dialogVisible"
      ref="rolesUpdate"
      :title="title"
      :editid="editid"
      @dynamicqd="dynamicqd"
      @qddistribution="qddistribution"
    ></roles-update>
  </div>
</template>

<script>
import { STATUS } from "@/constStatus/initStatus"
import RolesUpdate from "../Powermanage/Roles-Update.vue"
export default {
  data() {
    return {
      list: [], //数据渲染
      dialogVisible: false, //添加模态框
      dialogVisible1: false, //分配权限模态框
      title: "添加角色", //动态的模态框标题
      editid: -1, //-1就是添加,其他就是编辑
      id: 0
    }
  },
  methods: {
    /**封装渲染页面 */
    render() {
      this.$http({
        method: "get",
        url: this.$http.addorUrl("roles")
      }).then((res) => {
        // console.log(res)
        if (res.data.meta.status == STATUS.SUCCESS) {
          this.list = res.data.data
        }
      })
    },

    /**删除按钮事件 */
    del(id) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$http({
            method: "delete",
            url: this.$http.addorUrl(`/roles/${id}`)
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

    /**添加角色事件*/
    rolesadd() {
      this.editid = -1
      this.dialogVisible = true
      this.$nextTick(() => {
        this.$refs.rolesUpdate.info()
      })
    },

    /**组件传过来的确定按钮 */
    dynamicqd(info) {
      if (this.editid == -1) {
        this.$http({
          method: "post",
          url: this.$http.addorUrl("/roles"),
          data: info
        }).then((res) => {
          // console.log(res)
          this.dialogVisible = false
          if (res.data.meta.status == STATUS.ERROR) {
            this.render()
            this.$message({
              message: "添加成功",
              type: "success"
            })
          }
          info = {
            roleName: "",
            roleDesc: ""
          }
        })
      } else {
        this.$http({
          method: "put",
          url: this.$http.addorUrl(`roles/${this.editid}`),
          data: { roleName: info.roleName, roleDesc: info.roleDesc }
        }).then((res) => {
          // console.log(res)
          this.dialogVisible = false
          if (res.data.meta.status == STATUS.SUCCESS) {
            this.render()
            this.$message({
              message: "修改成功",
              type: "success"
            })
          }
        })
      }
    },

    /**编辑按钮 */
    edit(row) {
      this.title = "修改角色"
      this.dialogVisible = true
      this.$nextTick(() => {
        this.$refs.rolesUpdate.info(row)
      })
      this.editid = row.id
    },

    /**分配权限确定按钮 */
    distribution(id, row) {
      this.id = id
      this.dialogVisible1 = true
      this.$nextTick(() => {
        this.$refs.rolesUpdate.info1(row)
      })
    },

    /**组件传过来的权限确定按钮 */
    qddistribution(info) {
      this.$http({
        method: "post",
        url: this.$http.addorUrl(`/roles/${this.id}/rights`),
        data: {
          rids: info
            .getHalfCheckedKeys()
            .concat(info.getCheckedKeys())
            .join(",")
        }
      }).then((res) => {
        // console.log(res)
        if (res.data.meta.status == STATUS.SUCCESS) {
          this.dialogVisible1 = false
          this.render()
          this.$message({
            message: "权限更新成功",
            type: "success"
          })
        }
      })
    },

    /**删除权限 */
    delRoles(id, ids) {
      this.$http({
        method: "delete",
        url: this.$http.addorUrl(`roles/${id}/rights/${ids}`)
      }).then((res) => {
        // console.log(res)
        this.$message({
          message: "取消权限成功",
          type: "success"
        })
        this.render()
      })
    }
  },
  created() {
    this.render()
  },
  mounted() {},
  components: {
    RolesUpdate
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.roles {
  border: 1px solid #ebeef5;
  background-color: #fff;
  color: #303133;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  padding: 20px;
}
.roles-top {
  display: flex;
}
.roles-title {
  display: flex;
  // width: 600px;
}
.roles-slot {
  width: 100%;
  padding: 20px 40px;
}
::v-deep .el-button {
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 20px;
}
::v-deep .el-icon-caret-right {
  margin-left: 20px;
}
</style>
