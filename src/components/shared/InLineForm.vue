<template>
  <div>
    <b-form inline>
      <b-input
        :id="model"
        class="mb-2 mr-sm-2 mb-sm-0"
        :placeholder="labelText"
        v-model="auction[model].value"
      ></b-input>

      <b-button variant="primary" v-on:click="onSave(model, tabs)">
        Save
      </b-button>
    </b-form>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'InLineForm',
  props: {
    labelText: String,
    model: String,
    tabs: Array,
  },
  computed: {
    ...mapState(['auction']),
  },
  methods: {
    ...mapMutations(['changeTabState']),
    onSave(model, tabs) {
      this.changeTabState(tabs)
      if (model === 'seller') {
        parseInt(this.auction.buyer.value, 10) >=
        parseInt(this.auction.seller.value, 10)
          ? console.log('Sold item ')
          : console.log('Very low price')
      }
    },
  },
}
</script>
