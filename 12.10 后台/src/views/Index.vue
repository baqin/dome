<template>
	<div>
	<el-container>
  <el-aside :width="flag ? '0px' : '200px'">
		<div class="nav"><p>电商后台管理系统</p>
		</div>
		<el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
			router >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>用户管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/Users">用户列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
		 <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>权限管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/Roles">角色列表</el-menu-item>
        </el-menu-item-group>
				<el-menu-item-group>
          <el-menu-item index="/Rights">权限列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
			<el-submenu index="3">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>商品管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/Goods">商品列表</el-menu-item>
        </el-menu-item-group>
				<el-menu-item-group>
          <el-menu-item index="/params">分类参数</el-menu-item>
        </el-menu-item-group>
				<el-menu-item-group>
          <el-menu-item index="/Categories">商品分类</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
			 <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>订单管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/Orders">订单列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
			 <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>数据统计</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/Reports">数据报表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
	</el-aside>
  <el-container>
    <el-header>
			<i class="el-icon-s-fold" @click="flag = !flag"></i>
			 <el-button type="info" class="but" @click="tc">退出</el-button>
		</el-header>
    <el-main><router-view></router-view></el-main>
  </el-container>
</el-container>
 </div>
</template>

<script>
import {setToken} from '../../untils/auth.js'
export default {
	data () {
		return {
			flag:false
		}
	},
	methods: {
		tc(){
			// removeToken()
			this.$router.push('/Login')

		}
	},
	created () {

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
.nav{
	text-align: center;
	font-style: 30px;
	color: #fff;
}
.but {
	float: right;
	margin: 10px 20px 0 0;
}
.el-header {
  background: #e9eef3;
  color: #333;
  line-height: 60px;
}
.el-icon-s-fold{
	float: left;
	text-align: center;
	line-height: 60px;
}

.el-aside {
  background-color: #333744;
  color: #333;
  height: 100vh;
}
.el-menu{
	background-color: #333744;
	color: #fff;
	height: 100vh;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
  height: 95vh;
}
</style>
