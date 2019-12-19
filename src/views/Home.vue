<template>
  <div class="pt-5">
    <div class="col">
      <b-jumbotron
        header="Auction App"
        lead="A simple up to play with vue.js"
      ></b-jumbotron>
    </div>
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
