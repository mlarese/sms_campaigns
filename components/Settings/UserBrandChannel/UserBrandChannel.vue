<!--eslint-disable-->
<template>
    <GridContainer title="Users Brands">

        <CardPanel slot="container-top">
            <v-text-field
                    v-model="gridFilter"
                    label="Search"

                    hide-details
                    append-icon="search"
            />
        </CardPanel>

        <div slot="header-right" class="pb-2">
            <ButtonNew title="Add SMS User Brand Channel" @click.native="$router.push('/settings/userbrandchannels/add')"/>
        </div>
        <v-data-table
                :headers="headers"
                :items="list"
                :search="gridFilter"
                :hide-actions="false"
                class="elevation-0"
                slot="body-center"
        >
            <template slot="items" slot-scope="{item}">
                <td>{{ item.company_name }}</td>
                <td>{{ item.brand_name }}</td>
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
    import {mapState, mapActions} from 'vuex'
    import GridButton from '../../General/GridButton'
    import GridContainer from '../../General/GridContainer'
    import CardPanel from "../../General/CardPanel";
    import ButtonNew from "../../General/ButtonNew";

    export default {
        components: {ButtonNew, CardPanel, GridButton, GridContainer},
        data () {
            const headers = [
                { text: this.$vuetify.t('Company Name'), value: 'company_name' },
                { text: this.$vuetify.t('Brand'), value: 'brand_name' },
                { text: 'Edit', value: 'action', sortable: false },
                { text: 'Delete', value: 'action', sortable: false }
            ]
            return {
                gridFilter: '',
                headers
            }
        },
        computed: {
            ...mapState('usersBrandsChannels', ['list', '$record'])
        },
        methods: {
          ...mapActions('usersBrandsChannels' ,['save', 'delete']),
          onDelete (item) {
            if(!confirm('Do you confirm?')) return
            this.delete(item.row_id)
          },
          onEdit (item) {
            const url = `/settings/userbrandchannels/${item.row_id}`
            this.$router.push(url)
          }
        }
    }
</script>

