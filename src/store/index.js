import Vue from "vue";
import Vuex from "vuex";
import axios from "axios"
import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex);
Vue.use(axios)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {},
  plugins: [createPersistedState()]
});
