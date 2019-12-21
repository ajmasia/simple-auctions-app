import Vue from 'vue'
import Vuex from 'vuex'
import { initialState } from './model'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    auction: {},
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
    initializeAppState(state) {
      state.auction = initialState.auction
    },
  },
  actions: {},
  modules: {},
  getters: {
    getSuccess: state => () => state.auction.success,
    getBuyerValue: state => () => state.buyer.value,
    getSellerValue: state => () => state.seller.value,
  },
})
