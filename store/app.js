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
  operator: {to: 'operator', label: 'MNOs'},
  country: {to: 'country', label: 'COUNTRIES'},
  billing: {to: 'billing', label: 'BILLING PRICES'},
  service: {to: 'service', label: 'CSP SERVICES'},
  transaction: {to: 'transaction', label: 'TRANSACTIONS'},
  reporting: {to: 'reporting', label: 'REPORTING'},
  serviceprice: {to: 'serviceprice', label: 'WIND SERVICE PRICES'},
  apisimulator: {to: 'apisimulator', label: 'APIs SIMULATOR'}
}

const menus = {
  admin: [
    menuItems.roles,
    menuItems.operator,
    menuItems.country,
    menuItems.billing,
    menuItems.service,
    menuItems.transaction,
    menuItems.reporting,
    menuItems.serviceprice,
    menuItems.apisimulator
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
  title: 'Gateway',
  debugMode: true,
  ui: {currentMenuItem: 0},
  languages: [
    {id: 'it', label: 'ITA'},
    {id: 'en', label: 'ENG'},
    {id: 'de', label: 'DEU'}
  ],
  menus,
  menuItems: [
    {to: 'csp', label: 'Csp'},
    {to: 'operator', label: 'MNOs'},
    {to: 'country', label: 'Countries'},
    {to: 'billing', label: 'Billing Prices'},
    {to: 'service', label: 'CSP Services'},
    {to: 'transaction', label: 'Transactions'},
    {to: 'reporting', label: 'Reporting'},
    {to: 'serviceprice', label: ' Wind Service Price'},
    {to: 'apisimulator', label: 'Api Simulator'}
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
