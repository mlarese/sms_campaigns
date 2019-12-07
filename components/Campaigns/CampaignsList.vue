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


        <v-data-table
                :rows-per-page-items="[100,200,500,{'text':'All','value':-1}]"
                :loading="isAjax" fixed  :headers="headers"  :items="clicksList"  :hide-actions="false"    class="elevation-0" slot="body-center">
            <template slot="items" slot-scope="{item}">
                <td>{{ item.click_date | dmy}}</td>
                <td>{{ item.brand_name }}</td>
                <td>{{ item.channel_name }}</td>
                <td style="white-space: nowrap">{{ item.adv_format_name }}</td>
                <td style="white-space: nowrap">{{ item.campaign_name }}</td>
                <td>{{ item.bid_price }}</td>
                <td>{{ item.creative_id }}</td>
                <td>{{ item.sms_template }}</td>
                <td>{{ item.country }}</td>
                <td>{{ item.region }}</td>
                <td>{{ item.city }}</td>
                <td>{{ item.os_only }} {{ item.os_version }}</td>
                <td>{{ item.user_ip }}</td>
                <td>{{ item.msisdns }}</td>
                <td>{{ item.token_id }}</td>
                <td>{{ item.sms_mo_date }}</td>
                <td>{{ item.sms_mo_text }}</td>
                <td>{{ item.conversion_status }}</td>
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
                { text: this.$vuetify.t('Campaign Name'), value: 'campaign_name' },
                { text: this.$vuetify.t('Bid price'), value: 'bid_price' },
                { text: this.$vuetify.t('Creative id'), value: 'creative_id' },
                { text: this.$vuetify.t('sms_template'), value: 'sms_template' },
                { text: this.$vuetify.t('country'), value: 'country' },
                { text: this.$vuetify.t('region'), value: 'region' },
                { text: this.$vuetify.t('city'), value: 'city' },
                { text: this.$vuetify.t('Os only'), value: 'os_only' },
                { text: this.$vuetify.t('User ip'), value: 'user_ip' },
                { text: this.$vuetify.t('Msisdns'), value: 'msisdns' },
                { text: this.$vuetify.t('Token id'), value: 'token_id' },
                { text: this.$vuetify.t('Sms mo date'), value: 'sms_mo_date' },
                { text: this.$vuetify.t('Sms mo text'), value: 'sms_mo_text' },
                { text: this.$vuetify.t('Conv st.'), value: 'conversion_status' },
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
            ...mapState('locations', {'locationsList': 'list'}),
            ...mapState('api', {'isAjax': 'isAjax'})
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
