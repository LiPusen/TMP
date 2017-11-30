// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
// eslint-disable-next-line
import filters from './utils/filters'
import './mock'
import * as util from './utils'
import components from './components'

Vue.use(ElementUI)

Vue.prototype.oMsg = ElementUI.Message;
Vue.prototype.oUtil = util;

Object.keys(components).forEach((key) => {
	var name = key.replace(/(\w)/, (v) => v.toUpperCase()) //首字母大写
	Vue.component(`v${name}`, components[key])
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')