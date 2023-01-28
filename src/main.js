import {createApp} from 'vue'
import {store} from './store.js'
import {fetchRouter} from './router.js'
import { Vue3Mq } from "vue3-mq";
import App from './app.vue'

import { I18n } from "i18n-js";
import translations from "./../assets/js/translations.json";

const i18n = new I18n(translations);

i18n.defaultLocale = "sv-SE";
i18n.locale = "sv-SE";
window.i18n = i18n

import TranslationPlugin from './i18n.js'


document.addEventListener('DOMContentLoaded', () => {
  if(window.siteData){
    store.commit('SET_INITIAL', window.siteData)
  }

  let app = createApp(App, {

  }).use(store).use(Vue3Mq, {
    preset: 'tailwind'
  }).use(TranslationPlugin)

  app.use(fetchRouter(app))

  app.mount("#app-anchor") 
});