import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/home/index.vue'
import Articles from '../views/article/index.vue'
Vue.use(Router)
const routes = [
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
  },
  {
    name: 'articles',
    path: '/articles',
    component: Articles
  }, {
    name: 'view',
    path: '/article/:id',
    component: () => import('../views/blog/view.vue')
  },
  {
    name: 'timeline',
    path: '/timeline',
    component: () => import('../views/timeline/index.vue')
  },
  {
    name: 'about',
    path: '/about',
    component: () => import('../views/about.vue')
  }
]
const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
export default router
