<!--eslint-disable-->
<template>
    <FormPanel v-bind="$attrs" >
        <div slot="header-right">
            <v-btn outline color="indigo"   @click="$router.go(-1)" >
                {{$vuetify.t('Back')}}
            </v-btn>

        </div>
        <div slot="header-left">
            <span>{{$vuetify.t('Brand Form')}}</span>

        </div>

        <v-form
                ref="form"
                lazy-validation
        >

            <v-layout row wrap>
                <v-flex sm4 xs12>
                    <v-text-field append-icon="" label="Company Name"   hide-details v-model="$record.company_name" />
                </v-flex>
                <v-flex sm4 xs12>
                    <v-text-field append-icon="" label="Brand"   hide-details v-model="$record.brand" />
                </v-flex>
                <v-flex sm4 xs12>
                    <v-text-field append-icon="" label="Channel"   hide-details v-model="$record.channel" />
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
    import {timePickerOptions, notBeforeToday} from '../../../assets/helpers'
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
            ...mapState('usersBrandsChannels', ['$record']),
            isValid () {
                if(!this.$record.brand) return false
                if(!this.$record.company_name) return false
                if(!this.$record.channel) return false
                return true
            }
        },
        methods: {
            onAdd () {
                this.save()
                    .then(r => this.$router.go(-1))
            },
            ...mapActions('usersBrandsChannels', ['add', 'save']),

        }
    }
</script>

<style scoped>

</style>
