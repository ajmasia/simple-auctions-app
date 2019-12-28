import Vue from 'vue'
import Vuex from 'vuex'
import vuexI18n from 'vuex-i18n'

import en from '../locale/en.json'
import es from '../locale/es.json'

import * as mutations from './store.mutations.js'
import * as actions from './store.actions'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    auction: {},
    weather: {},
    weatherError: null,
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
  mutations,
  actions,
  modules: {},
})

Vue.use(vuexI18n.plugin, store)
// Vue.i18n.set('es')
Vue.i18n.add('en', en)
Vue.i18n.add('es', es)

export default store
