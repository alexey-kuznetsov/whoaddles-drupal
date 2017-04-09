<template>
  <md-layout md-align="end" v-if="this.$store.state.loggedIn">
      Привет, {{this.$store.state.userName}}!
  </md-layout>
</template>
<script>
  export default {
    data () {
      return {
        uid: 0
      }
    },
     mounted () {
       this.$http.get(backend + '/check', {
        credentials: true,
        headers : {
          'Content-Type': 'text/plain'
        }
      }).then((response) => {
      if ((typeof response.body[0]) !== 'undefined') {
          if (response.body[0].uid[0].value > 0)  {
            console.log(response.body[0].name[0].value)
            this.uid = 1
            var payload = {
              user: response.body[0],
              userName: response.body[0].name[0].value
            }
            this.$store.commit('logIn', payload)
          }
        }
      }, (err) => {
        console.log(err)
      })
    }
  }
</script>