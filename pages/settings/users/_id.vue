<!--eslint-disable-->
<template>
    <user-form title="Edit User Form" />
</template>

<script>
    import {mapActions, mapState, mapGetters} from 'vuex'
    import UserForm from '../../../components/Settings/Users/UserForm'
    export default {
        components: {
            UserForm
        },
        async fetch({store, params}) {
            store.commit('users/setRecord',{},{root: true})
            store.commit('users/setEditMode',null,{root: true})
            store.dispatch('roles/load', {}, {root: true})
            await store.dispatch('users/load', {id: params.id}, {root: true})

        }
    }
</script>
