import { createApp } from 'vue'
import './assets/normalize.css'
import App from './App.vue'
import 'vue-fullpage.js/dist/style.css'
// import './fullpage.scrollHorizontally.min' // Optional. When using fullpage extensions
// @ts-ignore
import VueFullPage from 'vue-fullpage.js'
import 'animate.css/animate.min.css' //引入
import './global.scss';

// 如果您正在使用CDN引入，请删除下面一行。
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(VueFullPage).mount('#app')
