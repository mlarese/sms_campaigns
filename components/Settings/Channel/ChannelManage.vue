<!--eslint-disable-->
<template>
    <v-flex container pa-0>
        <v-card>
            <channel-form/>
        </v-card>
    </v-flex>
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
