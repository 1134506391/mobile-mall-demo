import axios from 'axios'
const state = {
  clientUser: JSON.parse(sessionStorage.getItem('clientUser'))
}

const getters = {

}

const mutations = {
  SET_CLIENTUSER (state, params) {
    state.clientUser = params
    sessionStorage.setItem('clientUser', JSON.stringify(state.clientUser))
  }
}

const actions = {
  login ({ commit }, { username, password }) {
    return new Promise((resolve, reject) => {
      axios.post('http://localhost:7001/api/clientLogin', {
        username,
        password
      })
        .then(res => {
          commit('SET_CLIENTUSER', res)
          resolve({
            code: 200,
            ok: true
          })
        })
        .catch(err => {
          reject(err)
        })
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
