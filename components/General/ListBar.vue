<template>
  <!--eslint-disable-->
    <div>
        <v-layout  row class="title">{{$t(title)}}</v-layout>
        <v-layout row>
            <v-flex xs6 class="my-2">
                {{$t(subTitle)}}
            </v-flex>
            <v-spacer></v-spacer>
            <v-btn dark :to="to" :color="color" round class="elevation-0 mb-3">{{$t(caption)}}</v-btn>
        </v-layout>
    </div>
</template>
<script>
  export default {
    props: ['title', 'subTitle', 'caption', 'to', 'color']
  }
</script>
