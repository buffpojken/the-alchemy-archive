import {createRouter, createWebHashHistory} from 'vue-router'
import {store} from './store.js'
import MobileMenu from './components/mobile/menu_wrapper.vue'
import SectionMenu from './components/mobile/menu_section.vue'

import MainMenu from './components/mobile/main_menu.vue'

import TabletMenu from './components/tablet/menu.vue'

import DrinkView from './sections/drink_view.vue'

function getMenuWrapper(){
  if(router.$mq.smMinus){
    return MobileMenu    
  }else{
    return TabletMenu
  }
}

function getMenuComponent(){
  if(router.$mq.smMinus){
    return MainMenu    
  }else{
    return TabletMenu
  }
}

function getMenuSectionComponent(){
  if(router.$mq.smMinus){
    return SectionMenu    
  }else{
    return TabletMenu
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