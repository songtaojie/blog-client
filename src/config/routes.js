// 如果使用嵌套路由，注意父路由中包含router-view组件
const RouteView = {
  name: 'RouteView',
  render: (h) => h('router-view')
}


const routes = [
  {
    path: '/admin',
    name: '主页',
    component: import('@/views/Admin/Index.vue'),
    redirect: '/admin',
    hidden: true,
    meta: {
      // target: '_blank',
      title: 'menu.home', icon: 'house', permission: ['home']
    }
  },
  {
    path: '/admin/main',
    name: '主页',
    component: RouteView,
    // redirect: '/dashboard/workplace',
    // hidden: false,
    meta: {
      // target: '_blank',
      title: 'menu.home', icon: 'house', permission: ['home']
    },
    children: [
      {
        path: 'home',
        name: '概况',
        component: () => import(/* webpackChunkName: "about" */ '@/views/Home.vue'),
        meta: {
          title: 'menu.bar', default: true, icon: 'house', permission: ['home']
        }
      },
      {
        path: 'list',
        name: '列表',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
        meta: {
          // target: '_blank',
          title: 'menu.about', icon: 'grid', permission: ['home']
        }
      }

    ]
  },
  {
    path: '/about',
    name: '关于',
    component: () => import('@/views/About.vue'),
    meta: {
      // target: '_blank',
      title: 'menu.about', icon: 'info-circle-fill', permission: ['home']
    }
  }
]

export default {
  routes: routes
}
