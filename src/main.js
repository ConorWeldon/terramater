import Vue from 'vue'
import Three from 'three'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import {BootstrapVueIcons } from 'bootstrap-vue'

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
// Vue.use(Css);
// import '@/assets/css/style.css';
// import '../assets/style.css';
import Css from "../src/assets/css/style.css";

Vue.config.productionTip = false

new Vue({
  Three,
  Css,
  router,
  render: h => h(App),
}).$mount('#app')
