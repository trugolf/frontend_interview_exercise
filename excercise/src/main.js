import Vue from 'vue';
import Vuex from 'vuex';
import store from './store';
import router from './router';
import App from './App';
import vuetify from './plugins/vuetify'

// Vue.use(Vuetify);
Vue.config.productionTip = false;
Vue.use(Vuex);

/* eslint-disable no-new */
new Vue({
  router,
  store,
  vuetify,
  render: (h) => {
    return h(App);
  },
}).$mount('#app');
