<template>
  <!--eslint-disable-->
    <v-app>
        <notifications position="top right" style="margin-top:50px"/>

        <v-toolbar  dark tabs class="elevation-1 app-toolbar ma-0" >

            <v-layout slots="extension">

                <v-flex class="pt-3">
                    <a class="default-navbar-brand" href="/"><b>Compaigns</b></a>

                </v-flex>
                <v-flex>

                    <v-tabs
                        class="ma-0"

                        v-model="ui.currentMenuItem"
                        slider-color="yellow"
                        show-arrows
                >
                    <v-tabs-slider class="mb-2" color="yellow"></v-tabs-slider>
                    <v-tab v-for="(item, i) in menuItems" :key="i"  :to="'/'+item.to" >
                        {{ $vuetify.t(item.label) }}
                    </v-tab>
                </v-tabs>

                </v-flex>


                <v-flex class="text-xs-right">
                    <span v-if="$vuetify.breakpoint.smAndUp">user</span>

                    <v-btn flat @click="onLogOut" class="py-2 pl-2 pr-0" :fab="$vuetify.breakpoint.xsOnly"
                           :small="$vuetify.breakpoint.xsOnly">
                      <span v-if="$vuetify.breakpoint.smAndUp" class="mr-2">
                      {{$vuetify.t('Logout')}}
                      </span>
                        <v-icon class="ml-1" small>exit_to_app</v-icon>
                    </v-btn>
                </v-flex>
            </v-layout>
        </v-toolbar>
            <v-container fluid  class="px-1">
                <nuxt />
            </v-container>

    </v-app>
</template>

<script>
  import {mapState, mapGetters} from 'vuex'
  export default {
    computed: {
      ...mapState('app', ['title', 'ui']),
      ...mapState('api', ['notification']),
      ...mapGetters('app', ['menuItems', 'role'])
    },
    watch: {
      'notification.id'(val) {
        this.$notify(this.notification)
      }
    },
    methods: {
      onLogOut () {

      }
    }
  }

</script>

<style>
    .v-input__slot {
        border: 1px solid #d1d1d1;
        border-radius:4px;
        padding-left: 4px;
    }

    .v-table tr{
        background-color: white;
    }

    .v-table td{
        border: 1px #dddddd solid;
        color:#333 !important;
        font-size:14px !important;
        text-align: center;
    }

    table.v-table thead tr {
        height: 40px;
    }

    .v-text-field > .v-input__control > .v-input__slot:before {
        border-style: solid;
        border-width: 0 0 0 0;
    }

    .v-table tbody tr:nth-of-type(odd) {
        background-color: #f9f9f9;
    }
    .v-table th.column {
        background: antiquewhite;
        border: 1px #dddddd solid;

        text-align: center !important;
        font-weight: bold !important;
        color:#333 !important;
        font-size:14px !important;
    }
    .theme--light.v-table thead tr:first-child{
        border: 0;
    }

    .theme--dark.v-tabs__bar {
        background-color: transparent;
    }

    .theme--light.application {
        background: white;
        color: rgba(0,0,0,1);
    }

    .v-tabs__div, .v-btn{
        text-transform: none !important;
    }

    .v-input__slot{
        background: white;
    }

    .v-text-field {
        margin-top: 0px;
        padding-top: 0px;
    }

    .mx-datepicker-range {
        width: 100%;
    }

</style>
