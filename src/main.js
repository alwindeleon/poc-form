import Vue from 'vue'
import Vuelidate from 'vuelidate'
import JsonCSV from 'vue-json-csv'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.component('downloadCsv', JsonCSV)

Vue.use(Vuelidate)
Vue.use(BootstrapVue)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
