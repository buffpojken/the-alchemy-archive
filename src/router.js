import {createRouter, createWebHashHistory} from 'vue-router'
import {store} from './store.js'
import Menu from './menu.vue'
import MainMenu from './sections/main_menu.vue'

import SectionMenu from './sections/menu_section.vue'
import TabletSectionMenu from './sections/ipad_menu_section.vue'

import DrinkView from './sections/drink_view.vue'

function getMenuWrapper(){
  if(router.$mq.smMinus){
    return Menu    
  }else{
    return TabletSectionMenu
  }
}

function getMenuComponent(){
  if(router.$mq.smMinus){
    return MainMenu    
  }else{
    return TabletSectionMenu
  }
}

function getMenuSectionComponent(){
  if(router.$mq.smMinus){
    return SectionMenu    
  }else{
    return TabletSectionMenu
  }
}

const routes = [
  {
    path: '/', 
    component: getMenuWrapper, 
    children: [
      {
        path: '', 
        component: getMenuComponent, 
        meta: {animation: 'slide-down'}
      }, 
      {
        path: '/mixtures', 
        component: getMenuSectionComponent, 
        meta: {key: 'mixtures', animation: 'slide-up'}
      },
      {
        path: '/bases', 
        component: getMenuSectionComponent, 
        props: true, 
        meta: {key: 'bases', animation: 'slide-up'}
      },
      {
        path: '/decoctions', 
        component: getMenuSectionComponent, 
        props: true, 
        meta: {key: 'decoctions', animation: 'slide-up'}
      },
      {
        path: '/substantia', 
        component: getMenuSectionComponent, 
        props: true, 
        meta: {key: 'substantia', animation: 'slide-up'}
      }
    ]
  }, 
  {
    path: '/drinks/:slug', 
    component: DrinkView, 
    props: true
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  base: "/"
})

function fetchRouter(app){
  router.$mq = app._context.provides.mq
  return router
}

export {
  fetchRouter
}