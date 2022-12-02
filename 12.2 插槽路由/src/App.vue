<template>
  <div id="app">
    <div id="nav">
      <div class="col-xs-offset-2 col-xs-8">
        <div><h2>Vue Router Demo</h2></div>
      </div>
      <div>
        <!-- 原始html中我们使用a标签实现页面的跳转 -->

        <!-- <a href="./about.html">About</a>
        <a href="./home.html">Home</a> -->


        <!-- vue中借助router-link标签实现路由的切换 -->
        <router-link  class="list-group-item" active-class="active" to="/about">About|</router-link>
        <router-link  class="list-group-item" active-class="active" to="/home">Home|</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
