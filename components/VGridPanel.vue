<template>
  <div>
    <v-card>
      <v-toolbar
        dense
        class="elevation-0">
        <v-icon>list</v-icon>
        <v-toolbar-title>
          {{ title }}
        </v-toolbar-title>
        <slot name="top-left-buttons"/>
        <v-spacer/>
        <slot name="top-right-buttons"/>
      </v-toolbar>
      <v-layout class="align-baseline">
        <slot name="filter"/>
      </v-layout>
      <slot name="body"/>
    </v-card>
    <v-layout>
      <slot name="left-buttons"/>
      <v-spacer/>
      <slot name="right-buttons"/>
    </v-layout>
  </div>
</template>

<script>
  export default {
    props: {
        title: {
            type: object,
            default: title
        }
    }
  }
</script>

<style scoped>

</style>
