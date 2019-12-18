<template>
  <div>
    <b-form inline>
      <b-input
        id="inline-form-input-name"
        class="mb-2 mr-sm-2 mb-sm-0"
        v-bind:placeholder="labelText"
      ></b-input>

      <b-button variant="primary">Save</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'InLineForm',
  props: {
    labelText: String,
  },
}
</script>
