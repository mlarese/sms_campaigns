<!--eslint-disable-->
<template>
    <v-flex container pa-0>
        <v-card>
            <bad-word-form/>
        </v-card>
    </v-flex>
</template>

<script>
    import BadWordForm from './BadWordForm'
    import {mapState, mapActions} from 'vuex'

    export default {
        components: {
            BadWordForm
        },
        computed: {
            ...mapState('badwords', ['$record', 'record'])
        },
        methods: {
            ...mapActions('badwords', ['save'])
        }
    }
</script>

<style>

</style>
