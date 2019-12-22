import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import Vuelidate from 'vuelidate'
import VAnimateCss from 'v-animate-css'

// Styles
import './theme/index.scss'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(Vuelidate)
Vue.use(VAnimateCss)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
