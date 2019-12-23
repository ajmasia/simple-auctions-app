<template>
  <div id="app" class="container">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Vue from 'vue'
import { mapMutations } from 'vuex'
import { initialState } from './store/store.model.js'
import Header from './components/shared/Header'

export default {
  name: 'App',
  methods: {
    ...mapMutations(['initializeAppState']),
  },
  components: {
    Header,
  },
  created() {
    this.initializeAppState(initialState.auction)
    Vue.i18n.set(this.$store.state.curLanguage)
  },
}
</script>
