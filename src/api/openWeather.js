import axios from 'axios'
import { appConfig } from '../../config'

const apiClient = axios.create({
  // create promise
  baseURL: `${appConfig.openWeatherAPIUrl}`,
  withCredentials: false,
  headers: {
    // some HTTP headers
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  getData() {
    const url = `weather?units=${appConfig.units}&lat=${appConfig.coords.lat}&lon=${appConfig.coords.long}&APPID=${appConfig.openWeatherAPIKey}`
    return apiClient.get(url)
  },
}

// https://api.openweathermap.org/data/2.5/forecast?units=metric&lat=${coords.lat}&lon=${coords.lng}&appid=${state.owmApiKey}`
