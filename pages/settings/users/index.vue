<!--eslint-disable-->
<template>
        <user-list/>
</template>
<script>
    import UserList from '../../../components/Settings/Users/UserList'
    const root = {root: true}
    export default {
        components: {UserList},
        async fetch ({store}) {
            await store.dispatch('users/load', {}, root)
        },
        mounted () {
            let i = document.getElementById('image')
            console.dir(i)
        }
    }
</script>
