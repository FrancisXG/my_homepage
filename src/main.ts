import { createApp } from 'vue'
import './style.css'
import naive from 'naive-ui'
import router from './router/index.ts'
import App from './App.vue'
// 通用字体
import 'vfonts/Lato.css'
// 等宽字体
import 'vfonts/FiraCode.css'

const app = createApp(App)
const plugins = [naive, router]
plugins.forEach((plugin) => {
  app.use(plugin)
})
app.mount('#app')
