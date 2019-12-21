<template>
  <b-modal id="modal-center" centered :title="title" ref="modal">
    <p class="my-4">{{ content }}</p>
  </b-modal>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    title: String,
    content: String,
  },

  created() {
    console.log(this.title, this.content)
  },
}
</script>
