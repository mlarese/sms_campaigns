import _has from 'lodash/has'

/**
 * ruoli:
 *    admin
 *
 *
 */
const menuItems = {
    Brands: {to: 'brands', label: 'Brands'},
    Channels: {to: 'channel', label: 'Channels'},
    smsmotemplate: {to: 'smsmotemplate', label: 'SMS MO Templates'},
    brandchannelcpa: {to: 'brandchannelcpa', label: 'Brand Channel CPA'},
    badword: {to: 'badword', label: 'Bad Words'}
}


const menus = {
    Admin: [
        menuItems.brands,
        menuItems.channel,
        menuItems.smsmotemplate,
        menuItems.brandchannelcpa,
        menuItems.badword
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
        {to: 'smsmotemplate', label: 'SMS MO Templates'},
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
    role: (s, g, rs) => !_has(rs, 'auth.user.role') ? 'guest' : rs.auth.user.role,
    user: (s, g, rs) => !_has(rs, 'auth.user') ? '' : rs.auth.user,
    userName: (s, g, rs) => !_has(rs, 'auth.user.userName') ? '' : rs.auth.user.userName,
    menuItems: (s, g) => s.menus[g.role]
}
