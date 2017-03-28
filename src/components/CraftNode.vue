<template>
  <div class="node">
  <md-spinner md-indeterminate v-if="loading"></md-spinner>
    <div v-if="!loading">
    <h2 class="md-display-2">{{node.title}}</h2>
    <div class="md-body-1" v-html="node.body"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CraftNode',
  data () {
    return {
      node: {
        title: '',
        body: ''
      },
      loading: false
    }
  },
  mounted () {
    this.loading = true
      this.$http.get(backend + '/node/' + this.$route.params.id + '?_format=json').then((response) => {
        this.node.title = response.body.title[0].value
        this.node.body = response.body.body[0].value
        this.loading = false
      }, (err) => {
        console.log(err)
      })
  }
}
</script>