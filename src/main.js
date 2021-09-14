import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './store'

// bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import './assets/fonts/iconfont.css'
import './sass/root.scss'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
// Vue.component('BIcon', BIcon)
Vue.config.productionTip = false

import api from './api/http.js'
Vue.prototype.$api = api

import VueWechatTitle from 'vue-wechat-title'
Vue.use(VueWechatTitle)
// md编辑器
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
// use
Vue.use(mavonEditor)
// 帮助类
import utils from './common'
window.utils = utils
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
