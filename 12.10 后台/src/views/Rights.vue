<template>
	<div>
		 <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/Index' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>权限管理</el-breadcrumb-item>
      <el-breadcrumb-item>权限列表</el-breadcrumb-item>
    </el-breadcrumb>
		 <el-table :data="list" style="width: 100%">
      <el-table-column type="index" label="#" width="180"> </el-table-column>
        <el-table-column prop="authName" label="权限名称"> </el-table-column>
      <el-table-column prop="path" label="路径"> </el-table-column>
      <el-table-column prop="level" label="等级">
				<template slot-scope="scope">
          <el-button v-if="scope.row.level == 0">一级</el-button>
          <el-button type="success" v-if="scope.row.level == 1">二级</el-button>
          <el-button type="info" v-if="scope.row.level == 2">三级</el-button>
        </template>
				 </el-table-column>
		 </el-table>
 </div>
</template>

<script>
export default {
	data () {
		return {
			list:[]
		}
	},
	methods: {
		fn(){
			 this.$http.get(`/api/rights/list`).then((res) => {
        console.log(res)
			this.list=res.data.data
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
</style>
