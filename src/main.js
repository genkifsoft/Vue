import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios';
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import mixin from './library/mixin';
import data from "../data.json";

window.Vue = Vue;
window.axios = require('axios');
window.data = data;

Vue.use(VueAxios, axios);
Vue.use(VueRouter);
Vue.mixin(mixin);


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
