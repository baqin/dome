<template>
	<div>
		<el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/Index' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
	 <el-button type="primary" >添加分类</el-button>
	  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="商品名称">
            <span>{{ props.row.cat_name }}</span>
          </el-form-item>
          <el-form-item label="所属店铺">
            <span>{{ props.row.shop }}</span>
          </el-form-item>
          <el-form-item label="商品 ID">
            <span>{{ props.row.id }}</span>
          </el-form-item>
          <el-form-item label="店铺 ID">
            <span>{{ props.row.shopId }}</span>
          </el-form-item>
          <el-form-item label="商品分类">
            <span>{{ props.row.category }}</span>
          </el-form-item>
          <el-form-item label="店铺地址">
            <span>{{ props.row.address }}</span>
          </el-form-item>
          <el-form-item label="商品描述">
            <span>{{ props.row.desc }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
	 <el-table-column
      label="#"
      type="index">
    </el-table-column>
    <el-table-column
      label="分类名称"
      prop="cat_name">
    </el-table-column>
    <el-table-column
      label="是否有效"
      prop="cat_deleted">
	   <el-table-column prop="cat_deleted" label="等级">
				<template slot-scope="scope">
          <el-button v-if="scope.row.cat_deleted == true">×</el-button>
          <el-button type="success" v-if="scope.row.cat_deleted == false">√</el-button>
        </template>
				 </el-table-column>
    </el-table-column>

    <el-table-column
      label="排序"
      prop="cat_level">
	   <el-table-column prop="cat_level" label="等级">
				<template slot-scope="scope">
          <el-button v-if="scope.row.cat_level == 0">一级</el-button>
          <el-button type="success" v-if="scope.row.cat_level == 1">二级</el-button>
          <el-button type="info" v-if="scope.row.cat_level == 2">三级</el-button>
        </template>
				 </el-table-column>
    </el-table-column>
	<el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button size="mini" type="danger" @click="del(scope.row.id)"
            >删除</el-button
          >
        </template>
      </el-table-column>
  </el-table>
	
 </div>
</template>

<script>
export default {
	data () {
		return {
			tableData: [],
			cat:{
				type:3,
				pagenum:1,
				pagesize:5
			},
			id:0,
			attrid:0,
		}
	},
	methods: {
		 fn() {
      this.$http.get("/api/categories", { params: this.cat }).then((res) => {
        console.log(res)
				this.tableData=res.data.data.result
      })
    },
		del(){
			this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          // 点击确定
          this.$http({ method: "delete" ,url: `/api/categories/${this.id}/attributes/${this.attrid}`}).then((res) => {
            console.log(res)
            if (res.data.meta.status == 200) {
              this.$message({
                message: res.data.meta.msg,
                type: 'success'
              });
              //   重新获取用户列表，渲染页面
            }
          })
          this.fn()
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          })
        })
		}
	},
	created () {
		this.fn()
	},
	mounted () {

	},
	components: {

	},
	computed: {

	},
	watch: {

	},
}
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
