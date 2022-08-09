import {createRouter, createWebHistory} from 'vue-router'
import Frontpage from './frontpage.vue'

const routes = [
  {
    path: '/mobile', 
    component: Frontpage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  base: "/"
})

export {
  router
}