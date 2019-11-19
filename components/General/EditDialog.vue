<template>
  <v-dialog
    :value="dialog"
    :max-width="maxWidth"
    :fullscreen="$vuetify.breakpoint.xsOnly"
    lazy
    persistent
    class="edit-dialog">

    <v-btn
      slot="activator"
      small
      dark
      top
      right
      fab
      class="elevation-0"
      color="red"
      @click="$emit('on-add')">
      <v-icon>add</v-icon>
    </v-btn>

    <v-card>
      <component :is="form" />

      <v-footer>
        <v-spacer/>
        <v-btn
          v-if="isSaveVisible"
          active-class=""
          flat
          small
          @click="$emit('on-save')">{{ $t('Save') }}</v-btn>
        <v-btn
          active-class=""
          flat
          small
          @click="$emit('on-close')">{{ $t('Close') }}</v-btn>

      </v-footer>
    </v-card>
  </v-dialog>
</template>
<script>
  export default {
      name: 'EditDialog',
      props: {
          form: {
              type: Object,
              default: null
          }, dialog: {
              type: Boolean,
              default: null
          }, isSaveVisible: {
              type: boolean,
              default: true
          }, //maxWidth: {default: '75%'}}
      }
  }
</script>
