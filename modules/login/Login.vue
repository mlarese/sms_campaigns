<template>
  <!--eslint-disable-->
    <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
            <v-card class="elevation-6" rounded>
                <v-toolbar dense flat dark color="black">
                    <v-toolbar-title class="subheading">{{title}}</v-toolbar-title>
                </v-toolbar>
                    <v-form method="post" action="/monitor/j_security_check" target="iflogger" class="pa-2">
                        <v-text-field prepend-icon="person" v-model="username" name="j_username" label="Login" type="text"></v-text-field>
                        <v-text-field prepend-icon="lock" @keyup.enter="login" name="j_password" v-model="password" label="Password" id="password" type="password"></v-text-field>
                        <v-layout>
                            <v-spacer></v-spacer>
                            <v-btn v-if="!mockApp" :loading="signingIn" type="submit" :disabled="!canLogin" color="info" @click="doLogin" @keyup.enter="doLogin">
                                Login
                            </v-btn>

                            <v-btn v-else :loading="signingIn" :disabled="!canLogin" color="info" @click="doLogin" @keyup.enter="doLogin">
                                Login
                            </v-btn>
                        </v-layout>

                    </v-form>
                <iframe name="iflogger" style="display: none" @load="loaded"></iframe>

            </v-card>
        </v-flex>
    </v-layout>

</template>
<script>
  import VueRecaptcha from 'vue-recaptcha'
  import {mapState, mapActions, mapMutations} from 'vuex'
  import {baseURL, mockApp} from '../../storeimp/api/api-properties'

  export default {
    layout: 'empty',
    components: {VueRecaptcha},
      data () {
          return {
              error: null,
              username: '',
              password: '',
              alert: null,
              unverified: false,
              baseURL,
              loading: false
          }
      },
    computed: {
      mockApp () {
        return mockApp
      },
      ...mapState('app', ['title']),
      ...mapState('auth', ['signingIn']),
      canLogin () {
        if (!this.username) {
          return false
        }
        if (!this.password) {
          return false
        }

        return true
      }
    },
    methods: {
      ...mapMutations('auth', ['setSigningIn']),
      loaded () {
        if (this.signingIn) {
          this.loadProfile()
            .then(() => this.$router.replace('/'))
        }
      },
      ...mapActions('auth', ['loadProfile']),
      async doLogin () {
        if (mockApp) {
          console.log('----- test')
          this.loadProfile()
          return
        }
        if (!this.canLogin) {
          return
        }
        this.error = null
        this.setSigningIn(true)
      }
    }
  }
</script>
