<template>
    <v-layout row wrap style="border-bottom: 2px solid black" class="mb-2">
        <v-flex xs4 class="btn-back">
            <v-btn flat small class="mx-0" :to="to" active-class="">
                <v-icon>reply</v-icon>
                {{$t('Back')}}
            </v-btn>
        </v-flex>
        <v-spacer></v-spacer>
        <v-btn
                :color="color"
                dark
                round
                @click="onSave"
                class="elevation-0 mb-2"
                :disabled="disabled"
        >{{$t(caption)}}</v-btn>

    </v-layout>
</template>
<script>
  export default {
    name: 'FormBar',
    props: ['to', 'color', 'disabled', 'caption'],
    methods: {
      onSave () {
        this.$emit('on-save')
      }
    }
  }
</script>
