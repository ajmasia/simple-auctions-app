<template>
  <div>
    <b-card no-body>
      <b-tabs pills card>
        <b-tab
          title="Buyer"
          :disabled="parseDisabledValue('buyer')"
          :active="parseActiveValue('buyer')"
        >
          <b-card-text>
            <InLineForm labelText="Offer" model="buyer" :tabs="tabs" />
          </b-card-text>
        </b-tab>
        <b-tab
          title="Seller"
          :disabled="parseDisabledValue('seller')"
          :active="parseActiveValue('seller')"
        >
          <b-card-text>
            <InLineForm labelText="Minimun Offer" model="seller" :tabs="tabs" />
          </b-card-text>
        </b-tab>
      </b-tabs>
    </b-card>
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
    parseActiveValue() {
      return model => (this.auction[model].active ? 'active' : null)
    },
    parseDisabledValue() {
      return model => (this.auction[model].disabled ? 'disabled' : null)
    },
  },
  methods: {},
}
</script>
