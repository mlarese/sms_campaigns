import _cloneDeep from 'lodash/cloneDeep'
import Vue from 'vue'

let today = new Date()
export const state = () => {
    return {
        list: [],
        recordList: [],
        record: {},
        $record: {},
        addRecord: {},
        resetItem: {},
        grid: {pagination: {}},
        mode: 'list',
        searchActive: false,
        filter: {click_date: [today, today]}
    }
}

const root = {root: true}

export const mutations = {
    setSearchActive (state, payload) { state.searchActive = payload },
    setRecordList (state, payload) { state.recordList = payload },
    setPagination (state, payload) { state.pagination = payload },
    setList (state, payload) {
        state.list = payload
    },
    setRecord (state, payload) {
        state.record = _cloneDeep(payload)
        state.$record = _cloneDeep(payload)
        state.loaded = true
    },
    set$Record (state, payload) {
        state.$record = _cloneDeep(payload)
        state.loaded = true
    },
    updateItemList (state,  {data, index}) {
        Vue.set(state.list, index, data)
    },
    addRecord (state,  p ) {
        state.list.push(p)
    },
    reset$Record (state) {
        state.$record = {}
    },
  resetFilter (state) {
    state.filter = {}
  },
    setMode (state, payload) { state.mode = payload },
    setForm (state, payload) { state.form = payload },
    setEditMode (state) { state.mode = 'edit' },
    setAddMode (state) { state.mode = 'add' }

}
export const actions = {
  search ({dispatch, commit, state}) {
    let data = state.filter
    commit('setList', [])

    return dispatch('api/post', {url: `/campaigns/unpaired`, data}, root)
      .then(res => {
        commit('setList', res.data)
        commit('setSearchActive', true)
        return res
      })
  },
  downloadCsv ({dispatch, commit, state}) {
    const url = `/campaigns/unpairedcsv`
    let data = state.filter
    return dispatch('api/post', {url, data}, root)
      .then(res => {
        window.location='https://c2sms.xyz'+res.data.file
        return res
      })
  },
    load ({dispatch, commit, state}, {id = null, force = true, options = {}}) {
        if (!force && state.list.length > 0) {
            return
        }
        if (id === null) {
            return dispatch('api/post', {url: `/campaigns/unpaired`, options, debug: false}, root)
                .then(res => {
                    commit('setList', res.data)
                    return res
                })
        } else {
            return dispatch('api/get', {url: `/campaigns/unpaired/${id}`, options}, root)
                .then(res => {
                    commit('setRecord', res.data)
                    return res
                })
        }
    },
  resetSearch ({dispatch, commit, state}) {
    commit('setSearchActive', false)
    commit('resetFilter')
    commit('setList', [])
  },
}

export const getters = {
    isEditMode: state => state.mode === 'edit',
    isAddMode: state => state.mode === 'add'
}

