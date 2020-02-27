<!--eslint-disable-->
<template>
    <v-flex container pa-0>
        <v-card>
            <brand-channel-c-p-a-form/>
        </v-card>
    </v-flex>
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
