import {mapState, mapMutations, mapActions, mapGetters} from 'vuex'
import _cloneDeep from 'lodash/cloneDeep'
import {mockApp} from '../storeimp/api/api-properties'

export const editDialog = (nameSpace, idName, componentForm, componentView, emptyRecord = {}) => ({
  computed: {
    ...mapState(nameSpace, ['list', '$record']),
    ...mapGetters(nameSpace, ['isAddMode', 'isEditMode', 'isViewMode']),
    form () {
      if (this.isEditMode) {
        return componentForm
      } else if (this.isViewMode) {
        return componentView
      } else {
        return componentForm
      }
    }
  },
  data () {
    return {
      mounting: false,
      dialog: false,
      index: -1
    }
  },
  methods: {
    ...mapActions(nameSpace, ['save', 'delete']),
    ...mapMutations(nameSpace, ['set$Record', 'setAddMode', 'setEditMode', 'setViewMode', 'setMountingForm']),
    onClose () {
      this.index = -1
      this.dialog = false
      this.setMountingForm(true)
      this.set$Record({})
      this.$nextTick(() => this.setMountingForm(false))
    },
    onAdd () {
      this.setMountingForm(true)
      this.set$Record(emptyRecord)
      this.setAddMode()
      this.index = -1
      this.dialog = true
      this.$nextTick(() => this.setMountingForm(false))
    },
    onSave () {
      this.save({data: this.$record, id: this.$record[idName]})
        .then(res => {
          if (this.isAddMode) {
            if (mockApp) {
              this.$record[idName] = res.data
              this.list.push(_cloneDeep(this.$record))
            } else {
              this.$store.dispatch(nameSpace + '/load', {force: true}, {root: true})
            }
          } else {
            this.$set(this.list, this.index, this.$record)
            this.index = -1
          }
          this.dialog = false
          this.$nextTick(() => this.setMountingForm(false))
        })
    },
    onEdit (item) {
      this.setMountingForm(true)
      this.set$Record(_cloneDeep(item))
      this.index = this.list.indexOf(item)
      this.setEditMode()
      this.dialog = true
      this.$nextTick(() => this.setMountingForm(false))
    },
    onView (item) {
      this.set$Record(_cloneDeep(item))
      this.setViewMode()
      this.index = this.list.indexOf(item)
      this.$nextTick(() => this.setMountingForm(false))
      this.dialog = true
    }
  }
})
