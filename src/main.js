import Vue from 'vue';
import App from './App.vue';
import router from './routes';
import store from './store';
import './lang/ml';
import './plugins/element.js';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
