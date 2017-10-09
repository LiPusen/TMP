const router = [{
    path: '/',
    redirect: '/index'
}, {
    name: 'index',
    path: '/index',
    component: resolve => require(['../pages/index.vue'], resolve),
    children: [{
        path: '/logon',
        name: 'logon',
        component: resolve => require(['@/pages/logon'], resolve)
    }, {
        name: 'ui-menu',
        path: '/uimenu',
        component: resolve => require(['../pages/ui/menu.vue'], resolve)
    }, {
        name: 'ui-icon',
        path: '/uiicon',
        component: resolve => require(['../pages/ui/icon.vue'], resolve)
    }, {
        name: 'ui-loading',
        path: '/uiloading',
        component: resolve => require(['../pages/ui/loading.vue'], resolve)
    }, {
        name: 'ui-dialog',
        path: '/uidialog',
        component: resolve => require(['../pages/ui/dialog.vue'], resolve)
    }, {
        name: 'ani-basic',
        path: '/anibasic',
        component: resolve => require(['../pages/animation/basic.vue'], resolve)
    }, {
        name: 'ani-case',
        path: '/anicase',
        component: resolve => require(['../pages/animation/case.vue'], resolve)
    }]
}, {
    name: 'notfound',
    path: '/notfound',
    component: resolve => require(['../pages/notFound.vue'], resolve)
}, {
    path: '/logon',
    name: 'logon',
    component: resolve => require(['@/pages/logon'], resolve)
}]

export default router