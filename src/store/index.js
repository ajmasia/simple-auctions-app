import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    auction: {
      buyer: {
        value: null,
        active: true,
        disabled: false,
      },
      seller: {
        value: null,
        active: false,
        disabled: true,
      },
      success: null,
    },
  },
  mutations: {
    changeActiveTab(state, tabs) {
      tabs.forEach(tab => {
        state.auction[tab].active
          ? (state.auction[tab].active = false)
          : (state.auction[tab].active = true)
        state.auction[tab].disabled
          ? (state.auction[tab].disabled = false)
          : (state.auction[tab].disabled = true)
      })
    },
    setFormValue(state, payload) {
      state.auction[payload.model].value = payload.value
    },
    setSuccess(state, payload) {
      state.auction.success = payload
    },
  },
  actions: {},
  modules: {},
  getters: {
    getSuccess: state => () => state.auction.success,
  },
})
