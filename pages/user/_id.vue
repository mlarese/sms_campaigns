<template>
  <role-factory/>
</template>

<script>
  import {mapState} from 'vuex'
  import RoleFactory from '../../components/Roles/RoleFactory'
  const module = 'roles'
  const root = {root: true}

  export default {
    components: {RoleFactory},
      computed: {
          ...mapState(module, ['$record'])
      },
    fetch ({store, params, query}) {
      const id = params.id

      store.commit('users/setEditMode', null, root)
      store.dispatch('roles/load', {}, root)
      store.dispatch('users/load', {id}, root)
    }
  }
</script>

<style>

</style>
