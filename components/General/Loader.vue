<template>
  <!--eslint-disable-->
    <div class="loading-page" v-if="loading">
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
             width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve">
            <rect x="0" y="0" width="4" height="20" fill="#C2C2C2">
              <animate attributeName="opacity" attributeType="XML"
                values="1; .2; 1"
                begin="0s" dur="0.6s" repeatCount="indefinite" />
            </rect>
            <rect x="7" y="0" width="4" height="20" fill="#C2C2C2">
              <animate attributeName="opacity" attributeType="XML"
                values="1; .2; 1"
                begin="0.2s" dur="0.6s" repeatCount="indefinite" />
            </rect>
            <rect x="14" y="0" width="4" height="20" fill="#C2C2C2">
              <animate attributeName="opacity" attributeType="XML"
                values="1; .2; 1"
                begin="0.4s" dur="0.6s" repeatCount="indefinite" />
            </rect>
      </svg>
    </div>
</template>

<script>
  import _delay from 'lodash/delay'

  export default {
    data: () => ({
      loading: false
    }),
    methods: {
      start () {
        this.loading = true
      },
      finish () {
        _delay(() => { this.loading = false }, 400)
      }
    }
  }
</script>

<style scoped>
    .loading-page {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(63, 63, 63, 0.79);
        text-align: center;
        padding-top: 200px;
        font-size: 30px;
        font-family: sans-serif;
        z-index: 9999999;
    }
</style>
