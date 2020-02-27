<template>
  <brand-manage/>
</template>

<script>
  import BrandManage from '../../../components/Settings/Brand/BrandManage'
  export default {
    components: {
        BrandManage
    },
    fetch ({store}) {
      store.commit('brands/setRecord', {}, {root: true})
      store.commit('brands/setAddMode', null, {root: true})
    }
  }
</script>

<style>

</style>
