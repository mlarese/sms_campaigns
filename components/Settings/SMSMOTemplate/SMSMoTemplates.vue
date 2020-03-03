<!--eslint-disable-->
<template>
    <GridContainer title="SMS MO Templates">

        <CardPanel slot="container-top">

        </CardPanel>

        <div slot="header-right" class="pb-2">
            <ButtonNew title="Add SMS MO Templates" @click.native="$router.push('/settings/smsmotemplates/add')"/>
        </div>
        <v-data-table  :rows-per-page-items="[30,50]"
                :headers="headers"
                :items="list"
                :hide-actions="false"
                class="elevation-0"
                slot="body-center"
        >
            <template slot="items" slot-scope="{item}">
                <td>{{ item.brand_name }}</td>
                <td>{{ item.sms_template_text }}</td>
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
                { text: this.$vuetify.t('Brand'), value: 'brand_name' },
                { text: this.$vuetify.t('SMS MO Template'), value: 'sms_template_text' },
                { text: 'Edit', value: 'action', sortable: false },
                { text: 'Delete', value: 'action', sortable: false }
            ]
            return {
                gridFilter: '',
                headers
            }
        },
        computed: {
            ...mapState('smsmotemplate', ['list', '$record'])
        },
        methods: {
          ...mapActions('smsmotemplate' ,['save', 'delete']),
          onDelete (item) {
            if(!confirm('Do you confirm?')) return
            this.delete(item.row_id)
          },
          onEdit (item) {
            const url = `/settings/smsmotemplates/${item.row_id}`
            this.$router.push(url)
          }
        }
    }
</script>

