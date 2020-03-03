<!--eslint-disable-->
<template>
    <FormPanel v-bind="$attrs" >
        <div slot="header-right">
            <v-btn outline color="indigo"   @click="$router.go(-1)" >
                {{$vuetify.t('Back')}}
            </v-btn>

        </div>
        <div slot="header-left">
            <span>{{$vuetify.t('SMS MO Template')}}</span>
        </div>

        <v-form
                ref="form"
                lazy-validation>

            <v-layout row wrap>
                <v-flex sm3 xs12>
                    <v-autocomplete :items="brandsList" item-value="brand_id" item-text="brand_name" label="Brand"   hide-details v-model="$record.brand_id" />
                </v-flex>

                <v-flex sm9 xs12>
                    <v-autocomplete :items="baseList" label="SMS MO Template" item-value="sms_mo_template_id" item-text="sms_template_text"  hide-details v-model="$record.sms_mo_template_id" >
                        <template slot="append-outer">
                              <v-tooltip left>
                                    <v-icon
                                            @click="onAddTemplate"
                                            medium style="cursor:pointer" slot="activator" color="success"  >add_circle_outer</v-icon>

                                Add Template
                              </v-tooltip>
                        </template>
                    </v-autocomplete>
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
            ...mapState('smsmotemplate', ['$record', 'baseList']),
            ...mapState('brands', {'brandsList':'list'}),
            isValid () {
                if(!this.$record.brand_id) return false
                if(!this.$record.sms_mo_template_id) return false
                return true
            }
        },
        methods: {
            onAddTemplate () {
              const sms_template_text = prompt('Template text')
              this.addBase({sms_template_text})
                .then(r => this.loadBase())
            },
            onAdd () {
                this.save()
                    .then(r => this.$router.go(-1))
            },
            ...mapActions('smsmotemplate', ['add', 'addBase', 'loadBase', 'save']),

        }
    }
</script>
