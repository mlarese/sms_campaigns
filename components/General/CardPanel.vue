<!--eslint-disable-->
<template>
    <v-card slot="container-top" class="elevation-0 pa-1" style="background:#f5f5f5;border:1px solid #ddd;border-bottom:0 !important">
        <v-container grid-list-md px-0 pt-1 pb-1 style="min-height:30px !important;">
        <slot>

        </slot>
        </v-container>
    </v-card>
</template>
<script>
  export default {
    name: 'CardPanel'
  }
</script>
