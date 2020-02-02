<!--eslint-disable-->
<template>
    <GridContainer title="Reporting">
        <CardPanel slot="container-top">
                <v-layout rows wrap>

                    <v-flex sm4 xs12>
                        <div class="ml-2"><label class="v-label v-label--active theme--light active-label-size">
                           <span v-if="filter.click_date && filter.click_date[0]" >Click Date</span>&nbsp;
                        </label></div>
                        <DatePicker :placeholder="$vuetify.t('Click Date')" v-model="filter.click_date" range></DatePicker>
                    </v-flex>

                    <v-flex sm4 xs3>
                        <div class="ml-2" style="margin-top: 21px !important;"></div>
                        <v-combobox dense   hide-details :label="$vuetify.t('Brand')"  :items="brandsList" v-model="filter.brand_id" item-text="brand_name" item-value="brand_id" />

                    </v-flex>

                    <v-flex sm4 xs3>
                        <div class="ml-2" style="margin-top: 21px !important;"></div>
                        <v-combobox dense    hide-details :label="$vuetify.t('Channel')"  :items="channelList"  v-model="filter.channel_id" item-text="channel_name" item-value="channel_id" />
                    </v-flex>


                </v-layout>
                <v-layout rows wrap class="xs-">




                    <v-flex sm2 xs4><v-combobox dense  hide-details :label="$vuetify.t('ADV Format')"  :items="advformatsList"  v-model="filter.adv_format_id" item-text="adv_format_name" item-value="adv_format_id" /></v-flex>



                    <v-flex sm2 xs6>
                        <v-combobox dense  :return-object="false" hide-details :label="$vuetify.t('Country')"  :items="[{country: 'ITA'}]" item-text="country" item-value="country" v-model="filter.country" />
                    </v-flex>

                    <v-flex sm4 xs6>
                        <v-text-field dense  hide-details :label="$vuetify.t('Location')"    v-model="filter.region" />
                    </v-flex>

                    <v-flex sm2 xs6>
                        <v-combobox dense  class="" style="width: 60%;float:left" hide-details :label="$vuetify.t('OS')"  :items="['Android', 'iOS', 'Other']"   v-model="filter.os_only" />
                    </v-flex>
                    <v-flex sm2 xs2 class="text-xs-right pa-0 pt-1">

                        <GridButton icon="search" color="blue" @click="doSearch" />
                        <GridButton :dark="false" icon="cancel" color="white" @click="doResetSearch" />

                    </v-flex>
                </v-layout>



        </CardPanel>



        <v-card class="text-xs-right elevation-0 mt-2" slot="body-bottom" v-if="grid.pagination.pages > 1">


            <v-pagination
                    v-model="grid.pagination.page"
                    :length="grid.pagination.pages"
                    class="elevation-0"
                    total-visible="10"

            ></v-pagination>
        </v-card>

        <v-data-table
                :rows-per-page-items="[100,200,500,{'text':'All','value':-1}]"
                :loading="isAjax" fixed
                :headers="headers"
                :search="grid.pagination.search"
                :items="clicksList"
                :hide-actions="true"
                :pagination.sync="grid.pagination"
                class="elevation-0 fixed-header"
                slot="body-center">
            <template slot="items" slot-scope="{item}">
                <td>{{ item.click_date | dmy}} </td>
                <td>{{ item.brand_name }}</td>
                <td>{{ item.channel_name }}</td>
                <td style="white-space: nowrap">{{ item.adv_format_name }}</td>
                <td>{{ item.country || 'ITA' }}</td>
                <td>{{ item.os_only }} {{ item.os_version }}</td>
                <td>{{ item.clicks }}</td>
                <td>{{ item.leads_a }}</td>
                <td>{{ item.leads_b }}</td>
                <td>{{ item.detractors }}</td>
                <td>{{ item.leads_a / item.clicks *100 | numFormat('0.000')  }}%</td>
                <td>{{ item.leads_b / item.clicks *100 | numFormat('0.000')  }}%</td>
                <td>{{ item.detractors / item.clicks *100 | numFormat('0.000')  }}%</td>
                <td>{{ item.bid_price | numFormat('0.000') }}</td>
                <td>{{ item.clicks * item.bid_price | numFormat('0.000') }}</td>
                <td>{{ item.leads_a * item.clicks * item.bid_price | numFormat('0.000')  }}</td>
                <td>{{ item.leads_b * item.clicks * item.bid_price | numFormat('0.000')  }}</td>

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
                { text: this.$vuetify.t('Click Date'), value: 'click_date.date' },
                { text: this.$vuetify.t('Brand'), value: 'brand_name' },
                { text: this.$vuetify.t('Channel'), value: 'channel_name' },
                { text: this.$vuetify.t('Adv Format'), value: 'adv_format_name' },
                { text: this.$vuetify.t('Country'), value: 'country' },
                { text: this.$vuetify.t('Os Only'), value: 'os_only' },
                { text: this.$vuetify.t('Clicks'), value: 'clicks' },
                { text: this.$vuetify.t('Leads A'), value: 'leads_a' },
                { text: this.$vuetify.t('Leads B'), value: 'leads_b' },
                { text: this.$vuetify.t('Detractors'), value: 'detractors' },
                { text: this.$vuetify.t('CTL A'), value: 'ctla' },
                { text: this.$vuetify.t('CTL B'), value: 'ctlb' },
                { text: this.$vuetify.t('CTD'), value: 'ctd' },
                { text: this.$vuetify.t('CPC €'), value: 'bid_price' },
                { text: this.$vuetify.t('Adv Spend €'), value: 'adv_spend' },
                { text: this.$vuetify.t('Cost Per Lead A €'), value: 'cost_x_lead_a' },
                { text: this.$vuetify.t('Cost Per Lead B €'), value: 'cost_x_lead_b' }
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
            ...mapState('clicks', {'grid': 'gridReporting', 'clicksList': 'list', 'filter': 'filter', 'searchActive': 'searchActive'}),
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
            ...mapActions('clicks', ['resetSearch', 'search', 'reporting']),
            statusIdToText,
            doSearch () {
                this.reporting()
            },
            doResetSearch () {
              this.resetSearch()

            }
        }
    }
</script>
