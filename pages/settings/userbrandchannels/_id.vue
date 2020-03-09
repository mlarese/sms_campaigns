<!--eslint-disable-->
<template>
    <user-brand-channel-form title="Edit User Brand Channel" />
</template>

<script>
    import {mapActions, mapState, mapGetters} from 'vuex'
    import UserBrandChannelForm from '../../../components/Settings/UserBrandChannel/UserBrandChannelForm'
    export default {
        components: {
            UserBrandChannelForm
        },
        async fetch({store, params}) {
            store.commit('usersBrandsChannels/setRecord',{},{root: true})
            store.commit('usersBrandsChannels/setEditMode',null,{root: true})
            store.dispatch('brands/load', {}, {root: true})
            store.dispatch('users/load', {}, {root: true})
            await store.dispatch('usersBrandsChannels/load', {id: params.id}, {root: true})
        }
    }
</script>
