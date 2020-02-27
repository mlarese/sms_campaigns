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
                <v-flex sm6 xs12>
                    <v-text-field label="Company Name"   hide-details v-model="$record.company_name" />
                </v-flex>
                <v-flex sm6 xs12>
                    <v-text-field label="User Name"   hide-details v-model="$record.username" />
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
            ...mapState('users', ['$record']),
            isValid () {
                if(!this.$record.company_name) return false
                if(!this.$record.username) return false

                return true
            }
        },
        methods: {
            onAdd () {
                this.save()
                    .then(r => this.$router.go(-1))
            },
            ...mapActions('users', ['add', 'save']),

        }
    }
</script>

<style scoped>

</style>
