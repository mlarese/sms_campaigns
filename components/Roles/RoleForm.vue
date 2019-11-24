<template>
  <!--eslint-disable-->
    <v-container fluid>
        <v-row align="center">
            <v-col class="d-flex" cols="12" sm="6">
                <v-autocomplete
                        flat
                        hide-details
                        hide-selected
                        dense
                        :placeholder="$t('Select')"
                        class="elevation-0"
                        v-model="$record.role_id"
                        :items="list"
                        :label="$t('Role Name')"
                        item-value="role_name"
                        item-text="role_name"

                />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: 'RoleForm',
        data () {
            return {
                rules: {
                    country: [v => !!v || this.$t('required')]
                }
            }
        },
        computed: {
            ...mapState('roles', ['$record', 'record'])
        }
    }
</script>

<style>

</style>
