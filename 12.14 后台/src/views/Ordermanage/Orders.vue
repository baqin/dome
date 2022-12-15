<template>
  <div class="orders">
    <div class="orders-top">
      <el-input
        placeholder="请输入内容"
        v-model="page.query"
        class="input-with-select"
        style="width: 400px; margin-right: 20px"
      >
        <el-button
          slot="append"
          icon="el-icon-search"
          @click="search"
        ></el-button>
      </el-input>
    </div>

    <!-- 表格 -->
    <el-table :data="list" border style="width: 100%; margin-top: 10px">
      <el-table-column type="index" label="#" width="50"> </el-table-column>
      <el-table-column prop="order_number" label="订单编号" width="250">
      </el-table-column>
      <el-table-column prop="order_price" label="订单价格" width="210">
      </el-table-column>
      <el-table-column prop="order_pay" label="是否付款">
        <template slot-scope="scope">
          <div v-show="scope.row.order_pay == 1" class="box">已付款</div>
          <div v-show="scope.row.order_pay == 0" class="box1">未付款</div>
          <div></div>
        </template>
      </el-table-column>
      <el-table-column prop="is_send" label="是否发货" width="180">
      </el-table-column>
      <el-table-column prop="create_time" label="下单时间" width="200">
        <template slot-scope="scope">
          {{ new Date(scope.row.create_time).toLocaleString() }}
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            class="el-icon-edit"
            @click="edit(scope.row)"
            type="primary"
          ></el-button>
          <el-button
            size="mini"
            type="success"
            class="el-icon-position"
            @click="logistics"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="page.pagenum"
      :page-sizes="[1, 2, 5, 10]"
      :page-size="page.pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      style="margin-top: 15px"
    >
    </el-pagination>

    <orders-update ref="ordersupdate" v-if="dialogVisible"></orders-update>
  </div>
</template>

<script>
import cityOptions from "@/assets/city_data2017_element"
import OrdersUpdate from "../Ordermanage/Orders-Update.vue"
import { STATUS } from "@/constStatus/initStatus"

export default {
  data() {
    return {
      page: {
        query: "",
        pagenum: 1,
        pagesize: 10
      }, //分页
      list: [], //渲染页面数据
      total: 0, //总条数
      dialogVisible: false, //查看物流信息
      dialogVisible1: false //点击编辑
    }
  },
  methods: {
    /**分页 */
    handleSizeChange(val) {
      this.page.pagesize = val
      // console.log(val)
      this.render()
    },

    /**分页 */
    handleCurrentChange(val) {
      // console.log(val)
      this.page.pagenum = val
      this.render()
    },

    /**搜索 */
    search() {
      this.render()
    },

    /**封装渲染页面 */
    render() {
      this.$http({
        method: "get",
        url: this.$http.addorUrl("/orders"),
        params: this.page
      }).then((res) => {
        // console.log(res)
        this.list = res.data.data.goods
        this.total = res.data.data.total
      })
    },

    /**查看物流 */
    logistics() {
      this.dialogVisible = true
      this.$http({
        method: "get",
        url: this.$http.addorUrl(`/kuaidi/${1106975712662}`)
      }).then((res) => {
        console.log(res)
        if (res.data.meta.status == STATUS.SUCCESS) {
          this.$nextTick(() => {
            this.$refs.ordersupdate.info(res.data.data)
          })
        }
      })
    },

    /**编辑事件 */
    edit(row) {
      this.dialogVisible1 = true
      this.$nextTick(() => {
        this.$refs.ordersupdate.info1()
      })
    }
  },
  mounted() {},
  created() {
    this.render()
  },
  components: {
    OrdersUpdate
  },
  watch: {}
}
</script>

<style lang="scss" scoped>
.orders {
  border: 1px solid #ebeef5;
  background-color: #fff;
  color: #303133;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  padding: 20px;
}
.orders-top {
  display: flex;
}
.box {
  width: 50px;
  height: 20px;
  background: #409eff;
  border-radius: 15%;
  font-size: 12px;
  line-height: 20px;
  text-align: center;
  color: #fff;
}
.box1 {
  width: 50px;
  height: 20px;
  background: #f56c6c;
  border-radius: 15%;
  font-size: 12px;
  line-height: 20px;
  text-align: center;
  color: #fff;
}
.orders-aa {
  width: 528px;
}
</style>
