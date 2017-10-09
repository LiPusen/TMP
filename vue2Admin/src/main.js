// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import components from './components'

Object.keys(components).forEach((key) => {
    var name = key.replace(/(\w)/, (v) => v.toUpperCase()) //首字母大写
    Vue.component(`v${name}`, components[key])
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    data: {
        eventHub: new Vue()
    },
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {
        App
    }
})