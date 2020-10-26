import Vue from "vue";
import Vuex from "vuex";
import user from "./modules/user";
import setting from "./modules/setting";
import charts from "./modules/charts";
import getters from "./getters";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    setting,
    charts,
  },
  state: {},
  mutations: {},
  actions: {},
  getters,
});
