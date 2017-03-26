<template>
  <div class="node">
    <h2 class="md-display-2">{{entity.title}}</h2>
    <div class="md-body-1" v-html="entity.body"></div>
  </div>
</template>
<script>
export default {
  name: 'CraftNodeRender',
  data () {
    return {
      entity: {
        title:'',
        body: ''
      }
    }
  },
  mounted () {
    this.entity.title = this.$parent.entity.title[0].value
    this.entity.body = this.$parent.entity.body[0].value
  }
}
</script>