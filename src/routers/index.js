import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/home/Index.vue'
Vue.use(Router)
const constRouterMap = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: '这是第一个测试程序'
    },
    component: Index
  }, {
    path: '*',
    redirect: '/'
  }, {
    name: 'view',
    path: '/article/:id',
    component: () => import('../views/blog/View.vue')
  },
  {
    name: 'timeline',
    path: '/timeline',
    component: () => import('../views/timeline/index.vue')
  }
]
const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  constRouterMap
})
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
export function createRouter() {
  return router
}
