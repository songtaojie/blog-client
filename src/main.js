import Vue from 'vue'
import App from './App.vue'
import { createRouter } from './routers'
import { createStore } from './store'
import { sync } from 'vuex-router-sync'

// bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import './assets/fonts/iconfont.css'
import './sass/root.scss'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

Vue.config.productionTip = false

import VueWechatTitle from 'vue-wechat-title'
Vue.use(VueWechatTitle)
// md编辑器
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
// use
Vue.use(mavonEditor)

// createApp工厂方法
export function createApp(ssrContext) {
  // 创建 router 实例
  const router = createRouter()
  const store = createStore() // 创建全新store实例

  // 同步路由状态到store中
  sync(store, router)

  // 创建Vue应用
  const app = new Vue({
    router,
    store,
    ssrContext,
    render: h => h(App)
  })
  return { app, router, store }
}



