<template>
  <!--eslint-disable-->
  <div class="role-view"> <!-- se container trasformare in div -->
    <v-card class="elevation-0">
      <v-toolbar
        dense
        class="elevation-0">
        <v-icon>assignment</v-icon>
        <v-toolbar-title class="align-baseline">
          <strong>{{ $t('Role Data') }}</strong>
          <v-btn
            small
            absolute
            dark
            bottom
            right
            fab
            @click="setEditMode"
            class="elevation-0"
color="primary">
            <v-icon small>edit</v-icon>
          </v-btn>
          <span class="ma-3">ID:{{ $record.role_id }}</span>
        </v-toolbar-title>
      </v-toolbar>
      <v-container>
        <v-layout
          row
          class="my-2">
          <v-flex
            xs2
            sm2><strong >{{ $t('Role Name') }}:</strong></v-flex>
          <v-flex
            xs2
            sm2
            class="mx-4">
            {{ $record.role }}
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </div>
</template>

<script>
    import {mapState, mapMutations} from 'vuex'

    export default {
        computed: {
            ...mapState('roles', ['$record', 'record'])
        },
        methods: {
            ...mapMutations('roles', ['setEditMode'])
        }

    }
</script>

<style>

</style>
