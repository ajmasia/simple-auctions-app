<template>
  <div class="pt-5">
    <b-jumbotron
      header="Simple Auction App"
      lead="Playing with vue.js"
    ></b-jumbotron>
    <Auction />
  </div>
</template>

<script>
import Auction from '../components/Auction'
export default {
  name: 'home',
  components: {
    Auction,
  },
}
</script>
