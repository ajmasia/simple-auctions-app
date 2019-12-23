<template>
  <div>
    <b-form-text id="password-help-block">
      {{ $t('language_selection') }}
    </b-form-text>
    <b-form-select
      v-model="selectedLanguage"
      :options="languages"
      class="mb-3"
      value-field="locale"
      text-field="text"
      disabled-field="notEnabled"
    ></b-form-select>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapState } from 'vuex'
export default {
  name: 'lang-selector',
  data: function() {
    return {
      selectedLanguage: this.$store.state.curLanguage,
    }
  },
  computed: {
    ...mapState(['languages']),
  },
  watch: {
    selectedLanguage(newLang) {
      Vue.i18n.set(newLang)
      this.$store.commit('setLanguage', newLang)
    },
  },
}
</script>
