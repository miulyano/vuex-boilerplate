import Axios from 'axios';

const state = {
  menu: {}
};

const getters = {
  MENU: state => state.menu
};

const mutations = {
  SET_MENU: (state, payload) => {
    state.menu = payload;
  }
};

const actions = {
  GET_MENU: async (context, payload) => {
    let { data } = await Axios.get('http://localhost:6006/api/getTexts');
    context.commit('SET_MENU', data[data.findIndex(el => el.name === 'menu')]);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
