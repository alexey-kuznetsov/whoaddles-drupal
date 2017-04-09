<template>
  <div id="app">
  <div class="phone-viewport">
  <md-toolbar class="md-whiteframe-5dp">
    <md-button class="md-icon-button" @click.native="toggleLeftSidenav">
      <md-icon>menu</md-icon>
    </md-button>

    <h2 class="md-title"><router-link to="/" tag="div">My App</router-link></h2>
    <craft-user-check></craft-user-check>
  </md-toolbar>

  <md-sidenav class="md-left" ref="leftSidenav">
    <md-toolbar class="md-large">
      <div class="md-toolbar-container">
        <h3 class="md-title">Sidenav content</h3>
      </div>
    </md-toolbar>
     <craft-menu></craft-menu>
      <md-dialog md-open-from="#craftLogin" md-close-to="#custom" ref="craftLogin">
        <md-dialog-title>Вход на сайт</md-dialog-title>
        <md-dialog-content><craft-login-form></craft-login-form></md-dialog-content>
      </md-dialog>
      <md-dialog md-open-from="#craftLogout" md-close-to="#custom" ref="craftLogout">
        <md-dialog-title>Выйти?</md-dialog-title>
        <md-dialog-content><craft-logout-form></craft-logout-form></md-dialog-content>
      </md-dialog>
      <md-button class="md-fab md-fab-bottom-right" id="craftLogin" @click.native="openDialog('craftLogin')" v-if="!loggedIn">
        <md-icon>info</md-icon>
      </md-button>
      <md-button class="md-fab md-fab-bottom-right" id="craftLogout" @click.native="openDialog('craftLogout')" v-else>
        <md-icon>warning</md-icon>
      </md-button>
  </md-sidenav>
</div>
<div class="container">
    <router-view></router-view>
</div>
  </div>
</template>

<script>
import CraftMenu from '@/components/CraftMenu'
import CraftLoginForm from '@/components/CraftLoginForm'
import CraftLogoutForm from '@/components/CraftLogoutForm'
import CraftUserCheck from '@/components/CraftUserCheck'
export default {
  name: 'app',
  methods: {
    toggleLeftSidenav() {
      this.$refs.leftSidenav.toggle();
    },
    openDialog(ref) {
      this.$refs[ref].open();
    },
    closeDialog(ref) {
      this.$refs[ref].close();
    }
  },
  data () {
    return {
      menu: []
    }
  },
  components: {
    'craft-menu': CraftMenu,
    'craft-login-form': CraftLoginForm,
    'craft-logout-form': CraftLogoutForm,
    'craft-user-check' : CraftUserCheck
  },
  computed: {
    loggedIn: function () {
      return this.$store.state.loggedIn
    }
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.container {
  width: 1200px;
  margin: 0 auto;
  padding: 32px 16px;
}

</style>
