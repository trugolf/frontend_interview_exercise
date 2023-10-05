import Vue from 'vue';
import Vuex from 'vuex';

//* import the module auto exporter
//* modules will be auto exported and imported now
import modules from './modules';

// Plug Vuex into the Vue application
Vue.use(Vuex);

// Initialize a new Vuex Store
export default new Vuex.Store({
  modules,
});
