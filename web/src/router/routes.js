
import RequireAuth from '../utils/auth'

const routes = [
  {
    path: '/auth',
    name: 'auth',
    component: () => import('layouts/Auth.vue'),
    children: [
      { path: '/login', component: () => import('pages/Auth/Login.vue') },
      { path: '/register', component: () => import('pages/Auth/Register.vue') },
      { path: '/forgot-password', component: () => import('pages/Auth/ForgotPassword.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    beforeEnter: RequireAuth,
    children: [
      { path: '', component: () => import('pages/Dashboard.vue') },
      { path: '/profile', component: () => import('pages/Profile.vue') },
      { path: '/daily-question', component: () => import('pages/DailyQuestion.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error/Error404.vue')
  })
}

export default routes
