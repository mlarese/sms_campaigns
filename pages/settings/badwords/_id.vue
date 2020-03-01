<!--eslint-disable-->
<template>
    <BadWordForm title="Bad Word" />
</template>

<script>
    import {mapActions, mapState, mapGetters} from 'vuex'
    import BadWordForm from '../../../components/Settings/BadWord/BadWordForm'
    export default {
        components: {
          BadWordForm
        },
        async fetch({store, params}) {
            store.commit('badwords/setRecord',{},{root: true})
            store.commit('badwords/setEditMode',null,{root: true})
            await store.dispatch('badwords/load', {id: params.id}, {root: true})
        }
    }
</script>
