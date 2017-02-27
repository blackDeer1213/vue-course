<template>
  <div>
    <div class="container layout layout-margin-top">
      <div class="row">
        <div class="col-md-9">
          <div class="content">
            <div class="row course-cates">
              <div class="col-md-2 course-cates-title">类别：</div>
              <div class="col-md-10 course-cates-content">
                <a class="active" href="/courses/?course_type=all&amp;tag=all">全部</a>
                <a class="" href="/courses/?course_type=all&amp;tag=all&amp;fee=free">免费</a>
                <a class="" href="/courses/?course_type=all&amp;tag=all&amp;fee=limited">限免</a>
              </div>
            </div>
            <div class="row course-cates">
              <div class="col-md-2 course-cates-title">标签：</div>
              <div class="col-md-10 course-cates-content">
                <a class="active" href="/courses/?course_type=all&amp;fee=all">全部</a>

                <a class="" href="/courses/?course_type=all&amp;tag=Python&amp;fee=all">Python</a>

                <a class="" href="/courses/?course_type=all&amp;tag=C%2FC%2B%2B&amp;fee=all">C/C++</a>

                <a class="" href="/courses/?course_type=all&amp;tag=Linux&amp;fee=all">Linux</a>

              </div>
            </div>
          </div>


          <div class="content position-relative">
            <div class="row center">
              <div class="col-md-4 col-sm-6  course">
                <a class="course-box" href="/courses/63">
                  <div class="course-img">
                    <img alt="网络" src="../../assets/list/network.png" height="363" width="640"/>
                  </div>
                  <div class="course-body">
                <span class="course-title" data-toggle="tooltip" data-placement="bottom" title=""
                      data-original-title="网络">网络学习：从入门到入土 </span>
                  </div>
                </a>
              </div>

              <div class="col-md-4 col-sm-6  course">
                <a class="course-box" href="/courses/63">
                  <div class="course-img">
                    <img alt="Python" src="../../assets/list/python.png" height="363" width="640"/>
                  </div>
                  <div class="course-body">
                <span class="course-title" data-toggle="tooltip" data-placement="bottom" title=""
                      data-original-title="Python 经典项目实战">Python 经典项目实战</span>
                  </div>
                </a>
              </div>

              <div class="col-md-4 col-sm-6  course">
                <a class="course-box" href="/courses/63">
                  <div class="course-img">
                    <img alt="C++实现智能指针" src="../../assets/list/C++.png" height="363" width="640"/>
                  </div>
                  <div class="course-body">
                <span class="course-title" data-toggle="tooltip" data-placement="bottom" title=""
                      data-original-title="C++实现智能指针">C++实现智能指针</span>
                  </div>
                </a>
              </div>
            </div>
          </div>

        </div>

        <div class="col-md-3">

          <div class="sidebox">

            <div class="sidebox-header">
              <h4 class="sidebox-title">最热路径</h4>
            </div>
            <div class="sidebox-body course-content side-list-body">
              <a href="/paths/python"><img style="width:25px;height:25px" src="https://dn-simplecloud.qbox.me/1471513769430.png"> Python 研发工程师</a>
              <a href="/paths/bigdata"><img style="width:25px;height:25px" src="https://dn-simplecloud.qbox.me/1471513926288.png"> 大数据工程师</a>
              <a href="/paths/cpp"><img style="width:25px;height:25px" src="https://dn-simplecloud.qbox.me/1471513793360.png"> C++ 研发工程师</a>
              <a href="/paths/security"><img style="width:25px;height:25px" src="https://dn-simplecloud.qbox.me/1471513867033.png"> 信息安全工程师</a>
              <a href="/paths/linuxsys"><img style="width:25px;height:25px" src="https://dn-simplecloud.qbox.me/1471514004752.png"> Linux 运维工程师</a>
            </div>

          </div>

          <div class="side-image side-qrcode"  style=" text-align:center;">
            <img src="../../assets/list/QRCode.png" height="180" width="180"/>

            <div class="side-image-text" style=" text-align:center;"> 扫描二维码 关注作者！！</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import customHeader from '../header/head'
  export default{
    components: {
      customHeader: customHeader
    }
  }
</script>
<style scoped>
  .layout {
    min-height: 80%;
    margin-top: 70px;
    margin-bottom: 20px;
  }

  .course {
    text-decoration: none;
    margin: 10px 0;
    width: 280px;
    min-width: 140px;
  }

  .course-box {
    display: block;
    position: relative;
    min-height: 220px;
    margin: 0;
    background: rgba(60, 63, 65, 0);
    box-shadow: 0 2px 2px 0 #eee;
  }

  .course-box .course-img {
    width: 100%;
  }

  .course-box .course-body {
    padding: 5% 5% 0;
  }

  .course-box .course-img > img {
    width: 100%;
    height: 140px;
  }

  .content {
    margin-bottom: 10px;
    padding: 30px;
    background: #fff;
    border: 1px solid #eee;
  }

  .course-cates {
    font-size: 16px;
    color: #666;
  }

  .course-cates:first-child {
    margin-bottom: 10px;
  }

  .course-cates-title {
    padding: 4px 0 4px 15px;
  }

  .course-cates-content .course-cates-vip, .course-cates-content > a {
    display: inline-block;
    margin: 0 4px 4px 0;
    padding: 4px 10px;
    color: #666;
    border-radius: 15px;
    cursor: pointer;
    transition: color 1s ease;
    transition: background .5s ease;
  }

  .course-cates-content .course-cates-vip.active, .course-cates-content .course-cates-vip:focus, .course-cates-content .course-cates-vip:hover, .course-cates-content > a.active, .course-cates-content > a:focus, .course-cates-content > a:hover {
    color: #fff;
    background: #08bf91;
    text-decoration: none;
  }

  .center {
    display: flex;
    justify-content:left;
  }

  .side-image.side-qrcode {
    padding: 15px 0;
    text-align:left;
  }
  .side-image {
    margin-bottom: 10px;
    background: #fff;
    text-align: center;
  }
  .sidebox{
    background: #fff;
  }
  .sidebox-header {
    overflow: hidden;
    padding: 0 0 10px;
    border-bottom: 1px solid #eee;
  }
  .sidebox-body {
    padding: 10px 0;
    font-size: 14px;
  }

  .side-list-body a {
    display: block;
    padding: 10px;
    color: #565a61;
    font-size: 14px;
    word-break: break-all;
    word-wrap: break-word;
    text-align: left;
  }
</style>
