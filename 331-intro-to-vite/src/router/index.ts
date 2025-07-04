import { createRouter, createWebHistory } from 'vue-router'
import EventListViewVue from '@/views/EventListView.vue.vue'
import AboutView from '@/views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'evevnt-list-view',
      component: EventListViewVue,
    },
    {
      path: '/about',
      name: 'about',
    
      component:AboutView
    },
  ],
})

export default router
