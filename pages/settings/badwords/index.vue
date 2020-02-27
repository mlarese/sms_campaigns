<!--eslint-disable-->
<template>
    <BadWords/>
</template>
<script>
  import BadWords from '../../../components/Settings/BadWords'
  const root = {root: true}
  export default {
    components: {BadWords},
    async fetch ({store}) {
      store.dispatch('badwords/load', {}, {root: true})
    }
  }
</script>
