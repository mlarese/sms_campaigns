import _cloneDeep from 'lodash/cloneDeep'
import Vue from 'vue'
import addDays from 'date-fns/addDays'
let today = new Date()
const newFilter = () => ({
  click_date: [addDays(today,-30), today],
  country: 'ITA'
})
export const state = () => {
    return {
        list: [],
        recordList: [],
        record: {},
        $record: {},
        addRecord: {},
        resetItem: {},
        grid: {
            sort:{},
            pagination: {
              search: '',
              descending: true,
              page: 1,
              pages: 0,
              rowsPerPage: 100,
              totalItems: 0
            }
        },
        gridReporting: {
            sort:{},
            pagination: {
              search: '',
              descending: true,
              page: 1,
              pages: 0,
              rowsPerPage: 100,
              totalItems: 0
            }
        },
        mode: 'list',
        searchActive: false,
        filter: newFilter()
    }
}

const root = {root: true}

export const mutations = {
    setRepPagination (state, totalItems) {
      state.gridReporting.pagination.totalItems = totalItems
      state.gridReporting.pagination.pages = Math.ceil(state.gridReporting.pagination.totalItems / state.gridReporting.pagination.rowsPerPage)
    },
    setPagination (state, totalItems) {
        state.grid.pagination.totalItems = totalItems
        state.grid.pagination.pages = Math.ceil(state.grid.pagination.totalItems / state.grid.pagination.rowsPerPage)
    },
    setPage (state, page) {
      state.grid.pagination.page = page
    },
    setSearchActive (state, payload) { state.searchActive = payload },
    setRecordList (state, payload) { state.recordList = payload },
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
    setMode (state, payload) { state.mode = payload },
    setForm (state, payload) { state.form = payload },
    setEditMode (state) { state.mode = 'edit' },
    setAddMode (state) { state.mode = 'add' },
    resetFilter (state) {
      state.filter = newFilter()
    }

}
export const actions = {
    search ({dispatch, commit, state}) {
      let data = {...state.filter, ...state.grid}
      commit('setList', [])
      commit('setPage', 1)
      return dispatch('api/post', {url: `/campaigns/clicks`, data}, root)
        .then(res => {
          commit('setList', res.data.items)
          commit('setPagination', res.data.total_items)
          commit('setSearchActive', true)
          return res
        })
    },
    searchPage ({dispatch, commit, state}) {
      let data = {...state.filter, ...state.grid}
      return dispatch('api/post', {url: `/campaigns/clicks`, data}, root)
        .then(res => {
          commit('setList', res.data.items)
          commit('setPagination', res.data.total_items)

          return res
        })
    },
    reporting ({dispatch, commit, state}) {
      let data = state.filter
      commit('setList', [])
      return dispatch('api/post', {url: `/campaigns/reporting`, data}, root)
        .then(res => {
          commit('setList', res.data)
          commit('setRepPagination',res.data.length)
          commit('setSearchActive', true)
          return res
        })
    },
    resetSearch ({dispatch, commit, state}) {
        commit('setSearchActive', false)
        commit('resetFilter')
        commit('setList', [])
    },
    load ({dispatch, commit, state}, {id = null, force = true, options = {}}) {
        if (!force && state.loaded) {
            return
        }
        if (id === null) {
            return dispatch('api/post', {url: `/campaigns/clicks`, options, debug: false}, root)
                .then(res => {
                    commit('setList', res.data)
                    commit('setPagination')
                    return res
                })
        } else {
            return dispatch('api/get', {url: `/campaigns/clicks/{id}`, options}, root)
                .then(res => {
                    commit('setRecord', res.data)
                    return res
                })
        }
    },
}

export const getters = {
    isEditMode: state => state.mode === 'edit',
    isAddMode: state => state.mode === 'add'
}

