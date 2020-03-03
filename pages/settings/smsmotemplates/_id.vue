<!--eslint-disable-->
<template>
    <SMSMoTemplateForm/>
</template>

<script>
    import {mapActions, mapState, mapGetters} from 'vuex'
    import SMSMoTemplateForm from '../../../components/Settings/SMSMOTemplate/SMSMoTemplateForm'
    export default {
        components: {
            SMSMoTemplateForm
        },
        async fetch({store, params}) {
            store.commit('smsmotemplate/setRecord',{},{root: true})
            store.commit('smsmotemplate/setEditMode',null,{root: true})
            store.dispatch('brands/load', {}, {root: true})
            store.dispatch('smsmotemplate/loadBase', {}, {root: true})
            await store.dispatch('smsmotemplate/load', {id: params.id}, {root: true})
        }
    }
</script>
