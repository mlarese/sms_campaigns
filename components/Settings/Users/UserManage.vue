<!--eslint-disable-->
<template>
    <user-form/>
</template>

<script>
    import UserForm from './UserForm'
    import {mapState, mapActions} from 'vuex'

    export default {
        components: {
            UserForm
        },
        computed: {
            ...mapState('users', ['$record', 'record'])
        },
        methods: {
            ...mapActions('users', ['save'])
        }
    }
</script>

<style>

</style>
