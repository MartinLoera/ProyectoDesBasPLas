import Vue from 'vue'
import VueRouter from 'vue-router'
import LandingPage from "@/views/LandingPage";
import Login from "@/views/Login";
import MainPage from "@/views/MainPage";
import InfluencerProfile from '@/views/InfluencerProfile';
Vue.use(VueRouter)

const routes = [
    {
      path :'*',
      name: 'All',
      component: LandingPage
    },
    {
      path:'/Login',
      name:'Login',
      component: Login
    },
    {
      path:'/Main',
      name:'Main',
      component: MainPage
    },
    {
      path: '/influencerProfile',
      name: 'InfluencerProfile',
      component: InfluencerProfile
    },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
