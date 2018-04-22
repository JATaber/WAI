import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Router from 'vue-router'
import Schedule from '@/components/Schedule'
import Contact from '@/components/Contact'
import Stream from '@/components/Stream'
import YouTube from '@/components/YouTube'
import Navbar from '@/components/Navbar'
import Main from '@/components/Main'
import Vuelidate from 'vuelidate'
import VueYoutube from 'vue-youtube'

Vue.use(Router)
Vue.use(BootstrapVue)
Vue.use(Vuelidate)
Vue.use(VueYoutube)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
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
