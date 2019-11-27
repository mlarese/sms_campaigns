<!--eslint-disable-->
<template>
    <v-card class="elevation-0">
        <v-toolbar dense class="elevation-0">
            <v-icon>list</v-icon>
            <v-toolbar-title>{{$vuetify.t('Roles')}}</v-toolbar-title>

            <v-spacer></v-spacer>
            <v-btn small dark top right fab class="elevation-0" color="red" @click="$emit('on-add')">
                <v-icon>add</v-icon>
            </v-btn>
        </v-toolbar>
    <v-data-table
            :headers="headers"
            :items="list"
            :hide-actions="false"
            class="elevation-0"
    >
    >
        <template slot="items" slot-scope="{item}">
            <td>{{ item.role_id }}</td>
            <td>{{ item.role_name }}</td>
            <td  align="right" nowrap="nowrap">
                <!-- da copiare -->
                <v-btn small icon color="primary">
                    <v-icon small>edit</v-icon>
                </v-btn>

                <!-- da copiare -->
                <v-btn small icon color="info">
                    <v-icon small>visibility</v-icon>
                </v-btn>

                <!-- da copiare -->
                <v-btn small icon color="error" class="mr-1">
                    <v-icon small>delete</v-icon>
                </v-btn>
            </td>
        </template>
        <template slot="pageText" slot-scope="{ pageStart, pageStop, itemsLength }">
            {{$vuetify.t('From')}} {{ pageStart }} {{$vuetify.t('To')}} {{ pageStop }}  {{$vuetify.t('of')}} {{ itemsLength }}
        </template>

    </v-data-table>
    </v-card>
</template>
<script>
    import {mapState} from 'vuex'

    export default {
        data () {
            const headers = [
                { text: this.$vuetify.t('Role ID'), value: 'role_id' },
                { text: this.$vuetify.t('Role Name'), value: 'role_name' },
                { text: '', value: 'action', sortable: false }
            ]
            return {
                gridFilter: '',
                headers
            }
        },
        computed: {
            ...mapState('roles', ['list', '$record'])
        }
    }
</script>

