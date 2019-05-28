const state = {
  carInfo: JSON.parse(sessionStorage.getItem('carInfo')),
  test: JSON.parse(sessionStorage.getItem('test'))
}

const getters = {

}

const mutations = {
  SET_CARINFO (state, params) {
    state.carInfo = params
    sessionStorage.setItem('carInfo', JSON.stringify(state.carInfo))
  },
  SER_TEST (state, params) {
    state.test = params
    sessionStorage.setItem('test', JSON.stringify(state.test))
  }
}

const actions = {
  setCarInfo ({ commit }, params) {
    commit('SET_CARINFO', params)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
