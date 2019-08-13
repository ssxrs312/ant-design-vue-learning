import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import ButtonDemo from '@/components/ButtonDemo.vue'
import IconDemo from '@/components/IconDemo.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/buttondemo',
      name: 'buttondemo',
      component: ButtonDemo
    },
    {
      path: '/iconDemo',
      name: 'iconDemo',
      component: IconDemo
    },

  ]
})
