<template>
  <div>
    <div class="d-flex justify-content-center pt-5">
      <div class="col-md-8 col-lg-6 col-12">
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

        <div class="pt-3">
          <b-card no-body>
            <b-tabs pills card>
              <b-tab
                :title="$t('buyer')"
                :disabled="auction['buyer'].disabled"
                :active="auction['buyer'].active"
              >
                <b-card-text>
                  <InLineForm
                    :labelText="$t('input_buyer_placeholder')"
                    model="buyer"
                    :tabs="tabs"
                  />
                </b-card-text>
              </b-tab>
              <b-tab
                :title="$t('seller')"
                :disabled="auction['seller'].disabled"
                :active="auction['seller'].active"
              >
                <b-card-text>
                  <InLineForm
                    :labelText="$t('input_seller_placeholder')"
                    model="seller"
                    :tabs="tabs"
                  />
                </b-card-text>
              </b-tab>
            </b-tabs>
          </b-card>
        </div>
        <div class="pt-3">
          <b-button
            size="sm"
            class="float-right"
            variant="primary"
            @click="$router.push('/')"
          >
            Return to home
          </b-button>
        </div>
      </div>
    </div>
    <ResultModal
      :title="modal.title"
      :content="modal.content"
      :onFinish="resetApp"
      :weatherData="getWeatherData"
      :weatherError="weatherError"
      ref="resultModal"
    />
  </div>
</template>

<script>
import Vue from 'vue'
import { mapState, mapMutations } from 'vuex'
import InLineForm from './shared/InLineForm'
import ResultModal from './shared/Modal'
import { initialState } from '../store/store.model.js'
import { currencyFormatter } from '../tools/index.js'
import { appConfig } from '../../config.js'

export default {
  name: 'Auction',
  components: {
    InLineForm,
    ResultModal,
  },

  data: function() {
    return {
      tabs: ['buyer', 'seller'],
      modal: {
        title: '',
        content: '',
      },
      selectedLanguage: this.$store.state.curLanguage,
    }
  },
  computed: {
    ...mapState(['auction', 'weather', 'languages', 'weatherError']),
    getWeatherData(state) {
      const { name, main } = state.weather
      const tempUnit = appConfig.tempUnit
      return Object.keys(state.weather).length > 0
        ? {
            city: name ? name : '',
            temp: main ? main : '',
            tempUnit,
          }
        : null
    },
  },
  methods: {
    ...mapMutations(['changeActiveTab', 'initializeAppState']),
    showModal(modal) {
      this.$refs[modal].show()
    },
    resetApp() {
      this.initializeAppState(initialState.auction)
      this.changeActiveTab(this.tabs)
      this.$refs.resultModal.$refs['modal'].toggle('result-modal')
    },
  },
  watch: {
    selectedLanguage(newLang) {
      Vue.i18n.set(newLang)
      this.$store.commit('setLanguage', newLang)
    },
  },
  mounted() {
    this.$store.watch(
      this.$store.getters.getSuccess,
      n => {
        const { buyer, seller } = this.auction

        // Delete seTimeout method to get data whitout delay
        setTimeout(() => {
          this.$store.dispatch('getWeather')
        }, 3000)

        this.modal.content = `${this.$t('text_01')}: ${currencyFormatter.format(
          buyer.value
        )} ${this.$t('text_02')} ${currencyFormatter.format(
          seller.value
        )}. ${this.$t('text_03')} ${currencyFormatter.format(
          buyer.value - seller.value
        )}`

        if (n) {
          this.modal.title = `${this.$t('awared')}`
          return this.$refs.resultModal.$refs['modal'].show()
        }

        if (n === false) {
          this.modal.title = `${this.$t('lost')}`
          return this.$refs.resultModal.$refs['modal'].show()
        }

        return
      },
      { deep: true }
    )
  },
}
</script>
