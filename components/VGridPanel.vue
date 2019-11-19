<template>
  <!--eslint-disable-->
    <div>
        <v-card>
            <v-toolbar dense class="elevation-0">
                <v-icon>list</v-icon>
                <v-toolbar-title>
                    {{title}}
                </v-toolbar-title>
                <slot name="top-left-buttons"></slot>
                <v-spacer></v-spacer>
                <slot name="top-right-buttons"></slot>
            </v-toolbar>
            <v-layout class="align-baseline">
               <slot name="filter"></slot>
            </v-layout>
            <slot name="body">
            </slot>
        </v-card>
        <v-layout>
            <slot name="left-buttons"></slot>
            <v-spacer></v-spacer>
            <slot name="right-buttons"></slot>
        </v-layout>
    </div>
</template>

<script>
  export default {
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
