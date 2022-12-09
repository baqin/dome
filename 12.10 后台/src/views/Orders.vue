<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/Index' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>订单管理</el-breadcrumb-item>
      <el-breadcrumb-item>订单列表</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="nav">
      <el-input placeholder="请输入内容" v-model="orders.query" class="input3">
        <el-button
          slot="append"
          icon="el-icon-search"
          @click="search"
        ></el-button>
      </el-input>
    </div>
    <el-table :data="list" style="width: 100%">
      <el-table-column type="index" label="#" width="180"> </el-table-column>
      <el-table-column prop="order_number" label="订单编号" width="180">
      </el-table-column>
      <el-table-column prop="order_price" label="订单价格" width="180"> </el-table-column>
      <el-table-column prop="pay_status" label="是否付款">
				<template slot-scope="scope">
          <el-button type="danger" v-if="scope.row.pay_status == 0">未支付</el-button>
          <el-button type="primary" v-if="scope.row.pay_status == 1">已支付</el-button>
        </template>
				 </el-table-column>
      <el-table-column prop="is_send" label="是否发货" width="180">
      </el-table-column>
      <el-table-column prop="create_time" label="下单时间" width="180">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button>
          <el-button size="mini" type="danger" @click="del"
            >物流进度</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="添加" :visible.sync="dialogVisible" width="50%">
      <el-form ref="form" :model="form" label-width="80px">

        <el-form-item label="用户名">
          <el-input v-model="form.order_number"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <!-- 物流模态框 -->
    <el-dialog title="物流信息" :visible.sync="dialogVisible1" width="50%">
      <el-form ref="form" :model="form" label-width="80px">
        <el-timeline>
   <el-timeline>
 <el-timeline-item
 v-for="(activity, index) in arr"
 :key="index"
 :icon="activity.icon"
 :type="activity.type"
 :color="activity.color"
 :size="activity.size"
 :timestamp="activity.time"
 >
 {{ activity.context }}
 </el-timeline-item>
 </el-timeline>
  </el-timeline>
        <el-form-item>
          <el-button type="primary" @click="dialogVisible1=false">确定</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <!-- 分页 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="orders.pagenum"
      :page-sizes="[2, 4, 6, 8, 10]"
      :page-size="orders.pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
      dialogVisible1: false,
      input3: "",
      total: 0,
      form: {
        order_number: "",
        password: "",
        order_price: "",
        pay_status: "",
				create_time:'',
				is_send:'',
				id:0,
      },
      list: [],
      orders: {
        query: "",
        pagenum: 1,
        pagesize: 5
      },
      tableData: [],
			arr:[]
    }
  },
  methods: {
    search() {
      this.fn()
    },
    fn() {
      this.$http.get("/api/orders",{params:this.orders}).then((res) => {
        console.log(res)
        this.list = res.data.data.goods
				this.total=res.data.data.total
      })
    },
    handleEdit(index, row) {
      // console.log(index, row)
      this.dialogVisible = true
      // this.form.order_number = row.order_number
      // this.form.order_price = row.order_price
      // this.form.pay_status = row.pay_status
			// this.form.id=row.id
			this.form=row
			this.form.id=row.id
    },
    handleDelete(index, row) {
      console.log(index, row)
    },
		// 点击确定添加
    onSubmit(id) {
			// this.$http({method:"put",url:`/api/orders/${id}`}).then(res=>{
			// 	console.log(res);
			// })
			this.dialogVisible=false
    },
		// 点击保存编辑
    // undata() {
		// 	this.$http({method:"put",url:`/api/orders/${this.form.id}`,
		// 	form:{order_price:this.form.order_price,pay_status:this.form.pay_status}
		// 	}).then((res) => {
    //     console.log(res);
    //     if (res.data.meta.status == 200) {
    //       this.$message({
    //         message: res.data.meta.msg,
    //         type: "success",
    //       });
    //       this.dialogVisible1 = false;
    //       this.fn();
    //     }
    //   });
		// },
		// 物流信息
		del(){
			this.dialogVisible1=true
			this.fnn()
		},
		fnn(){
			this.$http({
				method:"get",
				url:`api/kuaidi/${1106975712662}`
			}).then(res=>{
				console.log(res);
				this.arr=res.data.data
			})
		},
		// 分页、
    handleSizeChange(val) {
      // console.log(val)
      this.orders.pagesize = val
      this.fn()
    },
    // 每页多少条改变自动触发
    handleCurrentChange(val) {
      // console.log(val)
      this.orders.pagenum = val
      this.fn()
    }
  },
  created() {
    this.fn();
		this.fnn()
  },
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.input3 {
  width: 300px;
}
.nav {
  display: flex;
  margin-top: 10px;
}
</style>
