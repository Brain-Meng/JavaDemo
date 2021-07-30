<template>
  <div id="app">
<!--    <router-link to="/index">首页</router-link>-->


<!--    <router-link to="/contentt">内容页</router-link>-->
    <router-link to="/tables">3</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'App',
  components: {
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
