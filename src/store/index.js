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
    },
  },
  mutations: {
    changeTabState(state, tabs) {
      tabs.forEach(tab => {
        state.auction[tab].active
          ? (state.auction[tab].active = false)
          : (state.auction[tab].active = true)
        state.auction[tab].disabled
          ? (state.auction[tab].disabled = false)
          : (state.auction[tab].disabled = true)
      })
    },
  },
  actions: {},
  modules: {},
})
