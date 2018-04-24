// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import LoadScript from 'vue-plugin-load-script'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import VueFire from 'vuefire'
import VueYoutube from 'vue-youtube'
import BootstrapVue from 'bootstrap-vue'
import Vuelidate from 'vuelidate'

Vue.use(BootstrapVue)
Vue.use(LoadScript)
Vue.use(VueFire)
Vue.use(VueYoutube)
Vue.use(Vuelidate)
Vue.component('icon', Icon)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
