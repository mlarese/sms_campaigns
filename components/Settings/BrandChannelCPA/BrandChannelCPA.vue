<!--eslint-disable-->
<template>
    <GridContainer title="Brands Channel CPA">

        <CardPanel slot="container-top">
            <v-text-field
                    v-model="gridFilter"
                    label="Search"

                    hide-details
                    append-icon="search"
            />
        </CardPanel>

        <div slot="header-right" class="pb-2">
            <ButtonNew title="Add Brand Channel CPA" @click.native="$router.push('/settings/brandchannelcpa/add')"/>
        </div>
        <v-data-table  :rows-per-page-items="[30,50]"
                :headers="headers"
                :items="list"
                :hide-actions="false"
                class="elevation-0"
                :search="gridFilter"
                slot="body-center"
        >
            <template slot="items" slot-scope="{item}">
                <td>{{ item.brand_name }}</td>
                <td>{{ item.channel_name }}</td>
                <td>{{ item.channel_currency }}</td>
                <td>{{ item.cpa_value }}</td>
                <td width="1" class="pa-0">
                    <GridButton icon="edit" color="green" @click="onEdit(item)"></GridButton>
                </td>
                <td width="1" class="pa-0">
                    <GridButton icon="delete" color="error" @click="onDelete(item)"></GridButton>
                </td>
            </template>
            <template slot="pageText" slot-scope="{ pageStart, pageStop, itemsLength }">
                {{$vuetify.t('From')}} {{ pageStart }} {{$vuetify.t('To')}} {{ pageStop }}  {{$vuetify.t('of')}} {{ itemsLength }}
            </template>

        </v-data-table>
    </GridContainer>
</template>
<script>
    import {mapState,mapActions} from 'vuex'
    import GridButton from '../../General/GridButton'
    import GridContainer from '../../General/GridContainer'
    import CardPanel from "../../General/CardPanel";
    import ButtonNew from "../../General/ButtonNew";

    export default {
        components: {ButtonNew, CardPanel, GridButton, GridContainer},
        data () {
            const headers = [
                { text: this.$vuetify.t('Brand'), value: 'brand_name' },
                { text: this.$vuetify.t('Channel'), value: 'channel_name' },
                { text: this.$vuetify.t('Channel Currency'), value: 'channel_currency' },
                { text: this.$vuetify.t('CPA value'), value: 'cpa_value' },
                { text: 'Edit', value: 'action', sortable: false },
                { text: 'Delete', value: 'action', sortable: false }
            ]
            return {
                gridFilter: '',
                headers
            }
        },
        computed: {
            ...mapState('brandChannelCPA', ['list', '$record'])
        },
        methods: {
          ...mapActions('brandChannelCPA' ,['save', 'delete']),
          onDelete (item) {
            if(!confirm('Do you confirm?')) return
            this.delete(item.row_id)
          },
          onEdit (item) {
            const url = `/settings/brandchannelcpa/${item.row_id}`
            this.$router.push(url)
          }
        }
    }
</script>

