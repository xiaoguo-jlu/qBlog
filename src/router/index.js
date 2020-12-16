import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../components/HomePage'
import Statics from '../components/Statics'
import Home from '../components/Home'
import Write from '../components/Write'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
      children: [
        {
          path: '/home',
          name: 'home',
          component: Home
        },
        {
          path: '/statics',
          name: 'statics',
          component: Statics
        },
        {
          path: '/write',
          name: 'write',
          component: Write
        }
      ]
    }
  ]
})
