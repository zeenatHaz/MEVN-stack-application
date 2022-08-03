import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/business',
    name: 'business',
  
    component: () => import(/* webpackChunkName: "about" */ '../components/BusinessView.vue')
  },
  {
    path: '/Tech',
    name: 'Tech',
  
    component: () => import( '../components/TechView.vue')
  },
  {
    path: '/science',
    name: 'science',
  
    component: () => import(/* webpackChunkName: "about" */ '../components/ScienceView.vue')
  },
  {
    path: '/finance',
    name: 'finance',
  
    component: () => import(/* webpackChunkName: "about" */ '../components/FinanceView.vue')
  },
  {
    path: '/foodandhealth',
    name: 'foodandhealth',
  
    component: () => import(/* webpackChunkName: "about" */ '../components/FoodAndHealth.vue')
  },
  {
    path: '/sports',
    name: 'sports',
  
    component: () => import( '../components/SportsView.vue')
  },
  {
    path: '/contactus',
    name: 'contactus',

    component: () => import(/* webpackChunkName: "about" */ '../views/ContactUs.vue')
  },
  {
    path: '/notfound',
    name: 'notfound',
   
    component: () => import(/* webpackChunkName: "NotFoundView" */ '../components/common/NotFoundView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
