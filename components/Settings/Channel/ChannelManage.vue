<!--eslint-disable-->
<template>

    <channel-form/>

</template>

<script>
    import ChannelForm from './ChannelForm'
    import {mapState, mapActions} from 'vuex'

    export default {
        components: {
            ChannelForm
        },
        computed: {
            ...mapState('channels', ['$record', 'record'])
        },
        methods: {
            ...mapActions('channels', ['save'])
        }
    }
</script>

<style>

</style>
