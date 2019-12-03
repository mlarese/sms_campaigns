import Vue from 'vue'
import Vuetify from 'vuetify'
import colors from 'vuetify/es5/util/colors'
import Notifications from 'vue-notification'
import {dmy, time} from '../assets/filters'
import 'vue2-datepicker/index.css';
// import '@fortawesome/fontawesome-free/css/all.css'

Vue.use(Vuetify, {
  iconfont: 'md', // 'md' || 'mdi' || 'fa' || 'fa4'
  icons: {
    'cancel': 'fas fa-ban',
    'eraser': 'fas fa-eraser',
    'search': 'fas fa-search'
  },
  theme: {
    accent: colors.grey.darken3,
    secondary: colors.amber.darken3
  }
})

Vue.use(Notifications)
Vue.filter('dmy', dmy)
Vue.filter('time', time)
