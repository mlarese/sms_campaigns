<!--eslint-disable-->
<template>
    <s-m-s-mo-template/>
</template>
<script>
    import SMSMoTemplate from '../../../components/Settings/SMSMoTemplate/SMSMoTemplates'
    export default {
        components: {SMSMoTemplate},
        async fetch ({store}) {
            store.dispatch('smsmotemplate/load', {}, {root: true})
        }
    }
</script>
