<template>
  <div>
    <BFormText id="password-help-block">
      {{ $t('language_selection') }}
    </BFormText>
    <BFormSelect
      v-model="selectedLanguage"
      :options="languages"
      class="mb-3"
      value-field="locale"
      text-field="text"
      disabled-field="notEnabled"
    ></BFormSelect>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapState } from 'vuex'
import { BFormSelect, BFormText } from 'bootstrap-vue'
export default {
  name: 'lang-selector',
  components: {
    BFormSelect,
    BFormText,
  },
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
