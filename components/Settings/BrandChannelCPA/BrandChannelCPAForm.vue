<!--eslint-disable-->
<template>
    <FormPanel v-bind="$attrs" class="text-xs-right brand-channel-cpa-form-panel">
        <div slot="header-right">
            <v-btn outline color="indigo"   @click="$router.go(-1)" >
                {{$vuetify.t('Back')}}
            </v-btn>

        </div>
        <div slot="header-left">
            <span>{{$vuetify.t('Brand Channel CPA')}}</span>

        </div>

        <v-form
                ref="form"
                lazy-validation
                class="form-brand-channel"
        >
            <v-layout row wrap>
                <v-flex sm5 xs5>
                    <v-autocomplete label="Brand"  :items="brandsList" hide-details v-model="$record.brand_id"  item-value="brand_id" item-text="brand_name" />
                </v-flex>
                <v-flex sm5 xs5>
                    <v-autocomplete label="Channel Name"  :items="channelsList"  hide-details v-model="$record.channel_id" item-value="channel_id" item-text="channel_name" />
                </v-flex>
                <v-flex sm2 xs2>
                    <v-text-field  label="CPA Value"  type="number"  hide-details v-model="$record.cpa_value" />
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
            ...mapState('brandChannelCPA', ['$record']),
            ...mapState('brands', {'brandsList': 'list'}),
            ...mapState('channels', {'channelsList': 'list'}),
            isValid () {
                if(!this.$record.brand_id) return false
                if(!this.$record.channel_id) return false
                if(!this.$record.cpa_value) return false
                return true
            }
        },
        methods: {
            onAdd () {
                this.save()
                    .then(r => this.$router.go(-1))
            },
            ...mapActions('brandChannelCPA', ['add', 'save']),

        }
    }
</script>

<style scoped>

</style>
