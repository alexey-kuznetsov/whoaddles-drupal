<template>
  <md-list>
    <md-list-item v-for="item in items" :key="item.id">
      <router-link :to="'/' + item.uri" @click.native="toggleNav">{{item.title}}</router-link>
    </md-list-item>
  </md-list>
</template>
<script>
  export default {
    name: 'craft-menu',
    data () {
      return {
        items: [{title: 'no'}]
      }
    },
    mounted () {
       this.$http.get('http://d8/api/menu_items/main?_format=json').then((response) => {
        this.items = response.body

      }, (err) => {
        console.log(err)
      })
    },
    methods: {
      toggleNav() {
        this.$parent.$options.parent.toggleLeftSidenav()
      }
    }
  }
</script>