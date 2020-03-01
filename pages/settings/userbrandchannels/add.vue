<template>
  <user-brand-channel-manage/>
</template>

<script>
  import UserBrandChannelManage from '../../../components/Settings/UserBrandChannel/UserBrandChannelManage'
  export default {
    components: {
        UserBrandChannelManage
    },
    fetch ({store}) {
      store.commit('usersBrandsChannels/setRecord', {}, {root: true})
      store.commit('usersBrandsChannels/setAddMode', null, {root: true})
    }
  }
</script>

<style>

</style>
