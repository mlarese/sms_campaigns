<!--eslint-disable-->
<template>
    <GridContainer title="Landing Page">

            <CardPanel slot="container-top">

            </CardPanel>

            <div slot="header-right" class="pb-2">
                <ButtonNew/>
            </div>
    <v-data-table
            :headers="headers"
            :items="list"
            :hide-actions="false"
            class="elevation-0"
            slot="body-center"
    >
        <template slot="items" slot-scope="{item}">
            <td>{{ item.lp_id }}</td>
            <td>{{ item.background_rgb }}</td>
            <td>{{ item.lp_banner_element }}</td>
            <td>{{ item.text_rgb }}</td>
            <td>{{ item.text }}</td>
            <td>{{ item.button_element }}</td>
            <td width="1" class="pa-0">
                <GridButton icon="edit" color="green" @click="onClick"></GridButton>
            </td>
            <td width="1" class="pa-0">
                <GridButton icon="visibility" color="blue" @click="onClick"></GridButton>
            </td>
            <td width="1" class="pa-0">
                <GridButton icon="delete" color="error" @click="onClick"></GridButton>
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
                { text: this.$vuetify.t('LP ID'), value: 'lp_id' },
                { text: this.$vuetify.t('Background RGB'), value: 'background_rgb' },
                { text: this.$vuetify.t('LP Banner Element'), value: 'lp_banner_element' },
                { text: this.$vuetify.t('Text RGB'), value: 'text_rgb' },
                { text: this.$vuetify.t('Text'), value: 'text' },
                { text: this.$vuetify.t('Button Element'), value: 'button_element' },
                { text: '', value: 'action', sortable: false }
            ]
            return {
                gridFilter: '',
                headers
            }
        },
        computed: {
            ...mapState('landingPages', ['list', '$record'])
        },
        methods: {
            onClick () {
                alert('onClick')
            }
        }
    }
</script>

