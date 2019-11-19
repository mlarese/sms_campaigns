<template>
  <!--eslint-disable-->
    <v-container fluid grid-list-md class="pa-0">
        <v-toolbar dense class="elevation-0">
            <v-icon>assignment_ind</v-icon>
            <v-toolbar-title>{{title}}</v-toolbar-title>
        </v-toolbar>
        <v-card class="pa-4">
            <slot name="body">
            </slot>
        </v-card>
    </v-container>
</template>

<script>
  export default {
      name: 'WPanel',
      props: {
          title: {
              type: object,
              default: null
          }
      }
  }
</script>

<style scoped>

</style>
