<template>
  <nav class="navbar navbar-default navbar-fixed-top navbar-inverse">
    <div class="container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <router-link class="navbar-brand no-padding" to="/home">
          <img alt="Brand" src="https://static.shiyanlou.com/img/logo_03.png" class="img-size">
        </router-link>
      </div>
      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <li><router-link to="list">全部课程</router-link></li>
          <li><a href="#">讨论区</a></li>
          <li><a href="#">路径</a></li>
          <li><a href="#">我的课程</a></li>
        </ul>
        <form class="navbar-form navbar-right">
          <button type="submit" class="btn btn-default sign-in">登录</button>
          <button type="submit" class="btn btn-default sign-up">注册</button>
        </form>
      </div>
    </div>
  </nav>
</template>
<script>
  export default{
    name: 'Head',
    data () {
      return {
        msg: 'Test'
      }
    }
  }
</script>
<style scoped>
  .no-padding{
    padding:0;
  }
  .img-size{
    width: 117px;
    height:50px;
  }
  .sign-in{
    color: hsla(0,0%,100%,.5);
    background-color: #191e29;
    border: 1px solid hsla(0,0%,100%,.5);
    border-radius: 4px;
  }
  .sign-up{
    color: #fff;
    background-color: #11aa8c;
    border: 1px solid #11aa8c;
    border-radius: 4px;
  }
</style>
