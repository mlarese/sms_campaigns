<!--eslint-disable-->
<template>

    <bad-word-form/>

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
