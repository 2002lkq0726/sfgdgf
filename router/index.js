import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import News from '@/components/News'
import Hot from '@/components/Hot'
import Film from '@/components/Film'
import Dir from '@/components/Dir'
import Detail from '@/components/Detail'
import Goods from '@/views/goods'

Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: 'home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/news',
    name: 'news',
    component: News,
    children: [
      {
        path: 'film',
        name: 'film',
        component: Film
      },
      {
        path: 'dir',
        name: 'dir',
        component: Dir
      }
    ]
  },
  {
    path: '/hot',
    name: 'hot',
    component: Hot
  },
  {
    path: '/hello',
    name: 'hello',
    component: HelloWorld
  },
  {
    path: '/goods',
    name: 'goods',
    component: Goods
  },
  {
    path: '/news/:id',
    name: 'detail',
    component: Detail
  }
]

export default new Router({
  mode: 'history',
  routes
})
