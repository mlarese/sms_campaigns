<!--eslint-disable-->
<template>
    <GridContainer title="Campaigns">

        <CardPanel slot="container-top">


                <v-layout rows wrap>
                    <v-flex sm4 xs6> <DatePicker :placeholder="$vuetify.t('Click Date')" v-model="click_date" range></DatePicker>  </v-flex>
                    <v-flex sm4 xs6> <DatePicker v-model="sms_mo_date" range></DatePicker>  </v-flex>
                </v-layout>
                <v-layout rows wrap>

                    <v-flex sm4 xs6><v-select hide-details :label="$vuetify.t('Brand')"  :items="[]"  /></v-flex>
                    <v-flex sm4 xs6><v-select hide-details :label="$vuetify.t('Channel')"  :items="[]"  /></v-flex>
                    <v-flex sm4 xs6><v-select hide-details :label="$vuetify.t('ADV Format')"  :items="[]"  /></v-flex>



                    <v-flex sm4 xs6><v-select hide-details :label="$vuetify.t('Country')"  :items="[]"  /></v-flex>
                    <v-flex sm4 xs6><v-select hide-details :label="$vuetify.t('Region')"  :items="[]"  /></v-flex>
                    <v-flex sm4 xs6><v-select hide-details :label="$vuetify.t('City')"  :items="[]"  /></v-flex>
                </v-layout>

                <v-layout rows wrap>
                    <v-flex sm4 xs4><v-select hide-details :label="$vuetify.t('OS')"  :items="[]"  /></v-flex>
                    <v-flex sm4 xs4><v-select hide-details :label="$vuetify.t('OS Version')"  :items="[]"  /></v-flex>

                    <v-flex sm4 xs4 class="text-xs-right pa-0">
                        <div>
                            <GridButton icon="search" color="blue" @click="onClick"></GridButton>
                            <GridButton :dark="false" icon="cancel" color="white" @click="onClick"></GridButton>
                        </div>

                    </v-flex>
                </v-layout>

        </CardPanel>

        <v-data-table fixed  :headers="headers"  :items="list"  :hide-actions="false"    class="elevation-0" slot="body-center">
            <template slot="items" slot-scope="{item}">
                <td>{{ item.click_date | dmy}}</td>
                <td>{{ item.brand_name }}</td>
                <td>{{ item.channel_name }}</td>
                <td>{{ item.adv_format_name }}</td>
                <td>{{ item.campaign_name }}</td>

                <td width="1" class="pa-0">
                    <GridButton icon="visibility" color="blue" @click="onClick"></GridButton>
                </td>

            </template>
            <template slot="pageText" slot-scope="{ pageStart, pageStop, itemsLength }">
                {{$vuetify.t('From')}} {{ pageStart }} {{$vuetify.t('To')}} {{ pageStop }}  {{$vuetify.t('of')}} {{ itemsLength }}
            </template>

        </v-data-table>

    </GridContainer>
</template>
<script>
    import {mapState} from 'vuex'
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
                { text: 'View', value: 'action', sortable: false }
            ]
            return {
                sms_mo_date: null,
                click_date: null,
                gridFilter: '',
                headers
            }
        },
        computed: {
            ...mapState('clicks', ['list', '$record'])
        },
        methods: {
            onClick () {
                alert('onClick')
            }
        }
    }
</script>

