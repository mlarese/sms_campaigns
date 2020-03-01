<template>
  <unpaired-list/>
</template>

<script>
  import UnpairedList  from '../../components/UnpairedProspects/UnpairedList'
  const root = {root: true}

  export default {
    components: {UnpairedList},
    async fetch ({store}) {
    }
  }
</script>

<style>

</style>
