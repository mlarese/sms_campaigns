<template>
  <div>
    <input
      v-model="record.name"
      type="text" ><br>
    <input
      v-model="record.surname"
      type="text" ><br>
    <input
      v-model="record.email"
      type="text" ><br>
    <v-btn
      color="red"
      @click="onSave">Save</v-btn>
    <v-btn
      color="red"
      @click="doAlert">alert</v-btn>
    <v-btn
      color="red"
      @click="parentdo">parentdo</v-btn>
  </div>
</template>
<script>
  export default {
    components: {},
    //props: ['record'],
    methods: {
      doAlert () {
        console.log('---- alert')
      },
      onSave () {
        console.log('---- save')
        this.$emit('save', {record: this.record})
        console.log('---- save end')
      }
    }
  }
</script>

<style>

</style>
