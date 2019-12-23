<template>
  <div>
    <div class="d-flex justify-content-center pt-5">
      <!-- Auction component -->
      <div class="col-md-8 col-lg-8 col-12" v-animate-css="'fadeIn'">
        <!-- Tabs -->
        <b-card no-body>
          <b-tabs pills card>
            <b-tab
              :title="$t('buyer')"
              :disabled="auction['buyer'].disabled"
              :active="auction['buyer'].active"
            >
              <b-card-text>
                <InLineForm :labelText="$t('input_buyer_placeholder')" model="buyer" :tabs="tabs" />
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
        <div class="pt-3">
          <b-button
            size="sm"
            class="float-right"
            variant="primary"
            @click="$router.push('/')"
          >{{$t('return-button')}}</b-button>
        </div>
      </div>
    </div>
    <!-- Modal -->
    <ResultModal
      :title="modalConfig.title"
      :content="modalConfig.content"
      :onFinish="resetApp"
      :weatherData="getWeatherData"
      :weatherError="weatherError"
      ref="result-modal"
    />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import InLineForm from './shared/InLineForm'
import ResultModal from './shared/Modal'
import { initialState } from '../store/store.model.js'
import { generateModal } from '../tools/auction.js'
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
      modalConfig: {
        title: '',
        content: '',
      },
    }
  },
  computed: {
    ...mapState(['auction', 'weather', 'languages', 'weatherError', 'success']),
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
    resetApp() {
      this.initializeAppState(initialState.auction)
      this.changeActiveTab(this.tabs)
      this.$refs['result-modal'].$refs['modal'].toggle('result-modal')
    },
  },
  mounted() {
    const auctionModal = this.$refs['result-modal'].$refs['modal']

    this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'setSuccess') {
        // Delete seTimeout method to get data whitout delay
        setTimeout(() => {
          this.$store.dispatch('getWeather')
        }, 3000)

        generateModal(state, auctionModal, this.modalConfig)

        return
      }
    })
  },
}
</script>
