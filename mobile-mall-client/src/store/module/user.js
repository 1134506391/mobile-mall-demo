const state = {
  userInfo: JSON.parse(sessionStorage.getItem('userInfo'))
}

const getters = {

}

const mutations = {
  SET_USERINFO (state, params) {
    state.userInfo = params
    sessionStorage.setItem('userInfo', JSON.stringify(state.userInfo))
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
