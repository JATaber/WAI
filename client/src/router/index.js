import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Router from 'vue-router'
import Posts from '@/components/Posts'
import Schedule from '@/components/Schedule'
import Contact from '@/components/Contact'
import Stream from '@/components/Stream'
import YouTube from '@/components/YouTube'
import Navbar from '@/components/Navbar'
import Main from '@/components/Main'
import Vuelidate from 'vuelidate'

Vue.use(Router)
Vue.use(BootstrapVue)
Vue.use(Vuelidate)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/posts',
      name: 'Posts',
      component: Posts
    },
    {
      path: '/schedule',
      name: 'Schedule',
      component: Schedule
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/stream',
      name: 'Stream',
      component: Stream
    },
    {
      path: '/youtube',
      name: 'YouTube',
      component: YouTube
    },
    {
      path: '/nav',
      name: 'Nav',
      component: Navbar
    }
  ]
})
