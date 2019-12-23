<template>
  <div class="d-flex justify-content-center pt-3">
    <div class="col-md-8 col-lg-8 col-12">
      <h1>{{ $t('appTitle') }}</h1>
      {{ $t('appSubtitle') }}
      <div class="pt-3">
        <LangSelector />
      </div>
    </div>
  </div>
</template>

<script>
import LangSelector from './LangSelector'
export default {
  name: 'app-header',
  components: {
    LangSelector,
  },
}
</script>
