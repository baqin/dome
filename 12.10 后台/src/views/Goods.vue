<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/Index' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="nav">
      <el-input placeholder="请输入内容" v-model="goods.query" class="input3">
        <el-button
          slot="append"
          icon="el-icon-search"
          @click="search"
        ></el-button>
      </el-input>
      <el-button type="primary" @click="tj"
        >添加用户</el-button
      >
    </div>
    <el-table :data="list" style="width: 100%">
      <el-table-column type="index" label="#" width="180"> </el-table-column>
      <el-table-column prop="goods_name" label="商品名称" width="180">
      </el-table-column>
      <el-table-column prop="goods_price" label="商品价格(元)" width="180"> </el-table-column>
      <el-table-column prop="goods_weight" label="商品重量"> </el-table-column>
      <el-table-column prop="add_time" label="创建时间" width="180">
      </el-table-column>
      <!-- <el-table-column prop="mg_state" label="状态" width="180">
        <template slot-scope="scope">
           开关
           <el-switch
            v-model="scope.row.mg_state"
            @change="change(scope.row.id, scope.row.mg_state)"
            active-color="#13ce66"
            inactive-color="#ff4949"
          ></el-switch>
        </template> -->
      <!-- </el-table-column>  -->
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button size="mini" type="danger" @click="del(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="goods.pagenum"
      :page-sizes="[2, 4, 6, 8, 10]"
      :page-size="goods.pagesize"
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
        goods_name: "",
        password: "",
        goods_price: "",
        goods_weight: "",
				id:0
      },
      list: [],
      goods: {
        query: "",
        pagenum: 1,
        pagesize: 5
      },
      tableData: []
    }
  },
  methods: {
    search() {
      this.$router.push('/Add')
    },
		tj(){

		},
    fn() {
      this.$http.get("/api/goods", { params: this.goods }).then((res) => {
        // console.log(res)
        this.list = res.data.data.goods
        this.total = res.data.data.total
      })
    },
    handleEdit(index, row) {
      // console.log(index, row)
      this.dialogVisible1 = true
      // this.form.goods_name = row.goods_name
      // this.form.goods_price = row.goods_price
      // this.form.goods_weight = row.goods_weight
			this.form.id=row.goods_id
			this.form.goods_name=row.goods_name
    },
    handleDelete(index, row) {
      console.log(index, row)
    },
		// 点击确定添加
    onSubmit() {
      this.$http.post("/api/goods", this.form).then((res) => {
        console.log(res)
        if (res.data.meta.status == 201) {
          this.$message({
            message: res.data.meta.msg,
            type: "success"
          })
        }
        this.dialogVisible1 = false
				this.form=''
        this.fn()
      })
    },
		// 删除、

    del(id) {
			console.log(id);
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          // 点击确定
          this.$http({ method: "delete" ,url:`api/goods/${id.goods_id}`}).then((res) => {
            console.log(res)
            if (res.data.meta.status == 200) {
              this.$message({
                message: res.data.meta.msg,
                type: 'success'
              });
              //   重新获取用户列表，渲染页面
							 this.fn()
            }
          })

        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          })
        })
    },
		// 点击保存编辑
    undata() {
			this.$http({method:"put",url:`/api/categories/${this.from.id}`,
			data:{goods_name:this.form.goods_name}
			}).then((res) => {
        console.log(res);
        if (res.data.meta.status == 200) {
          this.$message({
            message: res.data.meta.msg,
            type: "success",
          });
          this.dialogVisible1 = false;
          this.fn();
        }
      });
		},
		// 分页、
    handleSizeChange(val) {
      // console.log(val)
      this.goods.pagesize = val
      this.fn()
    },
    // 每页多少条改变自动触发
    handleCurrentChange(val) {
      // console.log(val)
      this.goods.pagenum = val
      this.fn()
    }
  },
  created() {
    this.fn()
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
