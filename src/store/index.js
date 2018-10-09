import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';
import news from './modules/news';
import menu from './modules/menu';
import heading from './modules/heading';

Vue.use(Vuex);

export default new Vuex.Store({

  state: {},
  getters : {},
  mutations: {},
  actions: {},

  modules : {
    news,
    menu,
    heading
  }
});
