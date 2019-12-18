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
                        <v-text-field dense   hide-details :label="$vuetify.t('Msisdn')"  v-model="filter.msisdns"  />
                    </v-flex>
                    <v-flex sm4 xs4>
                        <div class="ml-2" style="margin-top: 21px !important;"></div>
                        <v-combobox dense  hide-details :label="$vuetify.t('Conversion Status')"  :items="statusList"  v-model="filter.conversion_status_id" item-text="text" item-value="conversion_status_id" />
                    </v-flex>
                    <v-flex sm2 xs2 class="text-xs-left pa-0 pt-1">
                        <div class="ml-2" style="margin-top: 15px !important;"></div>
                        <GridButton icon="search" color="blue" @click="doSearch" />
                        <GridButton :dark="false" icon="cancel" color="white" @click="doResetSearch" />

                    </v-flex>
                </v-layout>
            </div>
        </CardPanel>

        <!-- v-card class="text-xs-right elevation-0 mb-2" slot="body-top" v-if="grid.pagination.pages > 1">
            <v-pagination
                    v-model="grid.pagination.page"
                    :length="grid.pagination.pages"
                    class="elevation-0"

            ></v-pagination>
        </v-card>

        <v-card class="text-xs-right elevation-0 mt-2" slot="body-bottom" v-if="grid.pagination.pages > 1">

            <v-pagination
                    v-model="grid.pagination.page"
                    :length="grid.pagination.pages"
                    class="elevation-0"

            ></v-pagination
        </v-card>-->

        <v-data-table
                :rows-per-page-items="[100,200,500,{'text':'All','value':-1}]"
                :loading="isAjax" fixed
                :headers="headers"
                :search="grid.pagination.search"
                :items="clicksList"  :hide-actions="false"
                :pagination.sync="grid.pagination"
                class="elevation-0 fixed-header"
                slot="body-center">
            <template slot="items" slot-scope="{item}">
                <td>{{ item.sms_mo_date  | dmy }} {{ item.sms_mo_date  | time }}</td>
                <td>{{ item.msisdns | truncate(5,'.....')}}</td>
                <td>
                    <v-tooltip left v-if="item.sms_mo_final_text ">
                        <span class="pa-3" slot="activator">{{ item.sms_mo_final_text | truncate(8) }}</span>
                        {{ item.sms_mo_final_text }}
                    </v-tooltip>
                </td>
                <td>
                    <v-tooltip left>
                        <span class="pa-3" slot="activator">{{ item.conversion_status_id }}</span>
                        {{statusIdToText(item.conversion_status_id)}}
                    </v-tooltip>
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
                { text: this.$vuetify.t('Msisdn'), value: 'msisdns' },
                { text: this.$vuetify.t('SMS MO Text'), value: 'sms_mo_final_text' },
                { text: this.$vuetify.t('Status'), value: 'conversion_status_id' },
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
            ...mapState('clicks', {'grid': 'grid', 'clicksList': 'list', 'filter': 'filter', 'searchActive': 'searchActive'}),
            ...mapState('channels', {'channelList': 'list'}),
            ...mapState('brands', {'brandsList': 'list'}),
            ...mapState('advformats', {'advformatsList': 'list'}),
            ...mapState('locations', {'locationsList': 'list'}),
            ...mapState('api', {'isAjax': 'isAjax'})
        },
        created () {
          this.resetSearch()
        },
        methods: {
            ...mapActions('clicks', ['resetSearch', 'search']),
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
