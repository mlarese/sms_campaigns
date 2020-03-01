<!--eslint-disable-->
import _cloneDeep from 'lodash/cloneDeep'
import Vue from 'vue'

<<<<<<< HEAD
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
=======
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
>>>>>>> github/master
}

const root = {root: true}

export const mutations = {
<<<<<<< HEAD
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
    update ({dispatch, commit, state}, {data, id}) {
        const url = `/sms_mo_template/${id}`
        return dispatch('api/put', {url, data}, root)
            .then(() => {
                const index = state.list.findIndex(o => o.code === id)
                commit('updateItemList', {data, index})
                commit('setAddMode')
            })
    },
    selectItem({commit}, item) {
        commit('set$Record', item)
        commit('setEditMode')


    },
    cancelItem({commit}) {
        commit('reset$Record')
        commit('setAddMode')
    },
    save ({dispatch, commit, state, getters}) {
        let data = state.$record

        if (getters.isAddMode) {
            return dispatch('insert', {data})
                .then(r => {
                    commit('addRecord', data)
                    commit('set$Record', {})
                })
        } else {
            let id = data.code
            return dispatch('update', {data, id})

                .then(() => commit('set$Record', {}))
                .then(() => commit('setAddMode'))
        }
    },
    insert ({dispatch, commit}, {data}) {
        const url = `/sms_mo_template`
        return dispatch('api/post', {url, data}, root)
    },
    load ({dispatch, commit, state}, {id = null, force = true, options = {}}) {
        if (!force && state.loaded) {
            return
        }
        if (id === null) {
            return dispatch('api/get', {url: `/campaigns/sms_mo_template`, options, debug: false}, root)
                .then(res => {
                    commit('setList', res.data)
                    return res
                })
        } else {
            return dispatch('api/get', {url: `/campaigns/sms_mo_template/{id}`, options}, root)
                .then(res => {
                    commit('setRecord', res.data)
                    return res
                })
        }
    },
}

export const getters = {
    isEditMode: s => s.mode === 'edit',
    isAddMode: s => s.mode === 'add',
    isViewMode: s => s.mode === 'view'
=======
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
  setMode (state, payload) { state.mode = payload },
  setForm (state, payload) { state.form = payload },
  setEditMode (state) { state.mode = 'edit' },
  setAddMode (state) { state.mode = 'add' }

}
export const actions = {
  load ({dispatch, commit, state}, {id = null, force = true, options = {}}) {
    if (!force && state.list.length > 0) {
      return
    }
    if (id === null) {
      return dispatch('api/get', {url: `/campaigns/smsmotemplate`, options, debug: false}, root)
        .then(res => {
          commit('setList', res.data)
          return res
        })
    } else {
      return dispatch('api/get', {url: `/campaigns/smsmotemplate/${id}`, options}, root)
        .then(res => {
          commit('setRecord', res.data)
          return res
        })
    }
  },
  delete ({dispatch, commit, state}, id) {
    const url = `/campaigns/smsmotemplate/${id}`
    return dispatch('api/delete', {url}, root)
      .then(res => dispatch('load', {}))
  },
  save ({dispatch, commit, state, getters}) {
    let data = state.$record

    if (getters.isAddMode) {
      return dispatch('api/post', {url: `/campaigns/smsmotemplate`, data}, root)
        .then(r => {
          commit('addRecord', data)
          commit('set$Record', {})
          return r
        })
    } else {
      let id = data.brand_id
      return dispatch('api/put', {url: `/campaigns/smsmotemplate/${id}`, data}, root)
        .then(r => {
          commit('addRecord', data)
          commit('set$Record', {})
          return r
        })



    }
  }
}

export const getters = {
  isEditMode: state => state.mode === 'edit',
  isAddMode: state => state.mode === 'add'
>>>>>>> github/master
}

