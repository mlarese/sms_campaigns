<template>
  <unpaired-list/>
</template>

<script>
  import UnpairedList  from '../../components/UnpairedProspects/UnpairedList'
  const root = {root: true}

  export default {
    components: {UnpairedList},
    async fetch ({store}) {
      let all = [
        store.dispatch('brands/load', {}, root),
        store.dispatch('channels/load', {}, root),
        store.dispatch('locations/load', {}, root),
        store.dispatch('advformats/load', {}, root)
      ]

      await Promise.all(all)
    }
  }
</script>

<style>

</style>
