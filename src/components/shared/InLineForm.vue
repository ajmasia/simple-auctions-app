<template>
  <div>
    <b-form class="p-3" @submit.stop.prevent>
      <div>
        <b-input
          class="mb-2"
          v-model="$v.value.$model"
          :id="model"
          :placeholder="labelText"
        ></b-input>
        <b-form-text id="password-help-block">
          {{ $t('input_description') }} {{ currency }}
        </b-form-text>
        <b-form-invalid-feedback id="input-2-live-feedback">
          {{ getValidateMessage }}
        </b-form-invalid-feedback>
      </div>
      <b-button
        class="btn-block mt-4"
        :disabled="$v.value.$invalid"
        variant="primary"
        v-on:click="onSave(model, tabs)"
      >
        {{ $t('save_button') }}
      </b-button>
    </b-form>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { required, decimal, minValue } from 'vuelidate/lib/validators'
import { appConfig } from '../../../config.js'
export default {
  name: 'InLineForm',
  data() {
    return {
      value: null,
      currency: appConfig.currency,
    }
  },
  props: {
    labelText: String,
    model: String,
    tabs: Array,
  },
  validations: {
    value: {
      required,
      decimal,
      minValue: minValue(0),
    },
  },
  computed: {
    ...mapState(['auction']),
    // eslint-disable-next-line vue/return-in-computed-property
    getValidateMessage() {
      if (this.$v.value.$error) {
        for (let key in this.$options.messages) {
          if (this.$v.value[key] === false) {
            return this.$options.messages[key]
          }
        }
      } else {
        return null
      }
    },
  },
  methods: {
    ...mapMutations(['changeActiveTab', 'setFormValue', 'setSuccess']),

    onSave(model, tabs) {
      console.log('**** ONSAVE')
      this.$v.value.$touch()
      if (this.$v.value.$invalid) {
        return
      }
      this.setFormValue({ value: this.value, model: this.model })
      if (model === 'seller') {
        const auctionResult =
          parseInt(this.auction.buyer.value, 10) >=
            parseInt(this.auction.seller.value, 10) &&
          this.auction.seller.value !== null
        console.log('**** ACTION_RESULT', auctionResult)
        this.setSuccess(auctionResult)
      } else {
        console.log('**** BUYER CLICK')
        this.changeActiveTab(tabs)
      }
      this.value = null
    },
  },
  messages: {
    required: 'This field is required',
    decimal: 'May only contain numbers',
    minValue: 'May only contain positive numbers',
  },
}
</script>
