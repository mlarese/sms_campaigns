<!--eslint-disable-->
<template>
    <BrandChannelCPA/>
</template>
<script>
  import BrandChannelCPA from '../../../components/Settings/BrandChannelCPA'
  export default {
    components: {BrandChannelCPA},
    async fetch ({store}) {
      store.dispatch('brandChannelCPA/load', {}, {root: true})
    }
  }
</script>
