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
  </div>
</template>

<script>
import { mapState } from 'vuex'
import InLineForm from './shared/InLineForm'

export default {
  name: 'Auction',
  components: {
    InLineForm,
  },
  data: function() {
    return {
      tabs: ['buyer', 'seller'],
    }
  },
  computed: {
    ...mapState(['auction']),
  },
  methods: {},
}
</script>
