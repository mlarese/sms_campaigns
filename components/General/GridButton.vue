<!--eslint-disable-->
<template>
  <v-btn :dark="dark"  :color="color"  small  class="elevation-0 grid-button mx-2" style="border:1px solid #ddd !important;min-width:0; border-radius: 3px; height:32px; padding:6px 12px;" @click="$emit('click')">
    <v-icon small style="font-size: 18px !important;">{{ icon }}</v-icon>
  </v-btn>
</template>
<script>
  export default {
    props: {
      dark: {default: true, type:Boolean},
      color: {default: 'teal', type:String},
      icon: {default: 'note', type:String}
    }
  }
</script>
