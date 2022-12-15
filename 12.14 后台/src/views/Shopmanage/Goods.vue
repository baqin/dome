<template>
  <div class="goods">
    <div class="goods-top">
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
      <el-button type="primary" @click="add">添加商品</el-button>
    </div>
    <el-table :data="list" border style="width: 100%; margin-top: 10px">
      <el-table-column type="index" label="#" width="50"> </el-table-column>
      <el-table-column prop="goods_name" label="商品名称" width="600">
      </el-table-column>
      <el-table-column prop="goods_price" label="商品价格(元)" width="110">
      </el-table-column>
      <el-table-column prop="goods_weight" label="商品重量"> </el-table-column>
      <el-table-column prop="add_time" label="创建时间" width="180">
        <template slot-scope="scope">
          {{ new Date(scope.row.add_time).toLocaleString() }}
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            class="el-icon-edit"
            type="primary"
            @click="edit(scope.row)"
          ></el-button>
          <el-button
            size="mini"
            type="danger"
            class="el-icon-delete"
            @click="del(scope.row.goods_id)"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 表格 -->
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
    <!-- 分页 -->

    <goods-update v-if="dialogVisible" ref="goodsUpdates"></goods-update>
  </div>
</template>
<script>
import GoodsUpdate from "../Shopmanage/Goods-Update.vue"

export default {
  data() {
    return {
      page: {
        query: "",
        pagenum: 1,
        pagesize: 10
      }, //分页
      list: [], //拿到的数据
      total: 0, //总条数
      dialogVisible: false //编辑的模态框
    }
  },
  methods: {
    handleSizeChange(val) {
      this.page.pagesize = val
      // console.log(val)
      this.render()
    },
    handleCurrentChange(val) {
      // console.log(val)
      this.page.pagenum = val
      this.render()
    },

    /**搜索 */
    search() {
      this.render()
    },

    /**添加按钮跳转 */
    add() {
      this.$router.push("/add")
    },

    // 删除按钮
    del(id) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$http({
            method: "delete",
            url: this.$http.addorUrl(`/goods/${id}`)
          }).then((res) => {
            {
              // console.log(res)
              if (res.data.meta.status == 200) {
                this.render()
                // 删除调用渲染
              }
            }
          })
          this.$message({
            type: "success",
            message: "删除成功!"
          })
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          })
        })
    },

    // 编辑按钮
    edit(row) {
      this.dialogVisible = true
      this.$nextTick(() => {
        this.$refs.goodsUpdates.info(row)
      })
    },

    // 封装渲染页面
    render() {
      this.$http({
        method: "get",
        url: this.$http.addorUrl("/goods"),
        params: this.page
      }).then((res) => {
        // console.log(res)
        this.list = res.data.data.goods
        this.total = res.data.data.total
      })
    }
  },
  mounted() {},
  created() {
    this.render()
  },
  components: {
    GoodsUpdate
  },

  watch: {}
}
</script>

<style lang="scss" scoped>
.goods {
  border: 1px solid #ebeef5;
  background-color: #fff;
  color: #303133;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  padding: 20px;
}
.goods-top {
  display: flex;
}
</style>
