<!--eslint-disable-->
<template>
    <GridContainer title="Campaigns">

        <CardPanel slot="container-top">
                <v-layout rows wrap>

                    <v-flex sm3 xs12>
                        <div class="ml-2"><label class="v-label v-label--active theme--light">Click date</label></div>
                        <DatePicker :placeholder="$vuetify.t('Click Date')" v-model="filter.click_date" range></DatePicker>  </v-flex>
                    <v-flex sm3 xs12>
                        <div class="ml-2">
                            <label class="v-label v-label--active theme--light">SMS MO date</label>
                        </div>
                        <DatePicker v-model="filter.sms_mo_date" range></DatePicker>  </v-flex>
                </v-layout>
                <v-layout rows wrap class="xs-">

                    <v-flex sm3 xs3><v-combobox dense   hide-details :label="$vuetify.t('Brand')"  :items="brandsList" v-model="filter.brand_id" item-text="brand_name" item-value="brand_id" /></v-flex>
                    <v-flex sm3 xs3><v-combobox dense    hide-details :label="$vuetify.t('Channel')"  :items="channelList"  v-model="filter.channel_id" item-text="channel_name" item-value="channel_id" /></v-flex>
                    <v-flex sm3 xs4><v-combobox dense  hide-details :label="$vuetify.t('ADV Format')"  :items="advformatsList"  v-model="filter.adv_format_id" item-text="adv_format_name" item-value="adv_format_id" /></v-flex>

                    <v-flex sm3 xs2 class="text-xs-left pa-0 pt-1">

                            <GridButton icon="search" color="blue" @click="doSearch" />
                            <GridButton :dark="false" icon="cancel" color="white" @click="doResetSearch" />

                    </v-flex>

                    <v-flex sm3 xs6>
                        <v-combobox dense  :return-object="false" hide-details :label="$vuetify.t('Country')"  :items="[{country: 'ITA'}]" item-text="country" item-value="country" v-model="filter.country" />
                    </v-flex>

                    <v-flex sm3 xs6>
                        <v-text-field dense  hide-details :label="$vuetify.t('Location')"    v-model="filter.region" />
                    </v-flex>
                </v-layout>

                <v-layout rows wrap>
                    <v-flex sm3 xs4>
                        <v-combobox dense  class="" style="width: 60%;float:left" hide-details :label="$vuetify.t('OS')"  :items="['Android', 'iOS', 'Other']"   v-model="filter.os_only" />
                        <v-combobox dense  class="ml-2"  style="width: 30%; min-width:100px;" hide-details :label="$vuetify.t('OS Version')"  :items="[3,4,5,6,7,8,9,10,11,12,13]"  v-model="filter.os_version"  />
                    </v-flex>
                    <v-flex sm3 xs4><v-text-field dense   hide-details :label="$vuetify.t('Msisdns')"  v-model="filter.msisdns"  /></v-flex>
                    <v-flex sm3 xs4>
                        <v-combobox dense  :return-object="false" hide-details :label="$vuetify.t('Conversion status')"  :items="[{value:0, text:'Pending'},{value:1, text:'Full Conversion'},{value:2, text:'Likely Conversion'},{value:3, text:'Detractor'}]"  v-model="filter.conversion_status_id" />
                    </v-flex>

                </v-layout>

        </CardPanel>

        <div class="text-xs-center">
            <v-pagination
                    v-model="page"
                    :length="4"
                    prev-icon="mdi-menu-left"
                    next-icon="mdi-menu-right"
            ></v-pagination>
        </div>

        <v-data-table fixed  :headers="headers"  :items="clicksList"  :hide-actions="false"    class="elevation-0" slot="body-center">
            <template slot="items" slot-scope="{item}">
                <td>{{ item.click_date | dmy}}</td>
                <td>{{ item.brand_name }}</td>
                <td>{{ item.channel_name }}</td>
                <td>{{ item.adv_format_name }}</td>
                <td>{{ item.campaign_name }}</td>
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

    export default {
        components: {ButtonNew, CardPanel, GridButton, GridContainer, DatePicker},
        data () {
            const headers = [
                { text: this.$vuetify.t('Click Date'), value: 'click_date' },
                { text: this.$vuetify.t('Brand'), value: 'brand_name' },
                { text: this.$vuetify.t('Channel'), value: 'channel_name' },
                { text: this.$vuetify.t('Adv format'), value: 'adv_format_name' },
                { text: this.$vuetify.t('Campaign Name'), value: 'campaign_name' }
            ]
            return {
                page: 1,
                sms_mo_date: null,
                click_date: null,
                gridFilter: '',
                headers
            }
        },
        computed: {
            ...mapState('clicks', {'clicksList': 'list', 'filter': 'filter', 'searchActive': 'searchActive'}),
            ...mapState('channels', {'channelList': 'list'}),
            ...mapState('brands', {'brandsList': 'list'}),
            ...mapState('advformats', {'advformatsList': 'list'}),
            ...mapState('locations', {'locationsList': 'list'})
        },
        methods: {
            ...mapActions('clicks', ['resetSearch', 'search']),
            doSearch () {
                this.search()
            },
            doResetSearch () {
              this.resetSearch()

            }
        }
    }
</script>
