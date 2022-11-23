<template>
  <div>
     <el-header>
        <el-breadcrumb separator="/" class="box">
          <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item to="/userlist">数据管理</el-breadcrumb-item>
          <el-breadcrumb-item>用户列表</el-breadcrumb-item>
        </el-breadcrumb>
      </el-header>
   <el-table
      :data="resList"
      style="width: 100%">
       <el-table-column
        type="index"
        label="#"
        width="180">
      </el-table-column>
      <el-table-column
        prop="registe_time"
        label="注册日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="username"
        label="用户姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="city"
        label="注册地址">
      </el-table-column>
    </el-table>
    <!-- 分页 -->
     <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pagenum"
      :page-sizes="[2, 4, 6, 8]"
      :page-size="pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="list.length"
    >
    </el-pagination>
 </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ],
      list: [],
      pagesize: 5,
      //每页多少条
      pagenum: 1
      //页码
    };
  },
  methods: {
    fn() {
      this.$axios
        .get("https://elm.cangdu.org/v1/users/list?offset=0&limit=20")
        .then(res => {
          console.log(res);
          this.list = res.data;
        });
    },
    handleSizeChange(val) {
      console.log(val);
      this.pagesize = val;
     
    },
    // 每页多少条改变自动触发
    handleCurrentChange(val) {
      console.log(val);
      this.pagenum = val;
     
    }
    //页码发生改变自动触发
  },
  created() {
    this.fn();
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
