import Vue from 'vue'
import Vuex from 'vuex'
import openWeatherApi from '../api/openWeather'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    auction: {},
    weather: {},
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
    initializeAppState(state, payload) {
      state.auction = payload
    },
    GET_WEATHER_DATA(state) {
      openWeatherApi
        .getData()
        .then(response => {
          state.weather = response.data
          console.log(response.data)
        })
        .catch(error => {
          console.log('There was an error:', error)
        })
    },
  },
  actions: {
    getWeather({ commit }) {
      commit('GET_WEATHER_DATA')
    },
  },
  modules: {},
  getters: {
    getSuccess: state => () => state.auction.success,
    getBuyerValue: state => () => state.buyer.value,
    getSellerValue: state => () => state.seller.value,
  },
})
