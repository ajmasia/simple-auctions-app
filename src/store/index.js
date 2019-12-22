import Vue from 'vue'
import Vuex from 'vuex'
import openWeatherApi from '../api/openWeather'
import vuexI18n from 'vuex-i18n'

import en from '../locale/en.json'
import es from '../locale/es.json'
// import { appConfig } from '../../config'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    auction: {},
    weather: {},
    curLanguage: 'es',
    languages: [
      {
        locale: 'en',
        text: 'English',
      },
      {
        locale: 'es',
        text: 'Español',
      },
    ],
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
      state.auction = { ...state.auction, ...payload }
    },
    setLanguage(state, lang) {
      console.log(lang)
      state.curLanguage = lang
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

Vue.use(vuexI18n.plugin, store)
// Vue.i18n.set('es')
Vue.i18n.add('en', en)
Vue.i18n.add('es', es)

export default store
