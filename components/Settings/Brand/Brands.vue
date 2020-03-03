<!--eslint-disable-->
<template>
    <GridContainer title="Brands">

        <CardPanel slot="container-top">
            <v-text-field
                    v-model="gridFilter"
                    label="Search"

                    hide-details
                    append-icon="search"
            />
        </CardPanel>

        <div slot="header-right" class="pb-2">
            <ButtonNew title="Add Brand" @click.native="$router.push('/settings/brands/add')"/>

        </div>

        <v-data-table  :rows-per-page-items="[30,50]"
                :headers="headers"
                :items="list"
                :loading="isAjax"
                :search="gridFilter"
                :hide-actions="false"
                class="elevation-0"
                slot="body-center"
        >


            <template slot="items" slot-scope="{item}">
                <td>{{ item.brand_id }}</td>
                <td>{{ item.brand_name }}</td>
                <td>{{ item.sms_mo_recipient }}</td>
                <td>{{ item.sms_mo_key_string }}</td>
                <td>{{ item.sms_mt_greeting }}</td>
                <td>{{ item.sms_mt_sender }}</td>
                <td>{{ item.grace_period }}</td>
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
                { text: this.$vuetify.t('Brand ID'), value: 'brand_id' },
                { text: this.$vuetify.t('Brand'), value: 'brand_name' },
                { text: this.$vuetify.t('SMS MO Recipient'), value: 'sms_mo_recipient' },
                { text: this.$vuetify.t('SMS MO Key String'), value: 'sms_mo_key_string' },
                { text: this.$vuetify.t('SMS MT Greeting'), value: 'sms_mt_greeting' },
                { text: this.$vuetify.t('SMS MT Sender'), value: 'sms_mt_sender' },
                { text: this.$vuetify.t('Grace Period'), value: 'grace_period' },
                { text: 'Edit', value: 'action', sortable: false },
                { text: 'Delete', value: 'action', sortable: false }
            ]
            return {
                gridFilter: '',
                headers
            }
        },
        computed: {
            ...mapState('brands', ['list', '$record']),
            ...mapState('api', ['isAjax'])
        },
        methods: {
          ...mapActions('brands' ,['save', 'delete']),
          onDelete (item) {
            if(!confirm('Do you confirm?')) return
            this.delete(item.brand_id)
          },
          onEdit (item) {
            const url = `/settings/brands/${item.brand_id}`
            this.$router.push(url)
          }
        }
    }
</script>

