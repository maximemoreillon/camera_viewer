import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'
import Cameras from '../views/Cameras.vue'
import Camera from '../views/Camera.vue'
import AddCamera from '../views/AddCamera.vue'

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
    path: '/cameras/new',
    name: 'add_camera',
    component: AddCamera
  },
  {
    path: '/cameras/:camera_id',
    name: 'camera',
    component: Camera
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
