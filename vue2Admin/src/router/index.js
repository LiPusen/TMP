import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'
import store from '../store'

Vue.use(VueRouter)

const router = new VueRouter({
	mode: 'hash',
	linkActiveClass: 'is-active',
	routes
});

// 路由拦截
router.beforeEach((to, from, next) => {
	
	// 获取面包屑路径
	if(to.meta.tree && to.meta.tree.length) {
		if (to.meta.tree[0] == 'main') {
			store.commit('mCrumb', [{name: to.name, path: to.path}])
		} else {
			const toPath = [];
			to.meta.tree.forEach(item => {
				toPath.push({name: item, path: ''})
			})
			toPath.push({name: to.name, path: to.path})
			store.commit('mCrumb', toPath)
		}
	} else {
		let toPath = JSON.parse(JSON.stringify(store.state.crumb));
		for(let i = 0; i < toPath.length; i++) {
			if(toPath[i].name == to.name) {
				toPath = toPath.slice(0, i);
			}
		}
		toPath.push({name: to.name, path: to.path})
		store.commit('mCrumb', toPath)
	}
	
	// 用户校验
	if(to.path != '/login' && !store.state.common.session) {
		next('/login')
	} else {
		next();
	}
})

router.afterEach(route => {})

export default router