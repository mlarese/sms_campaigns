import _has from 'lodash/has'

/**
 * ruoli:
 *    admin
 *    reporting_admin
 *    reporting_cp
 *
 */
const menuItems = {
    campaigns: {to: 'campaigns', label: 'Campaigns'},
    reporting: {to: 'reporting', label: 'Reporting'},
    unpaired: {to: 'unpaired', label: 'Unpaired Prospects'},
    landing: {to: 'landing', label: 'Landing Pages'},
    settings: {to: 'settings', label: 'Settings'}
}


const menus = {
  admin: [
    menuItems.campaigns,
    menuItems.reporting,
    menuItems.unpaired,
    menuItems.landing,
    menuItems.settings
  ],
  reporting_cp: [
    menuItems.campaigns,
    menuItems.reporting
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
  menuItems: [
    {to: 'role', label: 'Roles'},
    {to: 'user', label: 'Users'},
    {to: 'usersrole', label: 'Users Roles'},
    {to: 'usersbrandschannel', label: 'Users Brands Channels'},
    {to: 'landingpage', label: 'Landing Pages'},
    {to: 'brandlandingpage', label: 'Brand Landing Page'},

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
  role: (s, g, rs) => !_has(rs, 'auth.role') ? 'guest' : rs.auth.role,
  user: (s, g, rs) => !_has(rs, 'auth.user') ? '' : rs.auth.user,
  menuItems: (s, g) => s.menus[g.role]
}
