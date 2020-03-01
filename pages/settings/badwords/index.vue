<!--eslint-disable-->
<template>
    <BadWords/>
</template>
<script>
  import BadWords from '../../../components/Settings/BadWord/BadWords'
  const root = {root: true}
  export default {
    components: {BadWords},
    async fetch ({store}) {
      await store.dispatch('badwords/load', {}, {root: true})
    }
  }
</script>
