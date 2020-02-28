<template>
  <role-form />
</template>

<script>
  import RoleForm from './RoleForm'
  import {mapState, mapActions} from 'vuex'

  export default {
      components: {
          RoleForm
      },
      computed: {
          ...mapState('roles', ['$record', 'record'])
      },
        methods: {
          ...mapActions('roles', ['save']),
          onSave () {
            this.save({data: this.$record, id: this.$record.role_id})
              .then(r => {
                this.$router.push('role')
                return r
              })
          }
        }


  }
</script>

<style>

</style>
