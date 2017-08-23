import Vue from 'vue'
import Router from 'vue-router'
import VueMeta from 'vue-meta'
import Top from '@/pages/Top'
import About from '@/pages/About'
import Skill from '@/pages/Skill'
import Address from '@/pages/Address'

Vue.use(Router)
Vue.use(VueMeta)

export default new Router({
  mode: 'history',
  base: '/',

  routes: [
    {
      path: '/',
      name: 'Top',
      component: Top
    },
    {
      path: '/about/',
      name: 'About',
      component: About
    },
    {
      path: '/skill/',
      name: 'Skill',
      component: Skill
    },
    {
      path: '/address/',
      name: 'Address',
      component: Address
    }
  ]
})
