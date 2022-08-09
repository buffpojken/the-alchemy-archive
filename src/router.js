import {createRouter, createWebHashHistory} from 'vue-router'
import Menu from './menu.vue'
import MainMenu from './sections/main_menu.vue'

import SectionMenu from './sections/menu_section.vue'

const routes = [
  {
    path: '/', 
    component: Menu, 
    children: [
      {
        path: '', 
        component: MainMenu, 
        meta: {animation: 'slide-down'}
      }, 
      {
        path: '/mixtures', 
        component: SectionMenu, 
        meta: {sectionName: 'mixturer', animation: 'slide-up'}
      },
      {
        path: '/bases', 
        component: SectionMenu, 
        props: true, 
        meta: {sectionName: 'bases', animation: 'slide-up'}
      },
      {
        path: '/decoctions', 
        component: SectionMenu, 
        props: true, 
        meta: {sectionName: 'decoctions', animation: 'slide-up'}
      },
      {
        path: '/substantia', 
        component: SectionMenu, 
        props: true, 
        meta: {sectionName: 'substantia', animation: 'slide-up'}
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  base: "/"
})

export {
  router
}