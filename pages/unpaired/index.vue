<template>
  <unpaired-list/>
</template>

<script>
  import UnpairedList  from '../../components/UnpairedProspects/UnpairedList'
  const root = {root: true}

  export default {
    components: {UnpairedList},
    async fetch ({store}) {
      store.dispatch('brands/load', {}, {root: true})
    }
  }
</script>

<style>

</style>
