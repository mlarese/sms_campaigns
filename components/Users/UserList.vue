<!--eslint-disable-->
<template>
    <GridContainer title="Users">

            <CardPanel slot="container-top">

            </CardPanel>

            <div slot="header-right" class="pb-2">
                <ButtonNew title="Add User" @click.native="$router.push('/settings/users/add')"/>
            </div>
    <v-data-table
            :headers="headers"
            :items="list"
            :hide-actions="false"
            class="elevation-0"
            slot="body-center"
    >
        <template slot="items" slot-scope="{item}">
            <td>{{ item.user_id }}</td>
            <td>{{ item.company_name }}</td>
            <td>{{ item.username }}</td>
            <td>{{ item.password }}</td>
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
                { text: this.$vuetify.t('Role ID'), value: 'role_id' },
                { text: this.$vuetify.t('Company Name'), value: 'company_name' },
                { text: this.$vuetify.t('User Name'), value: 'username' },
                { text: this.$vuetify.t('Password'), value: 'password' },
                { text: 'Edit', value: 'action', sortable: false },
                { text: 'View', value: 'action', sortable: false },
                { text: 'Delete', value: 'action', sortable: false }
            ]
            return {
                gridFilter: '',
                headers
            }
        },
        computed: {
            ...mapState('users', ['list', '$record'])
        },
        methods: {
            onClick () {
                alert('onClick')
            }
        }
    }
</script>

