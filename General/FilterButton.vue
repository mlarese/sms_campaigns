<template>
  <span>
    <v-btn
      v-if="!filterActive"
      :disabled="buttonDisabled"
      color="success"
      small
      class="elevation-0"
      @click="filterList">{{ $t('search') }}</v-btn>
    <v-btn
      v-else
      color="success"
      small
      class="elevation-0"
      @click="unfilterList">{{ $t('Reset') }}</v-btn>
  </span>


</template>

<script>
  import _isEmpty from 'lodash/isEmpty'
  export default {
    computed: {
      buttonDisabled () {
        return _isEmpty(this.$store.state[this.storeName].filter)
      },
      filterActive () {
        return this.$store.state[this.storeName].filterActive
      }
    },
    methods: {
      filterList () {
        this.$store.commit(`${this.storeName}/setFilterActive`, true, {root: true})
        this.$emit('on-filter')
      },
      unfilterList () {
        this.$store.commit(`${this.storeName}/setFilterActive`, false, {root: true})
        this.$emit('on-unfilter')
      }
    }
  }
</script>
