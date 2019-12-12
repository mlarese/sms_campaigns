<!--eslint-disable-->
<template>
    <GridContainer title="Settings">
        <v-tabs
                v-model="ui.currentMenuItem"
                slider-color="yellow"
                show-arrows
        >
            <v-tab v-for="(item, i) in menuItems" :key="i"  :to="'/'+item.to" >
                {{ $vuetify.t(item.label) }}
            </v-tab>
        </v-tabs>
        <v-container fluid  class="px-1">
            <nuxt />
        </v-container>

        <!--<v-tabs-items v-model="tab">
            <v-tab-item
                    v-for="item in items"
                    :key="item"
            >
                <v-card flat color="basil">
                    <v-card-text>{{ text }}</v-card-text>
                </v-card>
            </v-tab-item>
        </v-tabs-items>-->

    </GridContainer>
</template>
<script>
    import {mapState, mapGetters} from 'vuex'
    import GridContainer from '../General/GridContainer'


    export default {
        components: {GridContainer},
        data () {
            return {
                gridFilter: '',
            }
        },
        computed: {
            ...mapState('settApp', ['title', 'ui']),
            ...mapState('api', ['notification']),
            ...mapGetters('settApp', ['menuItems', 'role', 'userName'])
        },
        watch: {
            'notification.id'(val) {
                this.$notify(this.notification)
            }
        },
        methods: {
            onClick () {
                alert('onClick')
            }
        }
    }
</script>

