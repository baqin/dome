<template>
  <div class="dialog">
    <!-- 组织架构添加弹框 -->
    <el-dialog :visible.sync="dialogVisible" title="添加部门" width="40%">
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
          <el-button type="primary" @click="add"> 确定 </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import { getStructure, AddStructure } from "@/api/Structure"
export default {
  data() {
    return {
      dialogVisible: true,
      form: {
        name: "",
        code: "",
        manager: "",
        introduce: "",
        pid: ""
      },
      StrucTure: []
    }
  },
  created() {
    /*请求数据*/
    getStructure().then((res) => {
      console.log(res)
      this.StrucTure = res.data.data.depts
    })
  },
  methods: {
    // 添加接口
    add() {
      AddStructure(this.form).then((res) => {
        console.log(res)
        if (this.form.name == "" || this.form.code == "" || this.form.manager == "" || this.form.introduce == "") {
          this.$message({
            message: res.data.message,
            type: "warning"
          })
          return false
        }
        if (res.data.code == 10000) {
          this.$message({
            message: res.data.message,
            type: "success"
          })
          this.dialogVisible = false
          this.form = {}
        }
      })
    }
  }
}
</script>
