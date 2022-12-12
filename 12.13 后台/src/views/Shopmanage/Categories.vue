<template>
  <div class="categories">
    <div class="categories-top">
      <el-button type="primary" @click="sortadd">添加分类</el-button>
    </div>
    <!-- 头部添加按钮 -->
    <el-table
      :data="list"
      style="width: 100%; margin-bottom: 20px"
      row-key="cat_id"
      border
      default-expand-all
      :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
    >
      <el-table-column type="index" label="#" width="60"> </el-table-column>
      <el-table-column prop="cat_name" label="分类名称" width="280">
      </el-table-column>
      <el-table-column prop="cat_deleted" label="是否有效">
        <template>
          <i class="el-icon-circle-check"></i>
        </template>
      </el-table-column>
      <el-table-column prop="cat_level" label="排序">
        <template slot-scope="scope">
          <div v-show="scope.row.cat_level == 0" class="box">一级</div>
          <div v-show="scope.row.cat_level == 1" class="box1">二级</div>
          <div v-show="scope.row.cat_level == 2" class="box2">三级</div>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            class="el-icon-edit"
            type="primary"
            @click="edit(scope.row)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            class="el-icon-delete"
            @click="del(scope.row.cat_id)"
            >删除</el-button
          >
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

    <categorier-update
      v-if="dialogVisible"
      ref="categoriesUpdate"
      :title="title"
      :list="list"
      @categoriesqd="categoriesqd"
    ></categorier-update>
  </div>
</template>

<script>
import categorierUpdate from "../Shopmanage/Categories-Update.vue"
import { STATUS } from "@/constStatus/initStatus"
export default {
  data() {
    return {
      dialogVisible: false, //模态框得绑定
      list: [], //数据得渲染页面
      total: 0, //总条数
      page: {
        pagenum: 1,
        pagesize: 5
      }, //分页
      title: "添加商品分类", //动态模态框标题
      id: 0 //编辑拿到当前id
    }
  },
  methods: {
    /**封装渲染页面接口 */
    render() {
      this.$http({
        method: "get",
        url: this.$http.addorUrl(`/categories`),
        params: this.page
      }).then((res) => {
        // console.log(res)
        if (res.data.meta.status == STATUS.SUCCESS) {
          this.list = res.data.data.result
          this.total = res.data.data.total
        }
      })
    },
    /**分页 */
    handleSizeChange(val) {
      this.page.pagesize = val
      this.render()
    },

    /**分页 */
    handleCurrentChange(val) {
      this.page.pagenum = val
      this.render()
    },
    /**删除按钮 */
    del(id) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$http({
            method: "delete",
            url: this.$http.addorUrl(`/categories/${id}`)
          }).then((res) => {
            {
              if (res.data.meta.status == STATUS.SUCCESS) {
                this.render()
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

    /**添加按钮 */
    sortadd() {
      this.dialogVisible = true
      this.title = "添加商品分类"
      this.$nextTick(() => {
        this.$refs.categoriesUpdate.info()
      })
    },

    /**父组件传过来的模态框确定事件 */
    categoriesqd(info) {
      if (this.title == "添加商品分类") {
        this.$http({
          method: "post",
          url: this.$http.addorUrl("categories"),
          data: info
        }).then((res) => {
          console.log(res)
          if (res.data.meta.status == STATUS.ERROR) {
            this.dialogVisible = false
            this.$message({
              message: "添加商品分类名称成功",
              type: "success"
            })
            this.render()
            info.cat_name = ""
          }
        })
      } else {
        this.$http({
          method: "put",
          url: this.$http.addorUrl(`categories/${this.id}`),
          data: info
        }).then((res) => {
          console.log(res)
          if (res.data.meta.status == STATUS.SUCCESS) {
            this.dialogVisible = false
            this.$message({
              message: "更新商品分类名称成功",
              type: "success"
            })
            // info.cat_name = ""
            this.render()
          }
        })
      }
    },

    /**编辑按钮 */
    edit(row) {
      this.title = "修改分类"
      this.id = row.cat_id
      this.dialogVisible = true
        this.$nextTick(() => {
        this.$refs.categoriesUpdate.info(row)
      })
    }
  },
  created() {
    this.render()
  },
  mounted() {},
  components: {
    categorierUpdate
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.categories {
  border: 1px solid #ebeef5;
  background-color: #fff;
  color: #303133;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  padding: 20px;
}
.categories-top {
  display: flex;
}
.el-icon-circle-check {
  background: #39ce39;
  border-radius: 50%;
}
.box {
  width: 40px;
  height: 20px;
  border-radius: 5%;
  line-height: 20px;
  text-align: center;
  background: #409eff;
  color: #fff;
}
.box1 {
  width: 40px;
  height: 20px;
  border-radius: 5%;
  line-height: 20px;
  text-align: center;
  background: #67c23a;
  color: #fff;
}
.box2 {
  width: 40px;
  height: 20px;
  border-radius: 5%;
  line-height: 20px;
  text-align: center;
  background: #e6a23c;
  color: #fff;
}
</style>
