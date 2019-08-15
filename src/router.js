import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import ButtonDemo from '@/components/ButtonDemo.vue'
import IconDemo from '@/components/IconDemo.vue'
import TableDemo from '@/components/TableDemo.vue'
import FormDemo from '@/components/FormDemo.vue'
import GridDemo from '@/components/GridDemo.vue'

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
    {
      path: '/tableDemo',
      name: 'tableDemo',
      component: TableDemo
    },
    {
      path: '/formDemo',
      name: 'formDemo',
      component: FormDemo
    },
    {
      path: '/gridDemo',
      name: 'gridDemo',
      component: GridDemo
    },
  ]
})
