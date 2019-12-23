import axios from 'axios'
import { appConfig } from '../../config'

const apiClient = axios.create({
  // create promise
  baseURL: `${appConfig.openWeatherAPIUrl}`,
  withCredentials: false,
  headers: {
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
