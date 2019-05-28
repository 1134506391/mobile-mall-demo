const state = {
    adminUser: JSON.parse(sessionStorage.getItem('adminUser'))
}

const getters = {

}

const mutations = {
    SET_ADMINUSER(state, params) {
        state.adminUser = params
        sessionStorage.setItem('adminUser', JSON.stringify(state.adminUser))
    }
}

const actions = {

}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}