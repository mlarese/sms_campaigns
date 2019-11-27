<template>
    <v-dialog :value="dialog" :max-width="maxWidth" lazy persistent class="edit-dialog" :fullscreen="$vuetify.breakpoint.xsOnly">

        <v-btn slot="activator" small dark top right fab class="elevation-0" color="red" @click="$emit('on-add')">
            <v-icon>add</v-icon>
        </v-btn>

        <v-card>
            <component :is="form" />

            <v-footer>
                <v-spacer></v-spacer>
                <v-btn activeClass=""  v-if="isSaveVisible" flat small @click="$emit('on-save')">{{$t('Save')}}</v-btn>
                <v-btn activeClass="" flat small @click="$emit('on-close')">{{$t('Close')}}</v-btn>

            </v-footer>
        </v-card>
    </v-dialog>
</template>
<script>
  export default {
    name: 'EditDialog',
    props: {'form': Object, 'dialog': Boolean, 'isSaveVisible': {default: true}, maxWidth: {default: '75%'}}
  }
</script>
