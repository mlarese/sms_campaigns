<template>
  <!--eslint-disable-->
    <v-layout pa-0 class="role-factory">
        <component :is="currentComponent"></component>
    </v-layout>
</template>

<script>
  import RoleManagements from './RoleManagement.vue'
  import RoleForm from './RoleForm'
  import {mapState} from 'vuex'
  export default {
    components: {RoleManagements, RoleForm},
    computed: {
      ...mapState('roles', ['mode']),
      currentComponent () {
        if (this.mode === 'edit') {
          return RoleManagements
        } else {
          return RoleForm
        }
      }
    }
  }
</script>

<style>

</style>
