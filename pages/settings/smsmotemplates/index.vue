<!--eslint-disable-->
<template>
    <SMSMoTemplates/>
</template>
<script>
  import SMSMoTemplates from '../../../components/Settings/SMSMOTemplate/SMSMoTemplates'
  export default {
    components: {SMSMoTemplates},
    fetch ({store}) {
      store.dispatch('smsmotemplate/load', {}, {root: true})
    }
  }
</script>
