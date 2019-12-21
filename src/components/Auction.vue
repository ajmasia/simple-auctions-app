<template>
  <div>
    <div class="d-flex justify-content-center pt-5">
      <div class="col-md-8 col-lg-6 col-12">
        <b-card no-body>
          <b-tabs pills card>
            <b-tab
              title="Buyer"
              :disabled="auction['buyer'].disabled"
              :active="auction['buyer'].active"
            >
              <b-card-text>
                <InLineForm labelText="Offer" model="buyer" :tabs="tabs" />
              </b-card-text>
            </b-tab>
            <b-tab
              title="Seller"
              :disabled="auction['seller'].disabled"
              :active="auction['seller'].active"
            >
              <b-card-text>
                <InLineForm
                  labelText="Minimun Offer"
                  model="seller"
                  :tabs="tabs"
                />
              </b-card-text>
            </b-tab>
          </b-tabs>
        </b-card>
      </div>
    </div>
    <ResultModal
      :title="modal.title"
      :content="modal.content"
      :onFinish="resetApp"
      ref="resultModal"
    />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import InLineForm from './shared/InLineForm'
import ResultModal from './shared/Modal'

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
    }
  },
  computed: {
    ...mapState(['auction']),
  },
  methods: {
    ...mapMutations(['changeActiveTab', 'initializeAppState']),
    showModal(modal) {
      this.$refs[modal].show()
    },
    resetApp() {
      console.log('**** APP RESET')
      this.initializeAppState()
      this.changeActiveTab(this.tabs)
      this.$refs.resultModal.$refs['modal'].toggle('result-modal')
    },
  },
  mounted() {
    this.$store.watch(
      this.$store.getters.getSuccess,
      n => {
        const { buyer, seller } = this.auction
        this.modal.content = `The buyer offer you: ${buyer.value} 
        and yor minimun acceptance price is ${seller.value}. 
        The difference is ${buyer.value - seller.value}`
        console.log('**** RESULT CHANGE', n)
        console.log('**** MODAL', this.$refs.resultModal.$refs['modal'])
        if (n) {
          this.modal.title = 'Success'
          this.$refs.resultModal.$refs['modal'].show('result-modal')
        }
        if (!n) {
          console.log('**** HERE')
          this.modal.title = 'Error'
          this.$refs.resultModal.$refs['modal'].show('result-modal')
        }
      },
      { deep: true }
    )
  },
}
</script>
