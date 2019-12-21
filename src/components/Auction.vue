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
      errorModal: false,
      successModal: false,
      modal: {
        title: 'AAAA',
        content: 'AAAA',
      },
    }
  },
  computed: {
    ...mapState(['auction']),
  },
  methods: {
    ...mapMutations(['setSuccess']),
    showModal(modal) {
      this.$refs[modal].show()
    },
  },
  mounted() {
    this.$store.watch(
      this.$store.getters.getSuccess,
      n => {
        console.log(n)
        if (n) {
          this.modal.title = 'Success'
          this.modal.content = '<b>You win the auction!</b>'
          this.$refs.resultModal.$refs['modal'].show()
        }
        if (!n) {
          this.modal.title = 'Error'
          this.modal.content = 'You win the auction!'
          this.$refs.resultModal.$refs['modal'].show()
        }
        // this.setSuccess(null)
      },
      { deep: true }
    )
  },
}
</script>
