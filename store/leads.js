import _cloneDeep from 'lodash/cloneDeep'
import Vue from 'vue'
import addDays from 'date-fns/addDays'
import format from "date-fns/format";
let today = new Date()
const sToday = format(today,'yyyy-MM-dd')


const newFilter = () => ({
  sms_mo_date: [sToday, sToday],
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
        mode: 'list',
        searchActive: false,
        filter: {}
    }
}

const root = {root: true}

export const mutations = {
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
    setMode (state, payload) { state.mode = payload },
    setEditMode (state) { state.mode = 'edit' },
    setAddMode (state) { state.mode = 'add' },
    resetFilter (state) {
      state.filter = newFilter()
    },
    setSortDefault(state) {
      state.grid.sort = {}
    }

}
export const actions = {
    downloadCsv ({dispatch, commit, state}) {
      const url = `/campaigns/leadscsv`
      let data = state.filter
      return dispatch('api/post', {url, data}, root)
        .then(res => {
          window.location='https://c2sms.xyz'+res.data.file
          return res
        })
    },
    downloadLog ({dispatch, commit, state}, id) {
      const url = `/campaigns/leadslog/${id}`
      let data = state.filter
      return dispatch('api/get', {url}, root)
        .then(res => {
          window.location='https://c2sms.xyz'+res.data.file
          return res
        })
    },
    search ({dispatch, commit, state}) {
      let data = state.filter
      commit('setList', [])
      return dispatch('api/post', {url: `/campaigns/leads`, data}, root)
        .then(res => {
          commit('setList', res.data)
          commit('setSearchActive', true)
          return res
        })
    },
      resetSearch ({dispatch, commit, state}) {
        commit('setSearchActive', false)
        commit('resetFilter')
        commit('setList', [])
      }
}

export const getters = {
    isEditMode: state => state.mode === 'edit',
    isAddMode: state => state.mode === 'add'
}

