import Vue from 'vue'
import Vuex from 'vuex'
import user from './module/user'
import car from './module/car'
import adminUser from './module/adminUser'
import clientUser from './module/clientUser'

Vue.use(Vuex)

export default new Vuex.Store({
    strict: false,
    modules: {
        user,
        car,
        adminUser,
        clientUser
    }
})