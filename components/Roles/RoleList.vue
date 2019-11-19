<template>
  <!--eslint-disable-->
    <v-grid-panel :title="$t('Roles')">
        <v-spacer></v-spacer>

        <EditDialog
                slot="top-right-buttons"
                :form="form"
                :dialog="dialog"
                :is-save-visible="!isViewMode"
                @on-close="onClose"
                @on-save="onSave"
                @on-edit="onEdit"
                @on-add="onAdd"/>

        <v-layout  slot="filter">
            <v-flex  xs12 sm3 mx-2 class="pt-2">

                <search-select
                        class="csp-search-sp-name"
                        label="Countries"
                        item-text="country"
                        store-name="country"
                />
            </v-flex>
        </v-layout>


        <div slot="body">
            <v-data-table
                    :headers="headers"
                    :items="filteredList"
                    :hide-actions="false"
                    class="elevation-0"
                    :search="gridFilter"
                    :pagination.sync="grid.pagination"
                    v-bind="tableCommon"
            >
                <template slot="items" slot-scope="{item}">
                    <td>{{ item.role_id }}</td>
                    <td>{{ item.role_name }}</td>
                    <td  align="right" nowrap="nowrap">
                        <!-- da copiare -->
                        <v-btn small icon color="primary" @click="onEdit(item)">
                            <v-icon small>edit</v-icon>
                        </v-btn>

                        <!-- da copiare -->
                        <v-btn small icon color="info" @click="onView(item)">
                            <v-icon small>visibility</v-icon>
                        </v-btn>

                        <!-- da copiare -->
                        <v-btn small icon color="error" class="mr-1" @click="onDelete(item, 'role_id')">
                            <v-icon small>delete</v-icon>
                        </v-btn>
                    </td>
                </template>

                <template slot="pageText" slot-scope="{ pageStart, pageStop, itemsLength }">
                    {{$t('From')}} {{ pageStart }} {{$t('To')}} {{ pageStop }}  {{$t('of')}} {{ itemsLength }}
                </template>
            </v-data-table>
        </div>
        <div slot="right-buttons">
            <span>
                <JsonExcelCsv />
            </span>
        </div>
    </v-grid-panel>
</template>
<script>
    import {editDialog} from '../../mixins/editDialog'
    import EditDialog from '../General/EditDialog'
    //import {grid} from '../../mixins/grid'
    import RoleForm from './RoleForm'
    import RoleView from './RoleView'
    import {mapState} from 'vuex'
    import VGridPanel from '../VGridPanel'

    export default {
        //                  storage     nome id     nome form    nome view
        components: {
            EditDialog,
            VGridPanel
        },
        mixins: [editDialog('roles', 'role_id', RoleForm, RoleView), grid('role')], /* copy */
        data () {
            const headers = [
                { text: this.$t('Country ID'), value: 'country_id' },
                { text: this.$t('Country Name'), value: 'country' },
                { text: '', value: 'action', sortable: false }
            ]
            return {
                gridFilter: '',
                headers
            }
        },
        computed: {
            ...mapState('country', ['search', 'filter'])
        }
    }
</script>

