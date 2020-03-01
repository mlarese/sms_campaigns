<!--eslint-disable-->
<template>
    <SMSMoTemplateForm title="Edit SMS Mo Template" />
</template>

<script>
    import {mapActions, mapState, mapGetters} from 'vuex'
    import SMSMoTemplateForm from '../../../components/Settings/SMSMoTemplate/SMSMoTemplateForm'
    export default {
        components: {
            SMSMoTemplateForm
        },
        async fetch({store, params}) {
            store.commit('smsmotemplate/setRecord',{},{root: true})
            store.commit('smsmotemplate/setEditMode',null,{root: true})
            await store.dispatch('smsmotemplate/load', {id: params.id}, {root: true})
        }
    }
</script>
