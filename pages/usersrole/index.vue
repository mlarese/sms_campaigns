<template>
  <user-roles/>
</template>

<script>
  import UserRoles from '../../components/UserRoles/UserRoleList'
  const root = {root: true}

  export default {
    components: {
        UserRoles
    },
    fetch ({store}) {
      store.dispatch('usersRoles/load', {}, root)
    }
  }
</script>

<style>

</style>
