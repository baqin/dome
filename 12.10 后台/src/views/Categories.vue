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

    <el-dialog :title="title" :visible.sync="dialogVisible" width="50%">
      <el-form ref="form" :model="form" label-width="80px" :rules="rules">
        <el-form-item label="分类名称" prop="cat_name">
          <el-input v-model="form.cat_name"></el-input>
        </el-form-item>

        <el-form-item label="父级分类" v-show="title == '添加商品分类'">
          <el-cascader
            :options="list"
            clearable
            change-on-select
            :props="defaultParams"
            @change="handleChange"
            ref="cascader"
          ></el-cascader>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="qx">取 消</el-button>
        <el-button type="primary" @click="sortqd">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 添加编辑对话框 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      defaultParams: {
        label: "cat_name",
        value: "cat_name",
        children: "children"
      }, //级联选择器展示内容
      page: {
        pagenum: 1,
        pagesize: 5
      }, //分页
      list: [], //数据渲染
      total: 0, //总条数
      title: "添加商品分类", //动态模态框标题
      dialogVisible: false, //添加删除模态框
      id: 0, //编辑拿到当前id
      form: {
        cat_name: "",
        cat_level: "",
        cat_pid: ""
      },
      rules: {
        cat_name: [
          { required: true, message: "分类名称不能为空", trigger: "blur" }
        ]
      } //表单的正则
    }
  },
  methods: {
    qx() {
      this.dialogVisible = false
      this.form.cat_name = ""
    },

    handleSizeChange(val) {
      this.page.pagesize = val
      this.render()

      // console.log(val)
    },
    handleCurrentChange(val) {
      // console.log(val)
      this.page.pagenum = val
      this.render()
    },
    fn() {
      this.$http({
        method: "get",
        url: `api/categories`,
        params: this.page
      }).then((res) => {
        console.log(res)
        if (res.data.meta.status == 200) {
          this.list = res.data.data.result
          this.total = res.data.data.total
        }
      })
    },
    //封装渲染页面接口
    sortadd() {
      this.dialogVisible = true
      this.title = "添加商品分类"
    },
    // 添加按钮
    handleChange() {
      ;(this.form.cat_level =
        this.$refs["cascader"].getCheckedNodes()[0].data.cat_level + 1),
        (this.form.cat_pid =
          this.$refs["cascader"].getCheckedNodes()[0].data.cat_id)
    },

    sortqd() {
      if (this.title == "添加商品分类") {
        this.$http({
          method: "post",
          url: "api/categories",
          data: this.form
        }).then((res) => {
          // console.log(res)
          if (res.data.meta.status == 201) {
            this.dialogVisible = false
            this.$message({
              message: "添加商品分类名称成功",
              type: "success"
            })
            this.fn()
            this.form.cat_name = ""
          }
        })
      } else {
        this.$http({
          method: "put",
          url: `api/categories/${this.id}`,
          data: this.form
        }).then((res) => {
          // console.log(res)
          this.dialogVisible = false

          this.$message({
            message: "更新商品分类名称成功",
            type: "success"
          })
          this.form.cat_name = ""
          this.fn()
        })
      }
    },
    // 确定按钮
    edit(row) {
      // console.log(row)
      this.title = "修改分类"
      this.id = row.cat_id
      this.dialogVisible = true
      this.form.cat_name = row.cat_name
    },
    // 编辑
    del(id) {
      // console.log(id)
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$http({
            method: "delete",
            url: `api/categories/${id}`
          }).then((res) => {
            {
              // console.log(res)
              if (res.data.meta.status == 200) {
                this.fn()
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
    }
    // 删除
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
