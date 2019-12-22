<template>
  <div class="pt-5 ">
    <div class="text-center">
      <h1>{{ $t('appTitle') }}</h1>
      {{ $t('appSubtitle') }}
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
