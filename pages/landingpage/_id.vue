<template>
  <role-factory/>
</template>

<script>
  import {mapState} from 'vuex'
  import LandingPageForms from '../../components/LandingPages/LandingPageForms'

  export default {
    components: {LandingPageForms},
    async fetch ({store, params, query}) {
      const id = params.id

      store.commit('landingPages/setRecord',{},{root: true})
      store.commit('landingPages/setEditMode',null,{root: true})
      await store.dispatch('landingPages/load', {id: params.id}, {root: true})

    }
  }
</script>

<style>

</style>
