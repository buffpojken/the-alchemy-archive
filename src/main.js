import {createApp} from 'vue'
import {router} from './router.js'
import App from './app.vue'


let app = createApp(App, {

}).use(router)
app.mount("#app-anchor") 