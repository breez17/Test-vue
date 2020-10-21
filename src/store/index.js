import Vue from 'vue'
import Vuex from 'vuex'
import bots from './bots';
import modals from './modals';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  getters: {
  },
  modules: {
    bots,
    modals
  }
})
