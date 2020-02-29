<!--eslint-disable-->
<template>
    <SMSMoTemplates/>
</template>
<script>
  import SMSMoTemplates from '../../../components/Settings/SMSMoTemplates'
  export default {
    components: {SMSMoTemplates},
    async fetch ({store}) {
      store.dispatch('smsmotemplate/load', {}, {root: true})
    }
  }
</script>
