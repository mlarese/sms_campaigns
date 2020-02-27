<!--eslint-disable-->
<template>
    <ChannelForm title="Edit Channel Form" />
</template>

<script>
    import {mapActions, mapState, mapGetters} from 'vuex'
    import ChannelForm from '../../../components/Settings/Channel/ChannelForm'
    export default {
        components: {
            ChannelForm
        },
        async fetch({store, params}) {
            store.commit('channels/setRecord',{},{root: true})
            store.commit('channels/setEditMode',null,{root: true})
            await store.dispatch('channels/load', {id: params.id}, {root: true})
        }
    }
</script>
