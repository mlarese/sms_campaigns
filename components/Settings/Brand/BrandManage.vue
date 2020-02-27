<!--eslint-disable-->
<template>
    <v-flex container pa-0>
        <v-card>
            <BrandForm/>
        </v-card>
    </v-flex>
</template>

<script>
    import BrandForm from './BrandForm'
    import {mapState, mapActions} from 'vuex'

    export default {
        components: {
            BrandForm
        },
        computed: {
            ...mapState('brands', ['$record', 'record'])
        },
        methods: {
            ...mapActions('brands', ['save'])
        }
    }
</script>

<style>

</style>
