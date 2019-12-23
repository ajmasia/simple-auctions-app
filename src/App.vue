<template>
  <div id="app" class="container">
    <div class="d-flex justify-content-center pt-3">
      <div class="col-md-8 col-lg-8 col-12">
        <h1>{{ $t('appTitle') }}</h1>
        {{ $t('appSubtitle') }}
        <div class="pt-3">
          <LangSelector />
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>
<script>
import Vue from 'vue'
import { mapMutations } from 'vuex'
import { initialState } from './store/store.model.js'
import LangSelector from './components/shared/LangSelector'

export default {
  name: 'App',
  methods: {
    ...mapMutations(['initializeAppState']),
  },
  components: {
    LangSelector,
  },
  created() {
    this.initializeAppState(initialState.auction)
    Vue.i18n.set(this.$store.state.curLanguage)
  },
}
</script>
