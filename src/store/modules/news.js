import Axios from 'axios';

const state = {
  news: []
};

const getters = {
  NEWS: state => state.news
};

const mutations = {
  SET_NEWS: (state, payload) => {
    state.news = payload;
  },

  ADD_NEWS: (state, payload) => {
    state.news.push(payload);
  }
};

const actions = {
  GET_NEWS: async (context, payload) => {
    let { data } = await Axios.get('http://localhost:6006/api/getNews');
    context.commit('SET_NEWS', data);
  },

  SAVE_NEWS: async (context, payload) => {
    let { data } = await Axios.post('http://localhost:6006/api/newNews',
      { theme: payload.theme,
        text: payload.text });
    if (data.status == 200) {
      context.commit('ADD_NEWS', payload);
    }
  },

  DELETE_NEWS: async (context, payload) => {
    let { data } = await Axios.delete('http://localhost:6006/api/deleteNews/' + payload.id);
    if (data.status == 200) {
      context.commit('ADD_NEWS', payload);
    }
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
