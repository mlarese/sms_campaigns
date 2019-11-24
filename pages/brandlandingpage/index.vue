<template>
  <brand-landing-pages/>
</template>

<script>
  import BrandLandingPages from '../../components/BrandLandingPages/BrandLandingPageList'
  const root = {root: true}

  export default {
    components: {
        BrandLandingPages
    },
    fetch ({store}) {
      store.dispatch('brandLandingPages/load', {}, root)
    }
  }
</script>

<style>

</style>
