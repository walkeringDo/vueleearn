import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import HelloWorld from '@/components/HelloWorld'
import H1 from '@/components/H1'
import H2 from '@/components/H2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld,
      children: [{path: '/h1', name: 'H1', component: H1},
        {path: '/h2', name: 'H2', component: H2}
      ]
    }
  ]
})
