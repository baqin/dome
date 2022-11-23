<template>
  <div>
     <el-header>
        <el-breadcrumb separator="/" class="box">
          <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item to="/userlist">数据管理</el-breadcrumb-item>
          <el-breadcrumb-item>管理员列表</el-breadcrumb-item>
        </el-breadcrumb>
      </el-header>
     <el-table
      :data="resList"
      style="width: 100%">
       <el-table-column
        prop="admin"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="create_time"
        label="注册日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="city"
        label="注册地址"> 
      </el-table-column>
      <el-table-column
        prop="status"
        label="权限"> 
      </el-table-column>
    </el-table>
     <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pagenum"
      :page-sizes="[2, 4, 6, 8, 10]"
      :page-size="pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="list.length"
    >
    </el-pagination>
 </div>
</template>

<script>
export default {
  data() {
    return {
      tableData:[],
      list:[],
        pagesize: 5,
      //每页多少条
      pagenum: 1,
      //页码
    };
  },
  methods: {
     handleSizeChange(val) {
      console.log(val);
      this.pagesize = val;
    },
    // 每页多少条改变自动触发
    handleCurrentChange(val) {
      console.log(val);
      this.pagenum = val;
    },
  },
  created() {
    this.$axios
        .get("https://elm.cangdu.org/admin/all?offset=0&limit=20")
        .then(res => {
          console.log(res);
          this.list = res.data.data;
        });
  },
  mounted() {},
  components: {},
  computed: {
    resList() {
      return this.list.slice(
        this.pagesize * (this.pagenum - 1),
        this.pagesize * this.pagenum
      );
      // 分页方法
    }
  },
  watch: {}
};
</script>

<style lang='scss' scoped>
</style>
