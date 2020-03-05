<!--eslint-disable-->
<template>
    <GridContainer title="Leads">
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
                        <v-autocomplete dense  hide-details :label="$vuetify.t('Brand')"  :items="brandsList"  v-model="filter.brand_id" item-text="brand_name" item-value="brand_id" />
                    </v-flex>
                    <v-flex sm2 xs2 class="text-xs-left pa-0 pt-1">
                        <div class="ml-2" style="margin-top: 15px !important;"></div>
                        <GridButton icon="search" color="blue" @click="doSearch" />
                        <GridButton :dark="false" icon="cancel" color="white" @click="doResetSearch" />

                    </v-flex>
                    <v-layout>
                        <v-flex s12 class="text-xs-center">
                            <v-btn color="blue" dark class="elevation-1" @click="downloadCsv">Csv Export</v-btn>

                        </v-flex>
                    </v-layout>
                </v-layout>
            </div>
        </CardPanel>

        <div slot="body-center">
            <div>
                Total Results: <b>{{list.length | numFormat('0,0') }} </b>

            </div>

            <v-data-table
                    :must-sort="true"
                    :rows-per-page-items="[100,200,500,{'text':'All','value':-1}]"
                    :loading="isAjax" fixed
                    :headers="headers"
                    :items="list"  :hide-actions="false"
                    class="elevation-0 fixed-header" >
                <template slot="items" slot-scope="{item}">
                    <td>{{ item.sms_mo_date  | dmy }} {{ item.sms_mo_date  | time }}</td>
                    <td>{{ item.brand_name}}</td>
                    <td>{{ item.msisdns | truncate(5,'.....')}}</td>
                    <td>{{ item.status_name }}</td>
                    <td><GridButton icon="cloud_download" color="blue" @click="onExportLog(item)" /></td>
                </template>
                <template slot="pageText" slot-scope="{ pageStart, pageStop, itemsLength }">
                    {{$vuetify.t('From')}} {{ pageStart }} {{$vuetify.t('To')}} {{ pageStop }}  {{$vuetify.t('of')}} {{ itemsLength }}
                </template>

            </v-data-table>
        </div>

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
                { text: this.$vuetify.t('Brand'), value: 'brand_name' },
                { text: this.$vuetify.t('Msisdn'), value: 'msisdns' },
                { text: this.$vuetify.t('Status'), value: 'status_name' },
                { text: 'Log', value: 'action', sortable: false }
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
            ...mapState('leads', {'list': 'list', 'filter': 'filter', 'searchActive': 'searchActive'}),
            ...mapState('brands', {'brandsList': 'list'}),
            ...mapState('api', {'isAjax': 'isAjax'})
        },
        created () {
          this.resetSearch()
        },
        methods: {
            ...mapActions('leads', ['resetSearch', 'search', 'downloadLog', 'downloadCsv']),
            statusIdToText,
            onExportLog (item) {
              this.downloadLog(item.click_id)
            },
            doSearch () {
                this.search()
            },
            doResetSearch () {
              this.resetSearch()

            }
        }
    }
</script>
