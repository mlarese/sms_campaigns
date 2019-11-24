<template>
  <!--eslint-disable-->
    <v-app dark>
        <notifications position="top right" style="margin-top:50px"/>

        <v-toolbar   tabs class="elevation-1 app-toolbar ma-0" >


            <a class="default-navbar-brand" href="/"><b>S</b>M<b>S</b> <b>Compaigns</b></a>

            <v-spacer></v-spacer>

            <span v-if="$vuetify.breakpoint.smAndUp">{{user}}</span>

            <v-btn  flat @click="onLogOut" class="py-2 pl-2 pr-0" :fab="$vuetify.breakpoint.xsOnly" :small="$vuetify.breakpoint.xsOnly">
          <span v-if="$vuetify.breakpoint.smAndUp" class="mr-2">
          {{$vuetify.t('Logout')}}
          </span>
                <v-icon class="ml-1" small>exit_to_app</v-icon>
            </v-btn>

        </v-toolbar>
            <v-container fluid  class="px-1">
                <nuxt />
            </v-container>

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
