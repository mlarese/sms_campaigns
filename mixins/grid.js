import {mapState, mapGetters, mapActions} from 'vuex'
import {rowsPerPageItems as rowsPerPageItemsDefault} from '../storeimp/api/api-properties'
import OFilterButton from '../components/General/FilterButton'
import OSearchSelect from '../components/General/SearchSelect'
import OJsonExcelCsv from '../components/General/JsonExcelCsv'
import Vue from 'vue'
import {createHOC} from 'vue-hoc'

export const grid = (nameSpace, dateFldName = 'date', rowsPerPageItems = rowsPerPageItemsDefault) => ({
  data () {
    return {
      tableCommon: {
        rowsPerPageText: this.$t('Rows per page'),
        rowsPerPageItems,
        totalItems: 0,
        loading: false
      }
    }
  },
  watch: {
    filterActive () {
      this.grid.pagination.page = 1
    },
    'filter': {
      deep: true,
      handler () {
        this.grid.pagination.page = 1
      }
    }
  },

  methods: {
    ...mapActions(nameSpace, ['delete']),
    onDelete (item, idName) {
      if (!confirm(this.$t('Do you confirm'))) {
        return
      }

      this.delete({item, idName})
        .then(res => res)
        .catch(() => alert('You cannot delete this record.'))
    }
  },
  components: {
    FilterButton: createHOC(OFilterButton, {}, {props: {storeName: nameSpace}}),
    SearchSelect: createHOC(OSearchSelect, {}, {props: {storeName: nameSpace}}),
    JsonExcelCsv: createHOC(OJsonExcelCsv, {}, {props: {name: nameSpace + '.csv', storeName: nameSpace}})
  },
  created () {
    this.tableCommon.totalItems = this.grid.totalItems
    this.tableCommon.loading = this.isAjax
    this.grid.pagination.rowsPerPage = rowsPerPageItems[0]
  },
  computed: {
    ...mapGetters(nameSpace, ['filteredList']),
    ...mapState(nameSpace, ['grid', 'filter']),
    ...mapState('statusActive', {statusActiveItems: 'list'}),
    ...mapState('app', ['isAjax']),
    fltDateFrom: {
      get () {
        if (!this.filter[dateFldName]) return null
        return this.filter[dateFldName][0]
      },
      set (value) {
        if (!this.filter[dateFldName]) {
          Vue.set(this.filter, dateFldName, [value, null])
        } else {
          Vue.set(this.filter[dateFldName], 0, value)
        }
      }
    },
    fltDateTo: {
      get () {
        if (!this.filter[dateFldName]) return null
        return this.filter[dateFldName][1]
      },
      set (value) {
        if (!this.filter[dateFldName]) {
          Vue.set(this.filter, dateFldName, [null, value])
        } else {
          Vue.set(this.filter[dateFldName], 1, value)
        }
      }
    }
  }
})
