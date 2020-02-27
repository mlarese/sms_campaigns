<!--eslint-disable-->
<template>
    <Channels/>
</template>
<script>
    import Channels from '../../../components/Settings/Channel/Channels.vue'
    const root = {root: true}
    export default {
        components: {Channels},
        mounted() {
            let i = document.getElementById('image')
            console.dir(i)
        }, fetch({store}) {
            store.dispatch('channels/load', {}, root)
        }
    }
</script>
