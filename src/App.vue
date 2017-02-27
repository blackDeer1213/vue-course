<template>
  <div id="app">
    <custom-header></custom-header>
    <router-view></router-view>
  </div>
</template>

<script>
import Hello from './components/Hello'
import customHeader from './components/header/head'
import list from './components/list/list'
export default {
  name: 'app',
  components: {
    Hello,
    customHeader: customHeader,
    list
  }
}
</script>

<style>
  body{
    background: #F9F9F9;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  box-sizing: border-box;
}
#app form{
  display: block;
}
#app p{
  display: block;
  -webkit-margin-before: 1em;
  -webkit-margin-after: 1em;
  -webkit-margin-start: 0px;
  -webkit-margin-end: 0px;
}
  #app .position-relative{
    position: relative;
  }
</style>
