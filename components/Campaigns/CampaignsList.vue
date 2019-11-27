<!--eslint-disable-->
<template>
    <GridContainer title="Campaigns">

        <CardPanel slot="container-top">
            <v-layout>
                <v-select class="mr-1"  :label="$vuetify.t('Brand')"  :itemscope="[]"  />
                <v-select  :label="$vuetify.t('Channel')"  :itemscope="[]"  />
            </v-layout>
        </CardPanel>

        <v-data-table fixed  :headers="headers"  :items="list"  :hide-actions="false"    class="elevation-0" slot="body-center">
            <template slot="items" slot-scope="{item}">
                <td>{{ item.click_date }}</td>
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

    export default {
        components: {ButtonNew, CardPanel, GridButton, GridContainer},
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

