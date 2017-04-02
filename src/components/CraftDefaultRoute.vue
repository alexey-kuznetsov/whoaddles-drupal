<template>
  <div>
  <md-spinner md-indeterminate v-if="loading"></md-spinner>
  <div v-if="!loading && type === 'node'">
    <craft-node-render></craft-node-render>
  </div>
  <div v-if="!loading && type === '404'">Page not found :(</div>
  </div>
</template>
<script>
  import CraftNodeRender from '@/components/CraftNodeRender'
  export default {
    data () {
      return {
        entity: {},
        type: '',
        loading: true
      }
    },
    mounted () {
      this.$http.get(backend + this.$route.path + '?_format=json', {
        headers: {
          //'logout_token' : this.$store.state.user.logout_token,
          'csrf_token': this.$store.state.user.csrf_token,
          'X-CSRF-Token': this.$store.state.user.csrf_token,
          'Accept': 'application/json',
          'Content-Type': 'application/hal+json',
          'Authorization': 'Basic ' + btoa('tester:tester')
        }
      }).then((response) => {
        if (typeof(response.body.nid !== undefined)) {
          this.entity = response.body
          this.type = 'node'
        } else {
          this.type = '404'
        }

        this.loading = false
      }, (err) => {
        if (err.status === 404) {
          this.type = '404'
          this.loading = false
        } else {
          console.log(err)
        }
      })
    },
    components: {
      'craft-node-render': CraftNodeRender
    }
  }
</script>