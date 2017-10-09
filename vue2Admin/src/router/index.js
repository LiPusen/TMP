import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'

Vue.use(VueRouter)

const router = new VueRouter({
	mode: 'hash',
	linkActiveClass: 'is-active',
	routes
});

// 路由拦截
router.beforeEach((to, from, next) => { next() })

router.afterEach(route => {})

export default router