<!--eslint-disable-->
<template>
    <GridContainer title=" Bad Words">

        <CardPanel slot="container-top">
            <v-text-field
                    v-model="gridFilter"
                    label="Search"

                    hide-details
                    append-icon="search"
            />
        </CardPanel>

        <div slot="header-right" class="pb-2">
            <ButtonNew title="Add Bad Word" @click.native="$router.push('/settings/badwords/add')"/>
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
                <td>{{ item.row_id }}</td>
                <td>{{ item.bad_word }}</td>
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
                { text: this.$vuetify.t('Row ID'), value: 'row_id' },
                { text: this.$vuetify.t('Bad Word'), value: 'bad_word' },
                { text: 'Edit', value: 'action', sortable: false },
                { text: 'Delete', value: 'action', sortable: false }
            ]
            return {
                gridFilter: '',
                headers
            }
        },
        computed: {
            ...mapState('badwords', ['list', '$record'])
        },
        methods: {
          ...mapActions('badwords' ,['save', 'delete']),
          onDelete (item) {
            if(!confirm('Do you confirm?')) return
            this.delete(item.row_id)
          },
          onEdit (item) {
            const url = `/settings/badwords/${item.row_id}`
            this.$router.push(url)
          }
        }
    }
</script>

