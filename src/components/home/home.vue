<template>
  <div class="home">
    <div class="navbar-banner">
      <div class="banner-container">
        <div class="container">
          <div class="row">
            <div class="col-md-7">
              <a class="container-title">
                <img src="https://static.shiyanlou.com/img/container-title-2.png">
              </a>
            </div>
            <div class="col-md-5">
              <form>
                <div class="form-group">
                  <input class="form-control" name="name" id="name" type="text" placeholder="昵称">
                  <div class="help-block text-left"></div>
                </div>
                <div class="form-group">
                  <input class="form-control" name="email" id="email" type="email" placeholder="邮箱">
                  <div class="help-block text-left"></div>
                </div>
                <div class="form-group">
                  <input class="form-control" name="password" id="password" type="password" placeholder="密码">
                  <div class="help-block text-left"></div>
                </div>
                <button class="btn register" type="submit">滴，学生卡</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import customHeader from '../header/head'
  import list from '../list/list'
  export default {
    name: 'app',
    components: {
      customHeader: customHeader,
      list
    }
  }
</script>

<style scoped>
  .navbar-banner {
    position: absolute;
    background: url("../../assets/back.jpg");
    background-size: cover;
    bottom: 0;
    top: 50px;
    left: 0;
    right: 0;
    repeat: no-repeat;
  }

  .banner-container {
    background: none;
    background-size: 100% 100%;
    min-height: 612px;
    padding-top: 140px;
  }

  .container-title {
    max-width: 100%;
  }

  .banner-container form {
    width: 100%;
    text-align: center;
  }

  .banner-container form .form-group .form-control {
    width: 80%;
    border-radius: 5px;
    margin: auto;
  }

  .banner-container form .register:hover {
    background: #10be9d;
    border: 1px solid #10be9d;
  }

  .banner-container form .register {
    width: 80%;
    height: 52px;
    background: #11aa8c;
    color: #fff;
    font-size: 20px;
    margin-top: 8px;
    border-radius: 5px;
  }
</style>
