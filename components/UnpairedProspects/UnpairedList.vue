<!--eslint-disable-->
<template>
    <GridContainer title="Unpaired Prospects">
        <CardPanel slot="container-top">
            <div class="">
                <v-layout rows wrap>

                    <v-flex sm3 xs12>
                        <div >
                            <span v-if="filter.sms_mo_date && filter.sms_mo_date[0]" class="active-label-size">SMS MO Date</span>&nbsp;
                        </div>
                        <DatePicker :placeholder="$vuetify.t('SMS MO Date')" v-model="filter.sms_mo_date" range></DatePicker>
                    </v-flex>
                    <v-flex sm3 xs4>
                        <div class="ml-2" style="margin-top: 21px !important;"></div>
                        <v-text-field dense   hide-details :label="$vuetify.t('Msisdn')"  v-model="filter.msisdn"  />
                    </v-flex>
                    <v-flex sm4 xs4>
                        <div class="ml-2" style="margin-top: 21px !important;"></div>
                        <v-autocomplete dense  hide-details :label="$vuetify.t('Conversion Status')"  :items="statusList"  v-model="filter.status_id" item-text="text" item-value="status_id" />
                    </v-flex>
                    <v-flex sm2 xs2 class="text-xs-left pa-0 pt-1">
                        <div class="ml-2" style="margin-top: 15px !important;"></div>
                        <GridButton icon="search" color="blue" @click="doSearch" />
                        <GridButton :dark="false" icon="cancel" color="white" @click="doResetSearch" />

                    </v-flex>
                </v-layout>
                <v-layout>
                    <v-flex s12 class="text-xs-center">
                        <v-btn color="blue" dark class="elevation-1" @click="downloadCsv">Csv Export</v-btn>

                    </v-flex>
                </v-layout>
            </div>
        </CardPanel>


        <v-layout rows wrap>
            <v-flex xs4>
                Total Results: <b>{{list.length | numFormat('0,0') }} </b>
            </v-flex>
            <v-flex s4>

            </v-flex>
        </v-layout>

        <v-data-table
                :rows-per-page-items="[100,200,500,{'text':'All','value':-1}]"
                :loading="isAjax" fixed
                :headers="headers"
                :search="grid.pagination.search"
                :items="list"  :hide-actions="false"
                :pagination.sync="grid.pagination"
                class="elevation-0 fixed-header"
                slot="body-center">
            <template slot="items" slot-scope="{item}">
                <td>{{ item.sms_mo_date  | dmy }} {{ item.sms_mo_date  | time }}</td>
                <td>{{ item.msisdn | truncate(5,'.....')}}</td>
                <td>
                    <v-tooltip left v-if="item.sms_mo_final_text ">
                        <span class="pa-3" slot="activator">{{ item.sms_mo_final_text | truncate(8) }}</span>
                        {{ item.sms_mo_final_text }}
                    </v-tooltip>
                </td>
                <td>
                     {{ item.status_name }}

                </td>
            </template>
            <template slot="pageText" slot-scope="{ pageStart, pageStop, itemsLength }">
                {{$vuetify.t('From')}} {{ pageStart }} {{$vuetify.t('To')}} {{ pageStop }}  {{$vuetify.t('of')}} {{ itemsLength }}
            </template>

        </v-data-table>

    </GridContainer>
</template>
<script>
    import {mapState, mapActions} from 'vuex'
    import GridButton from '../General/GridButton'
    import GridContainer from '../General/GridContainer'
    import CardPanel from "../General/CardPanel";
    import ButtonNew from "../General/ButtonNew";
    import DatePicker from 'vue2-datepicker';
    import {statusIdToText, statusList} from '../../assets/filters'
    export default {
        components: {ButtonNew, CardPanel, GridButton, GridContainer, DatePicker},
        data () {
            const headers = [
                { text: this.$vuetify.t('SMS MO Date'), value: 'sms_mo_date' },
                { text: this.$vuetify.t('Msisdn'), value: 'msisdn' },
                { text: this.$vuetify.t('SMS MO Text'), value: 'sms_mo_final_text' },
                { text: this.$vuetify.t('Status'), value: 'status_name' },
            ]
            return {
                sms_mo_date: null,
                click_date: null,
                gridFilter: '',
              statusList,
                headers
            }
        },
        computed: {
            ...mapState('unpaired', {'grid': 'grid', 'list': 'list', 'filter': 'filter', 'searchActive': 'searchActive'}),
            ...mapState('api', {'isAjax': 'isAjax'})
        },
        created () {
          this.resetSearch()
        },
        methods: {
            ...mapActions('unpaired', ['resetSearch', 'search', 'downloadCsv']),
            statusIdToText,
            doSearch () {
                this.search()
            },
            doResetSearch () {
              this.resetSearch()

            }
        }
    }
</script>
