<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <div class="aside">
          <img src="../assets/ihrm图标.png" alt="" />
          <el-col :span="12">
            <el-menu default-active="2" class="el-menu-vertical-demo">
              <el-menu-item index="1">
                <el-icon><icon-menu /></el-icon>
                <span>首页</span>
              </el-menu-item>
              <el-menu-item index="2">
                <el-icon><document /></el-icon>
                <span>组织架构</span>
              </el-menu-item>
              <el-menu-item index="3">
                <el-icon><setting /></el-icon>
                <span>员工</span>
              </el-menu-item>
              <el-menu-item index="4">
                <el-icon><setting /></el-icon>
                <span>公司设置</span>
              </el-menu-item>
              <el-menu-item index="5">
                <el-icon><setting /></el-icon>
                <span>权限设置</span>
              </el-menu-item>
              <el-menu-item index="6">
                <el-icon><setting /></el-icon>
                <span>社保</span>
              </el-menu-item>
              <el-menu-item index="7">
                <el-icon><setting /></el-icon>
                <span>考勤</span>
              </el-menu-item>
              <el-menu-item index="8">
                <el-icon><setting /></el-icon>
                <span>工资</span>
              </el-menu-item>
              <el-menu-item index="9">
                <el-icon><setting /></el-icon>
                <span>审批</span>
              </el-menu-item>
            </el-menu>
          </el-col>
          <img src="../assets/IHRM下放图标.png" alt="" class="aside-imgs" />
        </div>
      </el-aside>
      <el-container>
        <el-header>
          <h1>江苏传智播客教育科技股份有限公司</h1>
          <p>体验版</p>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script lang="ts" setup>
import { ref, reactive, toRefs, onBeforeUnmount, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting
} from '@element-plus/icons-vue'
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style lang="scss" scoped>
.common-layout {
  background: #eef0f3;
}
.el-header {
  width: 100%;
  height: 50px;
  background: #4879fb;
  display: flex;
  h1 {
    height: 50px;
    line-height: 50px;
    color: #fff;
  }
  p {
    background: #84a9fe;
    width: 80px;
    text-align: center;
    color: #fff;
    border: 10px;
    height: 30px;
    line-height: 30px;
    margin: 10px 0 0 10px;
    border-radius: 10px;
  }
}
.el-aside {
  width: 180px;
  background: #5485fd;
  height: 100vh;
  .aside {
    width: 180px;
    height: 80px;
    img {
      width: 100%;
      height: 100%;
    }
    .aside-imgs {
      margin-top: 545px;
    }
  }
}
</style>
