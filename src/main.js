import Vue from 'vue'
// import THREE from 'three'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import {BootstrapVueIcons } from 'bootstrap-vue'

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons)

// import '@/assets/css/style.css';
// import '../assets/style.css';
import css from "../src/assets/css/style.css";

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
