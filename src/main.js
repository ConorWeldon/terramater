// imports components downloaded by the terminal like Vue, Router and Bootstrap
import Vue from 'vue'
import Three from 'three'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import {BootstrapVueIcons } from 'bootstrap-vue'

// import VueThreejs from 'vue-threejs'
// Vue.use(VueThreejs)

// Vue using bootstrap
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

import Css from "../src/assets/css/style.css";

Vue.config.productionTip = false

new Vue({
  Three,
  Css,
  router,
  render: h => h(App),
}).$mount('#app')
