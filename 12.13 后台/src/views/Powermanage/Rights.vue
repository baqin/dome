<template>
  <div class="rights">
    <el-table :data="list" border style="width: 100%">
      <el-table-column type="index" label="#" width="50"> </el-table-column>
      <el-table-column prop="authName" label="权限名称" width="400">
      </el-table-column>
      <el-table-column prop="path" label="路径" width="400"> </el-table-column>
      <el-table-column prop="level" label="权限等级" width="400">
        <template slot-scope="scope">
          <div v-show="scope.row.level == 0" class="box">一级</div>
          <div v-show="scope.row.level == 1" class="box1">二级</div>
          <div v-show="scope.row.level == 2" class="box2">三级</div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { STATUS } from "@/constStatus/initStatus"
export default {
  data() {
    return {
      list: []
    }
  },
  methods: {},
  created() {
    /**请求渲染页面数据 */
    this.$http({
      method: "get",
      url: this.$http.addorUrl(`rights/list`)
    }).then((res) => {
      // console.log(res)
      if (res.data.meta.status == STATUS.SUCCESS) {
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
.rights {
  border: 1px solid #ebeef5;
  background-color: #fff;
  color: #303133;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  padding: 20px;
}
.box {
  width: 40px;
  height: 20px;
  border-radius: 5%;
  line-height: 20px;
  text-align: center;
  background: #ecf5ff;
  color: #409eff;
}
.box1 {
  width: 40px;
  height: 20px;
  border-radius: 5%;
  line-height: 20px;
  text-align: center;
  background: #f0f9eb;
  color: #67c23a;
}
.box2 {
  width: 40px;
  height: 20px;
  border-radius: 5%;
  line-height: 20px;
  text-align: center;
  background: #fdf6ec;
  color: #e6a28b;
}
</style>
