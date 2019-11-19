<template>
  <role-list/>
</template>

<script>
  import RoleList from '../../components/Roles/RoleList'
  const root = {root: true}

  export default {
    components: {
        RoleList
    },
    fetch ({store}) {
      store.dispatch('roles/load', {}, root)
    }
  }
</script>

<style>

</style>
