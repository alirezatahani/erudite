const moduleVisitedBooks = {
  namespaced: true,

  state: () => ({
    data: []
  }),
  mutations: {
    addToVisited(state, payload) {
      state.data = [...state.data, payload];
    }
  },
  actions: {
    addToVisited({ commit }, book) {
      commit('addToVisited', book);
    }
  },
  getters: {
    getData: state => {
      return state.data;
    }
  }
};

export default moduleVisitedBooks;
