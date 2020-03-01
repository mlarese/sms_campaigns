<template>
  <s-m-s-mo-template-manage/>
</template>

<script>
  import SMSMoTemplateManage from '../../../components/Settings/SMSMOTemplate/SMSMoTemplateManage'
  export default {
    components: {
        SMSMoTemplateManage
    },
    fetch ({store}) {
      store.commit('smsmotemplate/setRecord', {}, {root: true})
      store.commit('smsmotemplate/setAddMode', null, {root: true})
    }
  }
</script>

<style>

</style>
