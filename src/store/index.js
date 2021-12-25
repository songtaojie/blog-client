import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production' // 在非生产环境下，使用严格模式
})
export function createStore() {
  return store
}
