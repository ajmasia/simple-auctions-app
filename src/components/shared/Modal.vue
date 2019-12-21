<template>
  <b-modal id="result-modal" centered :title="title" ref="modal" hide-footer>
    <p class="my-4">{{ content }}</p>
    <b-button block @click="onFinish">Finish</b-button>
  </b-modal>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    title: String,
    content: String,
    onFinish: Function,
  },
}
</script>
