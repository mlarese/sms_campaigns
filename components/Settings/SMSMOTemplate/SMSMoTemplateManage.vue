<!--eslint-disable-->
<template>
    <div></div>
</template>

<script>
    import {mapState, mapActions} from 'vuex'

    export default {
        computed: {
            ...mapState('smsmotemplate', ['$record', 'record'])
        },
        methods: {
            ...mapActions('smsmotemplate', ['save'])
        }
    }
</script>

<style>

</style>
