<template>
  <div>
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
          <el-select v-model="value" class="m-2" placeholder="Select" size="large">
            <el-option v-for="item in StrucTure" :key="item.id" :label="item.manager" :value="item.manager" />
          </el-select>
        </el-form-item>
        <el-form-item label="部门介绍">
          <el-input v-model="form.name" />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary"> 确定 </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import { getStructure, EditStructure } from "@/api/Structure"
export default {
  data() {
    return {
      dialogVisible: true,
      value: "",
      form: {
        name: "",
        code: "",
        manager: "",
        introduce: ""
      },
      StrucTure: []
    }
  },
  created() {
    /*请求数据*/
    getStructure().then((res) => {
      console.log(res)
      this.StrucTure = res.data.data.depts
    }),
      this.edit() // 调用
  },
  methods: {
    edit() {
      EditStructure(this.$route.params.id).then((res) => {
        console.log(res)
        if (res.data.code == 10000) {
          this.form = res.data.data
          this.$message({
            message: res.data.message,
            type: "success"
          })
        }
      })
    }
  }
}
</script>
