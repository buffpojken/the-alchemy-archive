import {createApp} from 'vue'
import {store} from './store.js'
import {fetchRouter} from './router.js'
import { Vue3Mq } from "vue3-mq";
import App from './app.vue'

document.addEventListener('DOMContentLoaded', () => {
  if(window.siteData){
    store.commit('SET_INITIAL', window.siteData)
  }

  let app = createApp(App, {

  }).use(store).use(Vue3Mq, {
    preset: 'tailwind'
  })

  app.use(fetchRouter(app))

  app.mount("#app-anchor") 
});