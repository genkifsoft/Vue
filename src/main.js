import VueAuth from '@websanova/vue-auth';
import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import mixin from './library/mixin';
import data from "../data.json";
import auth from './router/auth';

import axios from 'axios';

Vue.use(VueAxios, axios);
window.axios = axios;

Vue.router = router;
App.router = Vue.router;
Vue.use(VueRouter);
Vue.use(VueAuth, auth);
Vue.mixin(mixin);

// window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
// require('./library/errorHandler');

import router from './router'

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
