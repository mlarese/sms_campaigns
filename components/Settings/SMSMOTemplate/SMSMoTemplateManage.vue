<!--eslint-disable-->
<template>
    <s-m-s-mo-template-form/>
</template>

<script>
    import SMSMoTemplateForm from './SMSMoTemplateForm'
    import {mapState, mapActions} from 'vuex'

    export default {
        components: {
            SMSMoTemplateForm
        },
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
