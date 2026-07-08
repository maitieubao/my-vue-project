import { createRouter, createWebHistory } from 'vue-router'
import LoginForm from '@/Pages/LoginForm.vue'
import RegisterForm from '@/Pages/RegisterForm.vue'
import ForgetPasswordForm from '@/Pages/ForgetPasswordForm.vue'
import ResetPasswordForm from '@/Pages/ResetPasswordForm.vue'
import VerifyEmailForm from '@/Pages/VerifyEmailForm.vue'

const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'login',
    component: LoginForm,
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterForm,
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: ForgetPasswordForm,
  },
  {
    path: '/reset-password',
    name: 'reset-password',
    component: ResetPasswordForm,
  },
  {
    path: '/verify-email',
    name: 'verify-email',
    component: VerifyEmailForm,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
