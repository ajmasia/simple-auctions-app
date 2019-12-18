<template>
  <div>
    <b-card no-body>
      <b-tabs pills card>
        <b-tab title="Buyer" active>
          <b-card-text><InLineForm labelText="Offer" /></b-card-text>
        </b-tab>
        <b-tab title="Seller">
          <b-card-text><InLineForm labelText="Minimun Offer" /></b-card-text>
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
import InLineForm from './shared/InLineForm'
export default {
  name: 'Auction',
  components: {
    InLineForm,
  },
}
</script>
