<!--eslint-disable-->
<template>
    <brand-channel-c-p-a-form title="Edit Brand Channel CPA" />
</template>

<script>
    import {mapActions, mapState, mapGetters} from 'vuex'
    import BrandChannelCPAForm from '../../../components/Settings/BrandChannelCPA/BrandChannelCPAForm'
    export default {
        components: {
            BrandChannelCPAForm
        },
        async fetch({store, params}) {
            store.commit('brandChannelCPA/setRecord',{},{root: true})
            store.commit('brandChannelCPA/setEditMode',null,{root: true})
            store.dispatch('brands/load', {}, {root: true})
            store.dispatch('channels/load', {}, {root: true})
            await store.dispatch('brandChannelCPA/load', {id: params.id}, {root: true})
        }
    }
</script>
