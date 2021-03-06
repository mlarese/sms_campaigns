import _cloneDeep from 'lodash/cloneDeep'
import Vue from 'vue'

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
    }
}

const root = {root: true}

export const mutations = {
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
    set$Record (s, p) { s.$record = _cloneDeep(p) },
    setFormValid (s, p) { s.form.valid = p },
    setFormDirty (s, p) { s.form.dirty = p },
    setListMode (s) { s.mode = 'list' },
    setViewMode (s) { s.mode = 'view' },
    setSearchMode (s) { s.mode = 'search' },
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
    setAddMode (state) { state.mode = 'add' }

}
export const actions = {
    load ({dispatch, commit, state}, {id = null, force = true, options = {}}) {
        if (!force && state.loaded) {
            return
        }
        if (id === null) {
            return dispatch('api/get', {url: `/campaigns/landing_pages`, options, debug: false}, root)
                .then(res => {
                    commit('setList', res.data)
                    return res
                })
        } else {
            return dispatch('api/get', {url: `/campaigns/landing_pages/${id}`, options}, root)
                .then(res => {
                    commit('setRecord', res.data)
                    return res
                })
        }
    },
  delete ({dispatch, commit, state}, id) {
    const url = `/campaigns/landing_pages/${id}`
    return dispatch('api/delete', {url}, root)
      .then(res => dispatch('load', {}))
  },
  save ({dispatch, commit, state, getters}) {
    let data = state.$record

    if (getters.isAddMode) {
      return dispatch('api/post', {url: `/campaigns/landing_pages`, data}, root)
        .then(r => {
          commit('addRecord', data)
          commit('set$Record', {})
          return r
        })
    } else {
      let id = data.lp_id
      return dispatch('api/put', {url: `/campaigns/landing_pages/${id}`, data}, root)
        .then(r => {
          commit('addRecord', data)
          commit('set$Record', {})
          return r
        })



    }
  }
}

export const getters = {
    isEditMode: s => s.mode === 'edit',
    isAddMode: s => s.mode === 'add',
    isViewMode: s => s.mode === 'view'
}

