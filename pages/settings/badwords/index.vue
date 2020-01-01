<!--eslint-disable-->
<template>
    <div>
Bad Words

        <input type="file" id="image">
        <bad-words/>
    </div>
</template>
<script>
  import BadWords from '../../../components/Settings/BadWords'
  const root = {root: true}
  export default {
    components: {BadWords},
    mounted () {
      let i = document.getElementById('image')
      console.dir(i)
    },fetch ({store}) {
          store.dispatch('badwords/load', {}, root)
      }
  }
</script>
