// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import components from './components'

Object.keys(components).forEach((k) => {
    var name = k.replace(/(\w)/, (v) => v.toUpperCase()) //首字母大写
    Vue.component(`os${name}`, components[k])
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    data: { eventHub: new Vue() },
    router,
    store,
    render: h => h(App)
}).$mount('#app')