<template>
  <div id="app" class="container">
    <router-view />
  </div>
</template>
<script>
import { mapMutations } from 'vuex'

export default {
  name: 'App',
  methods: {
    ...mapMutations(['initializeAppState']),
  },
  created() {
    this.initializeAppState()
  },
}
</script>
