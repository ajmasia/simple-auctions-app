import Vue from 'vue'
import openWeatherApi from '../api/openWeather'

export const changeActiveTab = (state, tabs) => {
  tabs.forEach(tab => {
    state.auction[tab].active
      ? (state.auction[tab].active = false)
      : (state.auction[tab].active = true)
    state.auction[tab].disabled
      ? (state.auction[tab].disabled = false)
      : (state.auction[tab].disabled = true)
  })
}

export const setFormValue = (state, payload) => {
  state.auction[payload.model].value = payload.value
}

export const setSuccess = (state, payload) => {
  state.auction.success = payload
}

export const initializeAppState = (state, payload) => {
  state.auction = { ...state.auction, ...payload }
}

export const setLanguage = (state, lang) => {
  console.log(lang)
  state.curLanguage = lang
}

export const getWeatherData = state => {
  openWeatherApi
    .getData()
    .then(response => {
      state.weather = { ...state.weather, ...response.data }
    })
    .catch(() => {
      state.weatherError = Vue.i18n.translate('api_service_error')
    })
}
