<template>
  <!--eslint-disable-->
  <v-app id="inspire" class="transparent">
    <notifications position="top right" style="margin-top:50px"/>
    <v-content class="back-city">
      <v-container fluid fill-height class="transparent">
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
      computed: {
          ...mapState('app', ['title']),
          ...mapState('api', ['notification'])
      },
    watch: {
      'notification.id' (val) {
        this.$notify(this.notification)
      }
    },
  }
</script>

<style>
</style>
