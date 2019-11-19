<template>
  <!--eslint-disable-->
  <v-app dark>
    <notifications position="top right" style="margin-top:50px"/>

    <v-toolbar   tabs class="elevation-1 app-toolbar ma-0" >

      <v-tabs
              class="ma-0"
              slot="extension"
              v-model="ui.currentMenuItem"
              slider-color="black"

              show-arrows
      >
        <v-tabs-slider color="blue"></v-tabs-slider>
        <v-tab v-for="(item, i) in menuItems" :key="i"  :to="'/'+item.to" >
          {{ $t(item.label) }}
        </v-tab>
      </v-tabs>

      <a class="default-navbar-brand" href="/"><b>V</b>ertical <b>C</b>ontent <b>S</b>ervice <b>P</b>rovider GTW</a>

      <v-spacer></v-spacer>

      <span v-if="$vuetify.breakpoint.smAndUp">{{user}}</span>

      <v-btn  flat @click="onLogOut" class="py-2 pl-2 pr-0" :fab="$vuetify.breakpoint.xsOnly" :small="$vuetify.breakpoint.xsOnly">
          <span v-if="$vuetify.breakpoint.smAndUp" class="mr-2">
          {{$t('Logout')}}
          </span>
        <v-icon class="ml-1" small>exit_to_app</v-icon>
      </v-btn>

    </v-toolbar>

    <v-content  >
      <v-container fluid  class="px-1">
        <nuxt />
      </v-container>
    </v-content>

  </v-app>
</template>

<script>
  import {mapGetters, mapState, mapActions} from 'vuex'
  export default {
      props: {
          name: {default: 'courage',
              type: object}
      },
    data () {
      return {
        tab: null
      }
    },
      computed: {
          ...mapState('app', ['ui']),
          ...mapState('auth', ['user']),
          ...mapGetters('app', ['menuItems'])
      },
    watch: {
      'notification.id' (val) {
        this.$notify(this.notification)
      }
    },

    methods: {
      ...mapActions('auth', ['logout']),
      onLogOut () {
        this.logout()
      }
    },

  }
</script>

<style lang="scss">
  .primary--text {
    color: silver !important;
    caret-color: silver !important;
  }

  .error--text {
    color: #ff8517 !important;
    caret-color: white !important;
  }


  .app-toolbar {
    .v-toolbar__extension {
      padding: 0;
    }
  }

  .default-navbar-brand {
    color: white;
    font-size: 22px;
  }
  .v-tabs__div, .tabs__div {
    text-transform: none;
  }
  .btn {
    text-transform: none;
  }
</style>
