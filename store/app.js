import _has from 'lodash/has'

/**
 * ruoli:
 *    admin
 *    reporting_admin
 *    reporting_cp
 *
 */
const menuItems = {
    roles: {to: 'role', label: 'Roles'},
    user: {to: 'user', label: 'Users'},
    usersrole: {to: 'usersrole', label: 'Users Roles'},
    usersbrandschannel: {to: 'usersbrandschannel', label: 'Users Brands Channels'},
    landingpage: {to: 'landingpage', label: 'Landing Pages'},
    brandlandingpage: {to: 'brandlandingpage', label: 'Brand Landing Page'},
}

const menus = {
  admin: [
    menuItems.roles,
    menuItems.user,
    menuItems.usersrole,
    menuItems.usersbrandschannel,
    menuItems.landingpage,
    menuItems.brandlandingpage,
  ],
  reporting_admin: [
    menuItems.transaction,
    menuItems.reporting
  ],
  reporting_cp: [
    menuItems.transaction,
    menuItems.reporting
  ],
  guest: [

  ]
}

export const state = () => ({
  locale: 'it',
  title: 'Sms Compaigns',
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
