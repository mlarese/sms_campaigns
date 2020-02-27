<template>
  <brand-channel-c-p-a-manage/>
</template>

<script>
  import BrandChannelCPAManage from '../../../components/Settings/BrandChannelCPA/BrandChannelCPAManage'
  export default {
    components: {
        BrandChannelCPAManage
    },
    fetch ({store}) {
      store.commit('brandChannelCPA/setRecord', {}, {root: true})
      store.commit('brandChannelCPA/setAddMode', null, {root: true})
    }
  }
</script>

<style>

</style>
