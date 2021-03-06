import _has from 'lodash/has'

/**
 * ruoli:
 *    admin
 *
 *
 */
const menuItems = {
    campaigns: {to: 'campaigns', label: 'Campaigns'},
    reporting: {to: 'reporting', label: 'Reporting'},
    unpaired: {to: 'unpaired', label: 'Unpaired Prospects'},
    landing: {to: 'landingpage', label: 'Landing Pages'},
    leads: {to: 'leads', label: 'Leads'},
    settings: {to: 'settings/brands', label: 'Settings'}
}


const menus = {
  Admin: [
    menuItems.campaigns,
    menuItems.reporting,

    menuItems.landing,
    menuItems.settings
  ],
  'Third Party Agency': [
    menuItems.leads,
    menuItems.unpaired
  ],
  guest: [

  ]
}

export const state = () => ({
  locale: 'it',
  title: 'Compaigns',
  debugMode: true,
  ui: {currentMenuItem: 0},
  languages: [
    {id: 'it', label: 'ITA'},
    {id: 'en', label: 'ENG'},
    {id: 'de', label: 'DEU'}
  ],
  menus,
  loginPath: {
    'Admin': '/campaigns',
    'Third Party Agency': '/leads'
  },
  menuItems: [
    {to: 'role', label: 'Roles'},
    {to: 'user', label: 'Users'},
    {to: 'usersrole', label: 'Users Roles'},
    {to: 'usersbrandschannel', label: 'Users Brands'},
    {to: 'landingpage', label: 'Landing Pages'},
    {to: 'brandlandingpage', label: 'Brand Landing Page'}
  ]
})

export const mutations = {
  setLocale (state, payload) {
    state.locale = payload
  },
  setTitle (state, payload) {
    state.title = payload
  },
  setLanguages (state, payload) {
    state.languages = payload
  },
  setMenu (state, payload) {
    state.menu = payload
  }
}

export const actions = {
}

export const getters = {
  role: (s, g, rs) => !_has(rs, 'auth.user.role') ? 'guest' : rs.auth.user.role,
  user: (s, g, rs) => !_has(rs, 'auth.user') ? '' : rs.auth.user,
  userName: (s, g, rs) => !_has(rs, 'auth.user.userName') ? '' : rs.auth.user.userName,
  isAdmin: (s, g)=> g.role === 'Admin',
  rolePath: (s, g) => s.loginPath[g.role],
  menuItems: (s, g) => s.menus[g.role]
}
