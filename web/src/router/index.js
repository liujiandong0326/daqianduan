import Vue from 'vue'
import VueRouter from 'vue-router'

const Login = () => import(/* webpackChunkName: 'login' */ '@/views/login')
const Reg = () => import(/* webpackChunkName: 'reg' */ '@/views/reg')
const Forget = () => import(/* webpackChunkName: 'forget' */ '@/views/forget')

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/reg',
    name: 'reg',
    component: Reg,
  },
  {
    path: '/forget',
    name: 'forget',
    component: Forget,
  },
]

const router = new VueRouter({
  routes,
})

export default router
