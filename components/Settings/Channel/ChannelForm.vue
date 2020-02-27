<!--eslint-disable-->
<template>
    <FormPanel v-bind="$attrs" >
        <div slot="header-right">
            <v-btn outline color="indigo"   @click="$router.go(-1)" >
                {{$vuetify.t('Back')}}
            </v-btn>

        </div>
        <div slot="header-left">
            <span>{{$vuetify.t('Channel Form')}}</span>

        </div>

        <v-form
                ref="form"
                lazy-validation
        >

            <v-layout row wrap>
                <v-flex sm4 xs12>
                    <v-text-field label="Channel Name"   hide-details v-model="$record.channel_name" />
                </v-flex>
                <v-flex sm4 xs12>
                    <v-text-field label="Channel Currency"   hide-details v-model="$record.channel_currency" />
                </v-flex>
                <v-flex sm4 xs12>
                    <v-text-field  label="PostBack URL"   hide-details v-model="$record.postback_url" />
                </v-flex>

            </v-layout>

            <v-layout row wrap>
                <v-flex xs2 offset-xs5>
                    <v-btn  style="width:100%"  color="primary"  @click="onAdd" :disabled="!isValid">
                        {{$vuetify.t('Save') }}
                    </v-btn>
                </v-flex>
            </v-layout>
        </v-form>
    </FormPanel>
</template>

<script>
    import {mapState, mapActions} from 'vuex'
    import FormPanel from '../../General/FormPanel'
    import GridButton from '../../General/GridButton'

    export default {
        components: {
            FormPanel, GridButton
        },
        data () {
            return {}
        },
        computed: {
            ...mapState('channels', ['$record']),
            isValid () {
                if(!this.$record.channel_currency) return false
                if(!this.$record.channel_name) return false
                if(!this.$record.postback_url) return false
                return true
            }
        },
        methods: {
            onAdd () {
                this.save()
                    .then(r => this.$router.go(-1))
            },
            ...mapActions('channels', ['add', 'save']),

        }
    }
</script>

<style scoped>

</style>
