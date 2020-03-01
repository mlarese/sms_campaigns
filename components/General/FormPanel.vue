<!--eslint-disable-->
<template>
    <v-container fluid>
        <v-toolbar dense class="elevation-0 pl-0 mb-3"  color="white" style="font-size:36px !important;border-bottom: 1px solid #dddddd !important">
            <v-toolbar-side-icon></v-toolbar-side-icon>
            <slot name="header-left">

                <v-toolbar-title class="display-5" style="font-size:32px !important;">{{ $vuetify.t(title) }}</v-toolbar-title>
            </slot>

            <v-spacer/>
            <slot name="header-right">

            </slot>
        </v-toolbar>

        <v-card slot="container-top" class="elevation-0 pa-1 form-panel-container-top" style="background:#f5f5f5;border:1px solid #ddd;border-bottom:0 !important">
            <v-container fluid grid-list-md>
            <slot>

            </slot>
            </v-container>
        </v-card>

        <v-layout row wrap class="mt-2">
            <v-flex xs12>
                <v-progress-linear v-if="isAjax" :indeterminate="true"></v-progress-linear>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
  import {mapState} from 'vuex'
  export default {
    name: 'FormPanel',
    props: {
      title: {type: String, default: ''}
    },
    computed: {
      ...mapState('api', ['isAjax'])
    }
  }
</script>
