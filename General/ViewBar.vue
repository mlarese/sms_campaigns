<template>
  <v-container fill-height>
    <v-flex 
      xs12 
      sm12 
      md12>
      <v-card>
        <v-toolbar 
          extended
          color="teal lighten-3"
          dark
          scroll-off-screen
        >
          <v-flex class="btn-back">
            <v-btn 
              :to="to" 
              flat 
              icon 
              color="orange">
              <v-icon flat>reply</v-icon>
            </v-btn>
          </v-flex>
          <spacer/>
          <v-btn 
            flat 
            icon 
            color="red">
            <v-icon>delete</v-icon>
          </v-btn>
          <v-btn
            color="pink"
            small
            absolute
            bottom
            right
            fab
            @click.native="e31 = !e31"
          >
            <v-icon>create</v-icon>
          </v-btn>
        </v-toolbar>
        <v-card-text 
          style="height: 236px;" 
          class="grey lighten-5">hhghggghgh</v-card-text>
      </v-card>
    </v-flex>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        e3: 1,
        e31: true
      }
    }
  }
</script>

<style>

</style>
