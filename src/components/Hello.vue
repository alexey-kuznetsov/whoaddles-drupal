<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <md-button class="md-raised md-primary" @click.native="doSomething">Do something</md-button>
    <div>{{resultMessage}}</div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      resultMessage: ''
    }
  },
  methods: {
    doSomething() {
      this.resultMessage += '-ttt'
      this.$http.get('http://d8/node/2?_format=json').then((response) => {
        // depending on your api, you may or may not have to make the .json() call
        // if your repsonse.body is null, try this
        this.resultMessage = response.body.title[0].value;

      }, (err) => {
        console.log(err)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
