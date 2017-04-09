// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'vue-material/dist/vue-material.css'
import Resource from 'vue-resource'
import './config.js'
import Vuex from 'vuex'

Vue.config.productionTip = false
var VueMaterial = require('vue-material')

Vue.use(VueMaterial)
Vue.use(Resource)
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    loggedIn: false,
    user: {},
    userName: ''
  },
  mutations: {
    logIn (state, payload) {
      state.user = payload.user
      state.loggedIn = true
      state.userName = payload.userName
    },
    logOut (state) {
      state.user = {}
      state.loggedIn = false
      state.userName = ''
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },

})

Vue.material.registerTheme('about', {
  primary: {
    color: 'indigo',
    hue: 'A200'
  },
  accent: {
    color: 'grey',
    hue: 300
  }
})
