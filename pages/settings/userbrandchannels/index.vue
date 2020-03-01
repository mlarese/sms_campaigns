<!--eslint-disable-->
<template>
    <user-brand-channel/>
</template>
<script>
    import UserBrandChannel from '../../../components/Settings/UserBrandChannel/UserBrandChannel'
    export default {
        components: {UserBrandChannel},
        async fetch ({store}) {
            store.dispatch('usersBrandsChannels/load', {}, {root: true})
        }
    }
</script>
