<template>
  <div>
    <div v-for="item in items" :key="item.id">
      <router-link class="md-display-1" :to="item.path">{{item.title}}</router-link>
      <div class="md-body-1" v-html="item.body"></div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        items: []
      }
    },
    mounted () {
       this.$http.get('http://d8/articles').then((response) => {
        this.items = response.body
      }, (err) => {
        console.log(err)
      })
    }
  }
</script>
