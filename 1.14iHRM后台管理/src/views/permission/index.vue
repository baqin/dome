<!-- 权限管理 -->
<template>
  <div class="permission">
    <el-card class="box-card" style="padding-bottom: 20px; margin-bottom: 20px">
      <el-button type="primary" style="float: right">添加权限</el-button>
    </el-card>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="name" label="名称"> </el-table-column>
      <el-table-column prop="code" label="标识"> </el-table-column>
      <el-table-column prop="description" label="描述"> </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="text">添加</el-button>
          <el-button type="text">编辑</el-button>
          <el-button type="text">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getPermission } from "../../untils/permission"
export default {
  data() {
    return {
      tableData: []
    }
  },
  methods: {
    getList() {
      getPermission().then((res) => {
        this.tableData = res.data.data
      })
    }
  },
  created() {
    this.getList()
  },
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped></style>
