<template>
  <landing-pages/>
</template>

<script>
  import LandingPages from '../../components/LandingPages/LandingPageList'
  const root = {root: true}

  export default {
    components: {
        LandingPages
    },
    fetch ({store}) {
      store.dispatch('landingPages/load', {}, root)
    }
  }
</script>

<style>

</style>
