<template>
  <div id="app">
    <img src="./assets/logo.png">
        <!-- router-link定义点击后导航到哪个路径下-->
        <router-link :to="{name:'HelloWorld'}">主页</router-link>
        <router-link :to="{name:'H1'}">H1页面</router-link>
        <router-link :to="{name:'H2'}">H2页面</router-link>
    <!--对应组件内容渲染到router-view中-->
    <router-view></router-view>
    <router-view name="left" style="float:left;width:50%;background-color:#ccc;height:300px;"/>
    <router-view name="right" style="float:right;width:50%;background-color:yellowgreen;height:300px;"/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
