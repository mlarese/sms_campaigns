<template>
  <user-manage/>
</template>

<script>
  import UserManage from '../../../components/Settings/Users/UserManage'
  export default {
    components: {
        UserManage
    },
    fetch ({store}) {
      store.commit('users/setRecord', {}, {root: true})
      store.commit('users/setAddMode', null, {root: true})
    }
  }
</script>

<style>

</style>
