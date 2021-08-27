import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'
import Cameras from '../views/Cameras.vue'
import Camera from '../views/Camera.vue'

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
    path: '/cameras/:camera_id',
    name: 'camera',
    component: Camera
  },
  {
    path: '/add_camera',
    name: 'add_camera',
    component: () => import('../views/AddCamera.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
