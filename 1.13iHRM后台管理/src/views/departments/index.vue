<!-- 组织架构 -->
<template>
  <div class="departments">
    <el-card>
      <el-tree
        :data="list"
        :props="defaultProps"
        @node-click="handleNodeClick"
      ></el-tree>
    </el-card>
  </div>
</template>

<script>
import { getDepartment } from "../../untils/departments"
export default {
  data() {
    return {
      list: [],
      defaultProps: {
        children: "children",
        label: "name"
      }
    }
  },
  methods: {
    getList() {
      getDepartment().then((res) => {
        console.log(res)
        this.list = res.data.data.depts
      })
    },
    handleNodeClick(data) {
      console.log(data)
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
