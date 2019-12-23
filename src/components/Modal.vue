<template>
  <b-modal
    id="result-modal"
    :title="title"
    ref="modal"
    no-close-on-backdrop
    no-close-on-esc
    hide-header-close
  >
    <p class="my-4">{{ content }}</p>
    <template v-slot:modal-footer>
      <div class="w-100">
        <b-spinner
          small
          type="grow"
          label="Spinning"
          v-if="weatherData === null && weatherError === null"
        ></b-spinner>
        <p
          class="float-left mb-0"
          v-if="weatherError === null && weatherData !== null"
        >
          {{ $t('temp_message') }} {{ weatherData.city }}:
          {{ weatherData.temp ? weatherData.temp.temp : '' }}
          {{ weatherData.tempUnit }}
        </p>
        <p class="float-left" v-if="weatherError !== null">
          {{ weatherError }}
        </p>
        <b-button
          size="sm"
          class="float-right"
          variant="primary"
          @click="onFinish"
        >
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
    weatherError: String,
  },
}
</script>
