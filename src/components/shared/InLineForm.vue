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
        Save
      </b-button>
    </b-form>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { required, decimal, minValue } from 'vuelidate/lib/validators'

export default {
  name: 'InLineForm',
  data() {
    return {
      value: null,
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
        this.setSuccess(auctionResult)
      } else {
        this.changeActiveTab(tabs)
      }
    },
  },
  messages: {
    required: 'This field is required',
    decimal: 'May only contain numbers',
    minValue: 'May only contain positive numbers',
  },
}
</script>
