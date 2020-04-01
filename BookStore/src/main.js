import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant';
import 'vant/lib/index.css';
import store from './store';
import axios from 'axios';
import './http-client/index';
Vue.prototype.axios = axios;
Vue.config.productionTip = false;
Vue.use(Vant);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
