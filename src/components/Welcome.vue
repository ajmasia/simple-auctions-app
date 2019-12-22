<template>
  <div class="pt-5">
    <h2>Welcome to the app</h2>
    <p>
      This is a simple auction project to play with vue.js.
    </p>
    <p>
      As a buyer, you have to enter the maximum price you are willing to pay for
      a product. As a seller, you have to enter the minimum price for which you
      are willing to sell the product. Finally, the app will show you the resuly
      in a simple popup.
    </p>
    <b-button
      size="sm"
      class="float-right"
      variant="primary"
      @click="$router.push('app')"
    >
      Enyoy
    </b-button>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'welcome',
  computed: {
    ...mapState(['auction']),
  },
}
</script>
