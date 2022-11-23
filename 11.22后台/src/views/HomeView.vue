<template>
  <div>
    <el-container>
  <el-aside width="200px">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      router >
        <el-menu-item index="/manage">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>数据管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/userList">用户列表</el-menu-item>
          <el-menu-item index="/shopList">商家列表</el-menu-item>
          <el-menu-item index="/foodList">食品列表</el-menu-item>
          <el-menu-item index="/orderList">订单列表</el-menu-item>
          <el-menu-item index="/adminList">管理员列表</el-menu-item>
        </el-menu-item-group> 
      </el-submenu>
        <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>添加数据</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/addShop">添加商铺</el-menu-item>
          <el-menu-item index="/addGoods">添加商品</el-menu-item>
        </el-menu-item-group> 
      </el-submenu>
       <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>图表</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/visitor">用户分布</el-menu-item>
        </el-menu-item-group> 
      </el-submenu>
       <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>编辑</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/vueEdit">文本编辑</el-menu-item>
        </el-menu-item-group> 
      </el-submenu>
       <el-submenu index="6">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>设置</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/adminSet">管理员设置</el-menu-item>
        </el-menu-item-group> 
      </el-submenu>
       <el-submenu index="7">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>说明</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/explain">说明</el-menu-item>
        </el-menu-item-group> 
      </el-submenu>
    </el-menu>
  </el-aside>
  <el-container>
    <el-header>
      首页
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
 </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {

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
 .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    height: 100vh;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
     height: 90vh;
  }
</style>
