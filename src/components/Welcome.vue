<template>
  <div class="d-flex justify-content-center pt-5">
    <div class="col-md-8 col-lg-8 col-12" v-animate-css="'fadeIn'">
      <h2>{{$t('wellcome_title')}}</h2>
      <h5>{{$t('wellcome_subtitle')}}</h5>
      <p>{{$t('wellcome_text_01')}}</p>
      <p>{{$t('wellcome_text_02')}}</p>
      <b-button
        size="sm"
        class="float-right"
        variant="primary"
        @click="$router.push('app')"
      >{{$t('enyoy-button')}}</b-button>
    </div>
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
