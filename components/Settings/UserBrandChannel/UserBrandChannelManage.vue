<!--eslint-disable-->
<template>
    <user-brand-channel-form/>
</template>

<script>
    import UserBrandChannelForm from './UserBrandChannelForm'
    import {mapState, mapActions} from 'vuex'

    export default {
        components: {
            UserBrandChannelForm
        },
        computed: {
            ...mapState('usersBrandsChannels', ['$record', 'record'])
        },
        methods: {
            ...mapActions('usersBrandsChannels', ['save'])
        }
    }
</script>

<style>

</style>
