<template>
  <LeadsList/>
</template>

<script>
  import LeadsList  from '../../components/Leads/LeadsList'
  const root = {root: true}

  export default {
    components: {LeadsList},
    async fetch ({store}) {
      let all = [
        store.dispatch('brands/load', {}, root)
      ]

      await Promise.all(all)
    }
  }
</script>
