<template>
  <BadWordForm/>
</template>

<script>
  import BadWordForm from '../../../components/Settings/BadWord/BadWordForm'
  export default {
    components: {
      BadWordForm
    },
    fetch ({store}) {
      store.commit('badwords/setRecord', {}, {root: true})
      store.commit('badwords/setAddMode', null, {root: true})
    }
  }
</script>

<style>

</style>
