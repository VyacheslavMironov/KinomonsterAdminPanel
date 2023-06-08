import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/all/movie',
    name: 'all_movie',
    component: () => import('@/views/AllMovieView.vue')
  },
  {
    path: '/create/movie',
    name: 'create_movie',
    component: () => import('@/views/CreateMovieView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
