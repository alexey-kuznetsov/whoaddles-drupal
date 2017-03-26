<template>
  <div id="app">
  <div class="phone-viewport">
  <md-toolbar class="md-whiteframe-5dp">
    <md-button class="md-icon-button" @click.native="toggleLeftSidenav">
      <md-icon>menu</md-icon>
    </md-button>

    <h2 class="md-title"><router-link to="/" tag="div">My App</router-link></h2>
  </md-toolbar>

  <md-sidenav class="md-left" ref="leftSidenav">
    <md-toolbar class="md-large">
      <div class="md-toolbar-container">
        <h3 class="md-title">Sidenav content</h3>
      </div>
    </md-toolbar>
     <craft-menu></craft-menu>
  </md-sidenav>
</div>
<div class="container">
    <router-view></router-view>
</div>
  </div>
</template>

<script>
import CraftMenu from '@/components/CraftMenu'
export default {
  name: 'app',
  methods: {
    toggleLeftSidenav() {
      this.$refs.leftSidenav.toggle();
    }
  },
  data () {
    return {
      menu: []
    }
  },
  components: {
    'craft-menu': CraftMenu
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
