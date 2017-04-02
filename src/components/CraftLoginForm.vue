<template>
  <div id="login-form">
  <div style="color:red" v-if="authError && !loading"><md-icon>warning</md-icon>{{authErrorMessage}}</div>
  <div style="color:green" v-if="loggedIn"><md-icon>info</md-icon>Добро пожаловать, {{user.name}}</div>
  <form @submit.stop.prevent="sendCredentials" v-if="!loading && !loggedIn">
    <md-input-container required v-bind:class="{'md-input-invalid': noLogin }">
    <md-input placeholder="Имя" v-model="user.name" @input="noLogin = false"></md-input>
  </md-input-container>
  <md-input-container md-has-password v-bind:class="{'md-input-invalid': noPass }">
    <label>Пароль</label>
    <md-input type="password" v-model="user.pass" @input="noPass = false"></md-input>
  </md-input-container>
  <md-dialog-actions>
    <md-button class="md-raised md-primary" md-align="end" @click.native.stop.prevent="sendCredentials">Вход</md-button>
  </md-dialog-actions>
  </form>
  <md-spinner md-indeterminate v-if="loading"></md-spinner>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        user: {},
        noLogin: false,
        noPass: false,
        loading: false,
        loggedIn: false,
        authError: false,
        authErrorMessage: ''
      }
    },
    methods: {
      sendCredentials() {
        this.noLogin = false
        this.noPass = false
        var errValidation = false
        if (!this.user.name) {
          this.noLogin = true
          errValidation = true
        }
        if (!this.user.pass) {
          this.noPass = true
          errValidation = true
        }
        if (!errValidation) {
            this.loading = true
            this.sended = true
            this.$http.post(backend + '/user/login?_format=json', this.user, {
              credentials: true,
              headers: {
                 'Content-Type': 'text/plain'
              }}).then(function (response) {
                this.loading = false
                this.loggedIn = true
                this.authError = false
                console.log(response)
                this.$store.commit('logIn', response.body)
                setTimeout(this.$parent.$parent.close(), 2000)

            }, function (response) {
                console.log(response)
                this.loading = false
                this.authError = true
                this.authErrorMessage = response.data.message
                this.loading = false
            });
        }
      }
    }
  }
</script>