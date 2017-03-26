import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import CraftNode from '@/components/CraftNode'
import CraftNodes from '@/components/CraftNodes'
import CraftDefaultRoute from '@/components/CraftDefaultRoute'

Vue.use(Router)

const Foo = { template: '<div>foo</div>' }

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/contact',
      component: Foo
    },
    {
      path: '/node/:id',
      component: CraftNode
    },
    {
      path: '/articles',
      component: CraftNodes
    },
    {
      path: '/*',
      component: CraftDefaultRoute
    }
  ]
})
