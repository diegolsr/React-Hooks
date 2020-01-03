import Vue from 'vue';
import { sync } from 'vuex-router-sync';
import '../node_modules/bulma/css/bulma.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import App from './components/App';
import router from './router';
import store from './store';

sync(store, router);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>',
});
