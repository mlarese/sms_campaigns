import Vue from 'vue'
import Vuetify from 'vuetify'
import colors from 'vuetify/es5/util/colors'
import Notifications from 'vue-notification'

Vue.use(Vuetify, {
  theme: {
    accent: colors.grey.darken3,
    secondary: colors.amber.darken3
  }
})

Vue.use(Notifications)
