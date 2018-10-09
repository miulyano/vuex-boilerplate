import Axios from 'axios';

const state = {
  headings: {}
};

const getters = {
  HEADINGS: state => state.headings
};

const mutations = {
  SET_HEADINGS: (state, payload) => {
    state.headings = payload;
  }
};

const actions = {
  GET_HEADINGS: async (context, payload) => {
    let { data } = await Axios.get('http://localhost:6006/api/getTexts');
    context.commit('SET_HEADINGS', data[data.findIndex(el => el.name === 'heading')]);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
