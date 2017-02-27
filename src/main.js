// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import list from 'components/list/list'
import home from 'components/home/home'
Vue.use(VueRouter)

const routes = [
  {path: '/list', component: list},
  {path: '/home', component: home},
  {path: '*', redirect: '/home'}
]
const router = new VueRouter({
  linkActiveClass: 'active',
  routes
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
