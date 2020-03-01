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
            return dispatch('api/get', {url: `/campaigns/channels`, options, debug: false}, root)
                .then(res => {
                    commit('setList', res.data)
                    return res
                })
        } else {
            return dispatch('api/get', {url: `/campaigns/channels/${id}`, options}, root)
                .then(res => {
                    commit('setRecord', res.data)
                    return res
                })
        }
    },
      delete ({dispatch, commit, state}, id) {
        const url = `/campaigns/channels/${id}`
        return dispatch('api/delete', {url}, root)
          .then(res => dispatch('load', {}))
      },
      save ({dispatch, commit, state, getters}) {
        let data = state.$record

        if (getters.isAddMode) {
          return dispatch('api/post', {url: `/campaigns/channels`, data}, root)
            .then(r => {
              commit('addRecord', data)
              commit('set$Record', {})
              return r
            })
        } else {
          let id = data.channel_id
          return dispatch('api/put', {url: `/campaigns/channels/${id}`, data}, root)
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
}

