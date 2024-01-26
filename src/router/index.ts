import { createRouter, createWebHistory } from 'vue-router'
import home from '@/pages/home/index.vue'
import chat from '@/pages/chat/index.vue'

const routes = [
  { path: '/', name: 'home', component: home },
  { path: '/chat', name: 'chat', component: chat }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
