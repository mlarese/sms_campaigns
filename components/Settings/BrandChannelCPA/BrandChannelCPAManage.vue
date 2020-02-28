<!--eslint-disable-->
<template>
    <brand-channel-c-p-a-form/>
</template>

<script>
    import BrandChannelCPAForm from './BrandChannelCPAForm'
    import {mapState, mapActions} from 'vuex'

    export default {
        components: {
            BrandChannelCPAForm
        },
        computed: {
            ...mapState('brandChannelCPA', ['$record', 'record'])
        },
        methods: {
            ...mapActions('brandChannelCPA', ['save'])
        }
    }
</script>

<style>

</style>
