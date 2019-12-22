<template>
  <div id="app" class="container">
    <div class="text-center pt-3">
      <h1>{{ $t('appTitle') }}</h1>
      {{ $t('appSubtitle') }}
    </div>
    <router-view />
  </div>
</template>
<script>
import Vue from 'vue'
import { mapMutations } from 'vuex'
import { initialState } from './store/store.model.js'

export default {
  name: 'App',
  methods: {
    ...mapMutations(['initializeAppState']),
  },
  created() {
    this.initializeAppState(initialState.auction)
    Vue.i18n.set(this.$store.state.curLanguage)
  },
}
</script>
