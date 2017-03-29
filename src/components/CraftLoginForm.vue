<template>
  <div id="login-form">
    <md-input-container>
    <md-input placeholder="Имя" v-model="user.name"></md-input>
  </md-input-container>
  <md-input-container md-has-password>
    <label>Пароль</label>
    <md-input type="password" v-model="user.pass"></md-input>
  </md-input-container>
  <md-dialog-actions>
    <md-button class="md-raised md-primary" md-align="end" @click.native="sendCredentials">Вход</md-button>
  </md-dialog-actions>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        user: {}
      }      
    },
    methods: {
      sendCredentials() {
        console.log(this.user)
        this.$parent.$parent.close()
      }
    }
  }
</script>