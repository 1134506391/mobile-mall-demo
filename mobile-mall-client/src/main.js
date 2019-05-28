import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.prototype.$axios = axios
Vue.use(ElementUI)
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
    let clientUser = JSON.parse(sessionStorage.getItem('clientUser'))
    let adminUser = JSON.parse(sessionStorage.getItem('adminUser'))
    if (clientUser) {
        next()
    } else if (adminUser) {
        next()
    } else {
        if (to.path === '/' || to.path === '/login' || to.path === '/admin/login') {
            next()
        } else {
            next('/login')
        }
    }
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')