import { getBookDetail } from '../services/books';

const moduleBookDetail = {
  namespaced: true,

  state: () => ({
    loading: false,
    data: {
      formats: {}
    },
    error: ''
  }),
  mutations: {
    fetchData(state) {
      state.loading = true;
    },
    fetchSuccess(state, payload) {
      state.loading = false;
      state.data = payload;
    },
    fetchFailure(state, payload) {
      state.loading = false;
      state.error = payload;
    }
  },
  actions: {
    fetchData({ commit }, bookId) {
      commit('fetchData');
      getBookDetail(bookId)
        .then(response => {
          console.log(response.data, 'response.data');
          commit('fetchSuccess', response.data);
        })
        .catch(e => {
          commit('fetchFailure', e);
        });
    }
  },
  getters: {
    getData: state => {
      return state.data;
    },
    getMeta: state => {
      return state.meta;
    },
    getLoading: state => {
      return state.loading;
    }
  }
};

export default moduleBookDetail;
