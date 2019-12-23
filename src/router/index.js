import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Main from '../views/Main.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main,
  },
  {
    path: '/app',
    name: 'app',
    component: Home,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
