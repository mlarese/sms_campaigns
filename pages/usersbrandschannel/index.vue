<template>
  <user-brand-channels/>
</template>

<script>
  import UserBrandChannels from '../../components/UserBrandChannels/UserBrandChannelList'
  const root = {root: true}

  export default {
    components: {
        UserBrandChannels
    },
    fetch ({store}) {
      store.dispatch('usersBrandsChannels/load', {}, root)
    }
  }
</script>

<style>

</style>
