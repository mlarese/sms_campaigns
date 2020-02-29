<!--eslint-disable-->
<template>
    <Brands/>
</template>
<script>
  import Brands from '../../../components/Settings/Brand/Brands'
  export default {
      components: {Brands},
      async fetch ({store}) {
        store.dispatch('brands/load', {}, {root: true})
      }
  }
</script>
