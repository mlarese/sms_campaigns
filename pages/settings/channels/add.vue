<template>
  <channel-manage/>
</template>

<script>
  import ChannelManage from '../../../components/Settings/Channel/ChannelManage'
  export default {
    components: {
        ChannelManage
    },
    fetch ({store}) {
      store.commit('channels/setRecord', {}, {root: true})
      store.commit('channels/setAddMode', null, {root: true})
    }
  }
</script>

<style>

</style>
