<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.el-card__header {
  padding: 15px !important;
}
.el-dialog__header {
  background-color: #66b1ff !important;
  color: #fff !important;
}
.el-dialog__header {
  text-align: left !important;
  margin: 0 !important;
  background-color: #68b0fe !important;
}
.el-dialog__body {
  text-align: left !important;
}
.el-dialog__title {
  color: #fff !important;
}
.el-dialog__headerbtn .el-dialog__close {
  color: #fff !important;
}
.el-table .el-table__cell {
  padding: 10px 0 !important;
}
.el-table-column--selection .cell {
  padding-right: 0 !important;
}
</style>
