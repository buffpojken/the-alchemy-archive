import {createApp} from 'vue'
import {router} from './router.js'
import {store} from './store.js'
import { Vue3Mq } from "vue3-mq";
import App from './app.vue'

document.addEventListener('DOMContentLoaded', () => {
  if(window.siteData){
    store.commit('SET_INITIAL', window.siteData)
  }

  let app = createApp(App, {

  }).use(router).use(store).use(Vue3Mq, {
    preset: 'tailwind'
})
  app.mount("#app-anchor") 
});