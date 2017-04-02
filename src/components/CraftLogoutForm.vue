<template>
  <div>
    <md-spinner md-indeterminate v-if="loading"></md-spinner>
    <md-dialog-actions  v-else>
     <md-button class="md-raised md-warn" md-align="end" @click.native.prevent="logout">Выход</md-button>
    </md-dialog-actions>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        loading: false
      }
    },
    methods: {
      logout() {
        this.loading = true
        this.$http.get(backend + '/user/logout?_format=json', {
          headers: {
          'logout_token' : this.$store.state.user.logout_token,
          //'csrf_token': this.$store.state.user.csrf_token,
           //'X-CSRF-Token': this.$store.state.user.csrf_token
        }
      }).then(
        function (response) {
          console.log(response)
          this.loading = false
        }, function (response) {
          console.log(response)
          this.loading = false
        });
      }
    }
  }
</script>