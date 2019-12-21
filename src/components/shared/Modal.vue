<template>
  <b-modal
    id="result-modal"
    centered
    :title="title"
    ref="modal"
    no-close-on-backdrop
    no-close-on-esc
    hide-header-close
  >
    <p class="my-4">{{ content }}</p>
    <template v-slot:modal-footer>
      <div class="w-100">
        <p class="float-left">
          Temperature in {{ weatherData.city }}: {{ weatherData.temp.temp }}
          {{ weatherData.tempUnit }}
        </p>
        <b-button size="sm" class="float-right" @click="onFinish">
          Finish
        </b-button>
      </div>
    </template>
  </b-modal>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    title: String,
    content: String,
    onFinish: Function,
    weatherData: Object,
  },
}
</script>
