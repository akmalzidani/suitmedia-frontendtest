import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ServicesView from '@/views/ServicesView.vue'
import CareersView from '@/views/CareersView.vue'
import ContactsView from '@/views/ContactsView.vue'
import IdeasView from '@/views/IdeasView.vue'
import IdeaItem from '@/components/IdeaItem.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/services',
      name: 'services',
      component: ServicesView
    },
    {
      path: '/careers',
      name: 'careers',
      component: CareersView
    },
    {
      path: '/ideas',
      name: 'ideas',
      component: IdeasView
    },
    {
      path: '/idea/:slug',
      name: 'idea-item',
      component: IdeaItem
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: ContactsView
    },
    
  ]
})

export default router
