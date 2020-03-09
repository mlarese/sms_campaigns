<template>
  <landing-pages/>
</template>

<script>
  import LandingPages from '../../components/LandingPages/LandingPagesList'
  const root = {root: true}

  export default {
    components: {
        LandingPages
    },
    fetch ({store}) {
      store.dispatch('brands/load', {}, root)
      store.dispatch('landingPages/load', {}, root)
    }
  }
</script>

<style>

</style>
