import { getBooks } from '../services/books';
import { getQueryParams } from '../utils/queryParams';

const moduleBooksLibrary = {
  namespaced: true,

  state: () => ({
    loading: false,
    data: [],
    meta: {
      current: {},
      total: 1
    },
    error: ''
  }),
  mutations: {
    fetchData(state) {
      state.loading = true;
    },
    fetchSuccess(state, payload) {
      state.loading = false;
      state.data = payload.results;
      state.meta = {
        current: {
          page: Number(
            getQueryParams(
              payload.next
                ? payload.next.split('?')[1]
                : payload.previous.split('?')[1]
            ).page - 1
          )
        },
        total: payload.count,
        next: payload.next,
        previous: payload.previous
      };
    },
    fetchFailure(state, payload) {
      state.loading = false;
      state.error = payload;
    }
  },
  actions: {
    fetchData({ commit }, page = 1) {
      commit('fetchData');
      getBooks(page)
        .then(response => {
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

export default moduleBooksLibrary;
