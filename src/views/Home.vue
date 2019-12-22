<template>
  <div class="pt-5">
    <div class="col">
      <b-jumbotron
        :header="$t('appTitle')"
        :lead="$t('appSubtitle')"
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
