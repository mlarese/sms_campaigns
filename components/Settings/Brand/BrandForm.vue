<!--eslint-disable-->
<template>
    <FormPanel v-bind="$attrs" >
        <div slot="header-right">
            <v-btn outline color="indigo"   @click="$router.go(-1)" >
                {{$vuetify.t('Back')}}
            </v-btn>

        </div>
        <div slot="header-left">
            <span>{{$vuetify.t('Brand')}}</span>

        </div>

        <v-form
                ref="form"
                lazy-validation
        >


            <v-layout row wrap>
                <v-flex sm4 xs12>
                    <v-text-field append-icon="" label="Brand"   hide-details v-model="$record.brand_name" />
                </v-flex>
                <v-flex sm4 xs12>
                    <v-text-field append-icon="" label="SMS MO Recipient"   hide-details v-model="$record.sms_mo_recipient" />
                </v-flex>
                <v-flex sm4 xs12>
                    <v-text-field append-icon="" label="SMS MO Key String"   hide-details v-model="$record.sms_mo_key_string" />
                </v-flex>

            </v-layout>

            <v-layout row wrap>
                <v-flex sm6 xs12>
                    <v-text-field append-icon="" label="SMS MT Greeting"   hide-details v-model="$record.sms_mt_greeting" />
                </v-flex>
                <v-flex sm2 xs12>
                    <v-text-field append-icon="" label="SMS MT Sender"   hide-details v-model="$record.sms_mt_sender" />
                </v-flex>
                <v-flex sm2 xs12>
                    <v-text-field append-icon="" type="number" label="Grace Period"   hide-details v-model="$record.grace_period" />
                </v-flex>

                <v-flex sm2 xs12>
                    <v-text-field append-icon="" type="number" label="Grace Period Conversion"   hide-details v-model="$record.grace_period_conversion" />
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
            ...mapState('brands', ['$record']),
            isValid () {
                if(!this.$record.brand_name) return false
                if(!this.$record.sms_mo_recipient) return false
                if(!this.$record.grace_period) return false
                if(!this.$record.grace_period_conversion) return false
                if(!this.$record.sms_mt_greeting) return false
                if(!this.$record.sms_mo_key_string) return false
                return true
            }
        },
        methods: {
            onAdd () {
                this.save()
                    .then(r => this.$router.go(-1))
            },
            ...mapActions('brands', ['add', 'save']),

        }
    }
</script>

<style scoped>

</style>
