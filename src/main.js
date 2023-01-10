import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import InstallerBio from '@/components/InstallerBio';
import AppointmentConfirmation from '@/components/AppointmentConfirmation';

import moment from 'moment';
Vue.prototype.moment = moment;

Vue.config.productionTip = false

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: App }, // No props, no nothing
    { path: '/:id', component: InstallerBio },
    { path: '/consumer/:id', component: AppointmentConfirmation },
  ]
})

Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).format('DD-MM-YYYY @ HH:mm')
  }
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
