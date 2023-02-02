<!-- 组织架构模块 -->
<template>
  <div class="Structure">
    <div class="box">
      <!-- 顶部 -->
      <div class="top">
        <span class="text">组织结构</span>
        <div class="br"></div>
      </div>
      <div class="list">
        <!-- 头部 -->
        <div class="list-top">
          <div>
            <span class="title">传智教育</span>
          </div>
          <div class="div">
            <span>负责人</span>
            <el-dropdown>
              <span> 操作<i class="el-icon-arrow-down el-icon--right"></i> </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item @click.native="AddDialogStatus = !AddDialogStatus">添加子部门</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
        <!-- 渲染 -->
        <el-tree :data="tranListToTreeData(this.StrucTure, '')" :props="defaultProps">
          <span class="custom-tree-node" slot-scope="{ node, data }">
            <div
              class="node-data"
              style="width: 100%; display: flex; justify-content: space-between; align-items: center"
            >
              <span>{{ node.label }}</span>
              <span style="display: inline-block; text-align: right">
                <el-button type="text"> {{ data.manager }} </el-button>
                <el-dropdown>
                  <el-button type="text"> 操作<i class="el-icon-arrow-down el-icon--right"></i> </el-button>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item @click.native="AddDialogStatus = !AddDialogStatus">添加子部门</el-dropdown-item>
                    <el-dropdown-item @click.native="edit(data.id)">编辑部门</el-dropdown-item>
                    <el-dropdown-item @click.native="del(data.id)">删除部门</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </span>
            </div>
          </span>
        </el-tree>
      </div>
    </div>
    <!-- 编辑弹框 -->
    <el-dialog :visible.sync="dialogVisible" title="编辑部门" width="40%">
      <el-form :model="form" label-width="100px">
        <el-form-item label="部门名称">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="部门编码">
          <el-input v-model="form.code" />
        </el-form-item>
        <el-form-item label="部门负责人">
          <el-select v-model="form.manager" class="m-2" placeholder="Select" size="large">
            <el-option v-for="item in StrucTure" :key="item.id" :label="item.manager" :value="item.manager" />
          </el-select>
        </el-form-item>
        <el-form-item label="部门介绍">
          <el-input v-model="form.introduce" />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="editOk()"> 确定 </el-button>
        </span>
      </template>
    </el-dialog>
    <!-- 添加弹出框 -->
    <addDialog v-if="AddDialogStatus"></addDialog>
  </div>
</template>

<script>
import { getStructure, EditStructure, EditOkStructure, delStructure } from "@/api/Structure"
import addDialog from "./AddDialog.vue"
export default {
  components: { addDialog },
  data() {
    return {
      dialogVisible: false,
      AddDialogStatus: false,
      StrucTure: [],
      form: {
        name: "",
        code: "",
        manager: "",
        introduce: ""
      },
      index: "",
      defaultProps: {
        children: "children",
        label: "name"
      }
    }
  },
  created() {
    this.getList() // 调用
  },
  methods: {
    getList() {
      /*请求数据*/
      getStructure().then((res) => {
        console.log(res)
        this.StrucTure = res.data.data.depts
        this.tranListToTreeData(this.StrucTure)
      })
    },
    // 树形控件
    tranListToTreeData(list, rootValue) {
      const arr = []
      list.forEach((item) => {
        if (item.pid === rootValue) {
          // 递归调用
          const children = this.tranListToTreeData(list, item.id)
          if (children.length) {
            item.children = children
          }
          arr.push(item)
        }
      })
      return arr
    },
    // 编辑
    edit(id) {
      this.dialogVisible = true
      EditStructure(id).then((res) => {
        console.log(res)
        if (res.data.code == 10000) {
          this.form = res.data.data
          this.$message({
            message: res.data.message,
            type: "success"
          })
        }
      })
      this.index = id
    },
    // 确定编辑
    editOk() {
      EditOkStructure(this.index).then((res) => {
        console.log(res)
        if (res.data.code == 10000) {
          this.$message({
            message: res.data.message,
            type: "success"
          })
          this.dialogVisible = false
        }
      })
    },
    // 删除
    del(id) {
      delStructure(id).then((res) => {
        console.log(res)
        if (res.data.code == 10000) {
          this.$message({
            message: res.data.message,
            type: "success"
          })
          this.getList() // 调用
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.custom-tree-node {
  width: 100%;
}

.Structure {
  margin: 10px;
  background-color: #fff;
  padding: 20px;

  .box {
    margin: 30px 0 0 50px;

    .top {
      .text {
        color: #4a7afb;
        border-bottom: 3px solid #4a7afb;
        padding-bottom: 10px;
      }

      .br {
        width: 100%;
        height: 3px;
        background-color: #eee;
        margin-top: 10px;
      }
    }

    .list {
      margin: 50px 120px;

      .div {
        width: 130px;
        display: flex;
        justify-content: space-between;
      }

      .list-top {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 6px;
        border-bottom: 1px solid #ccc;
      }

      ul {
        margin-top: 15px;

        .list-bottom {
          width: 100%;
          display: flex;
          justify-content: space-between;
          margin-bottom: 20px;

          .span1 {
            margin-left: 6px;
          }
        }
      }
    }
  }
}

.el-button--text {
  margin-right: 18px !important;
}
</style>
