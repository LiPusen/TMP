const router = [
    {
		path: '/',
		component: resolve => require(['@/pages/index.vue'], resolve),
		redirect: '/home',
		children: [
		  {
        name: '首页',
        path: '/home',
        component: resolve => require(['@/pages/home'], resolve),
        meta: {
          tree: ['main']
        }
      },
      {
        name: '按钮',
        path: '/button',
        component: resolve => require(['@/pages/button'], resolve),
        meta: {
          tree: ['UI']
        }
      },
      {
        name: '表格',
        path: '/form',
        component: resolve => require(['@/pages/home'], resolve),
        meta: {
          tree: false
        }
      },
      {
        name: '面板',
        path: '/panel',
        component: resolve => require(['@/pages/panel'], resolve),
        meta: {
          tree: ['UI']
        }
      }, {
        name: '基础动画',
        path: '/base',
        component: resolve => require(['@/pages/home'], resolve),
        meta: {
          tree: ['动画']
        }
      },
      {
        name: '经典效果',
        path: '/forever',
        component: resolve => require(['@/pages/home'], resolve),
        meta: {
          tree: ['动画']
        }
		  }
		]
	},
  {
		name: 'login',
		path: '/login',
		component: resolve => require(['@/pages/login'], resolve)
	},
  {
		name: '404',
		path: '/404',
		component: resolve => require(['@/pages/notFound'], resolve)
	},
  {
		path: '*',
		redirect: '/404'
	}
]

export default router