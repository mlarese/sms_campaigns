<template>
<div>
        <v-combobox v-if="type=='combo'"
                :items="items"
                :label="$t(label)"
                :item-text="itemText"
                :item-value="compItemValue"
                v-model="filter[compItemValue]"
        />

        <v-select v-else
                flat
                hide-details
                hide-selected
                dense
                :placeholder="$t('Select')"
                class="search-select-component  elevation-0"
                :label="$t(label)"
                :item-text="itemText"
                :item-value="compItemValue"
                :items="items"
                v-model="filter[compItemValue]"

        />
</div>
</template>
<script>
  import _sortBy from 'lodash/sortBy'
  import _reduce from 'lodash/reduce'
  export default {
    props: {
      'name': {default: ''},
      'itemText': {default: null},
      'label': {default: null},
      'storeName': {type: String},
      'type': {default: 'combo'},
      'itemValue': {default: null}
    },
    name: 'SearchSelect',
    computed: {
      compItemValue () {
        if (!this.itemValue) return this.itemText
        return this.itemValue
      },
      filter () {
        return this.$store.state[this.storeName].filter
      },
      items: {

        get () {
          const {storeName, itemText, itemValue} = this

          if (itemText === itemValue || itemValue === null) {
            return _reduce(
              _sortBy(this.$store.state[storeName].list, itemText),
              (r, v) => {
                if (v[itemText]) r.push(v[itemText])
                return r
              }, [])
          } else {
            return this.$store.state[storeName].list
          }
        }

      }
    }
  }
</script>

<style scoped>

</style>
