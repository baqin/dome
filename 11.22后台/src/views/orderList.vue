<template>
  <div>
     <el-header>
        <el-breadcrumb separator="/" class="box">
          <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item to="/userlist">数据管理</el-breadcrumb-item>
          <el-breadcrumb-item>订单列表</el-breadcrumb-item>
        </el-breadcrumb>
      </el-header>
     <el-table
      :data="resList"
      style="width: 100%">
        <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="食品名称">
            <span>{{ props.row.name }}</span>
          </el-form-item>
          <el-form-item label="食品介绍">
            <span>{{ props.row.shop }}</span>
          </el-form-item>
          <el-form-item label="评分">
            <span>{{ props.row.id }}</span>
          </el-form-item>
           
        </el-form>
      </template>
    </el-table-column>
    <el-table-column
      label="订单ID"
      prop="id">
    </el-table-column>
    <el-table-column
      label="总价格"
      prop="restaurant_name">
    </el-table-column>
    <el-table-column
      label="订单状态"
      prop="id">
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
      pagesize: 5,
      //每页多少条
      pagenum: 1,
      //页码
      list:[],
      tableData: [
        {
          id: "12987122",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shop: "王小虎夫妻店",
          shopId: "10333"
        }
      ]
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
    this.$axios.get("https://elm.cangdu.org/bos/orders?offset=0&limit=20&restaurant_id=undefined").then(res => {
      console.log(res);
      this.list = res.data;
    });
  },
  mounted() {
    
  },
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
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>
