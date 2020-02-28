<!--eslint-disable-->
<template>
    <BrandForm/>
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
