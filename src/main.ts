import { createApp } from 'vue'
import './assets/normalize.css'
import App from './App.vue'
import 'vue-fullpage.js/dist/style.css'
// import './fullpage.scrollHorizontally.min' // Optional. When using fullpage extensions
// @ts-ignore
import VueFullPage from 'vue-fullpage.js'

createApp(App).use(VueFullPage).mount('#app')
