<!--eslint-disable-->
<template>
  <v-btn dark  :color="color"  small  class="elevation-0 grid-button" style="min-width:0; border-radius: 3px; height:32px; padding:6px 12px;" @click="$emit('click')">
    <v-icon small style="font-size: 18px !important;">{{ icon }}</v-icon>
  </v-btn>
</template>
<script>
  export default {
    props: {
      color: {default: 'teal', type:String},
      icon: {default: 'note', type:String}
    }
  }
</script>
