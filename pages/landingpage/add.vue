<template>
  <LandingPageForms/>
</template>

<script>
  import LandingPageForms from '../../components/LandingPages/LandingPageForms'
  export default {
    components: {
      LandingPageForms
    },
    fetch ({store}) {
      store.commit('landingPages/setRecord', {}, {root: true})
      store.commit('landingPages/setAddMode', null, {root: true})
    }
  }
</script>

<style>

</style>
