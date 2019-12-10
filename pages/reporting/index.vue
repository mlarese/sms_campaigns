<template>
  <ReportingList/>
</template>

<script>
  import ReportingList  from '../../components/Reporting/ReportingList'
  const root = {root: true}

  export default {
    components: {ReportingList},
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
