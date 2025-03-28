import { createRouter, createWebHistory } from 'vue-router'

// Import your page components
import Waitlist from '@/views/WaitlistView.vue'
import Leaderboard from '@/views/LeaderboardView.vue'

const routes = [
  { path: '/', name: 'Home', component: Waitlist },
  { path: '/waitlist-status', name: 'WaitlistStatus', component: Leaderboard },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
