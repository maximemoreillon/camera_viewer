import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'
import Cameras from '../views/Cameras.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: { name: 'cameras' }
  },
  {
    path: '/cameras',
    name: 'cameras',
    component: Cameras
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
