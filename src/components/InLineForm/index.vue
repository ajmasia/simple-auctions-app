<template>
  <div>
    <b-form class="p-3" @submit.stop.prevent>
      <div>
        <b-input
          class="mb-2"
          v-model="$v.value.$model"
          :id="model"
          :placeholder="labelText"
          :state="$v.value.$dirty ? !$v.value.$error : null"
        ></b-input>
        <b-form-text v-if="!getValidateMessage" id="password-help-block">
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
import Vue from 'vue'
import { mapState, mapMutations } from 'vuex'
import { required, decimal, minValue } from 'vuelidate/lib/validators'
import { appConfig } from '../../../config.js'
import { checkAuction } from './model'
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
      minValue: minValue(1),
    },
  },
  computed: {
    ...mapState(['auction']),
    // eslint-disable-next-line vue/return-in-computed-property
    getValidateMessage() {
      if (this.$v.value.$error) {
        for (let key in this.$options.messages) {
          if (this.$v.value[key] === false) {
            return Vue.i18n.translate(key)
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
      this.$v.value.$touch()
      if (this.$v.value.$invalid) {
        return
      }

      this.setFormValue({ value: this.value, model: this.model })
      const { buyer, seller } = this.auction
      if (model === 'seller') {
        const auctionResult = checkAuction(buyer.value, seller.value)
        this.setSuccess(auctionResult)
      } else {
        this.changeActiveTab(tabs)
      }
      this.value = null
      this.$v.$reset()
    },
  },
  messages: {
    required,
    decimal,
    minValue,
  },
}
</script>
