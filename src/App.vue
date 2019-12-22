<template>
  <div id="app" class="container">
    <router-view />
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
import { initialState } from './store/store.model.js'

export default {
  name: 'App',
  methods: {
    ...mapMutations(['initializeAppState']),
  },
  created() {
    console.log('**** APP CREATED')
    this.initializeAppState(initialState.auction)
  },
}
</script>
