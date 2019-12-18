<template>
  <user-list/>
</template>

<script>
  import UserList from '../../../components/Users/UserList'
  const root = {root: true}

  export default {
    components: {UserList},
    fetch ({store}) {
      store.dispatch('users/load', {}, root)
    }
  }
</script>

<style>

</style>
