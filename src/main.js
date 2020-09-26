import Vue from 'vue';
import App from './App.vue';
import router from './router';
import i18n from './i18n';

Vue.config.productionTip = false

new Vue({
  el: '#app',
  i18n,
  router,
  template: '<App/>',
  components: { App }
});
