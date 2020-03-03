<template>
  <SMSMoTemplateForm/>
</template>

<script>
  import SMSMoTemplateForm from '../../../components/Settings/SMSMOTemplate/SMSMoTemplateForm'
  export default {
    components: {
      SMSMoTemplateForm
    },
    fetch ({store}) {
      store.commit('smsmotemplate/setRecord', {}, {root: true})
      store.commit('smsmotemplate/setAddMode', null, {root: true})
      store.dispatch('brands/load', {}, {root: true})
      store.dispatch('smsmotemplate/loadBase', {}, {root: true})
    }
  }
</script>

<style>

</style>
