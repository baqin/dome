<template>
  <!-- 员工 -->
  <div>
    <el-card class="nav">
		<div class="left">
				<i class="el-icon-info"></i>
			<span>共{{222}}条记录</span>
		</div>
		<div class="right">
			<el-button type="danger">危险按钮</el-button>
			 <el-button type="info">信息按钮</el-button>
			  <el-button type="success">成功按钮</el-button>
				<el-button type="primary">主要按钮</el-button>
		</div>
		</el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {},
  created() {},
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.nav {
  width: 100%;
	
	.left{
		float: left;
		border: 1px solid #409eff;
		width: 150px;
		height: 30px;
		text-align: center;
		line-height: 30px;
		i{
			color: #409eff;

		}
	}
	.right{
		float: right;
		height: 30px;
		el-button{
			margin-left: 10px;

		}
	}
}
</style>
