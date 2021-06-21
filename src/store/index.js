import Vuex from 'vuex';
import Vue from 'vue';
import moduleBooksLibrary from './booksLibrary';
import moduleBookDetail from './bookDetail';
import moduleVisitedBooks from './visitedBooks';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    booksLibrary: moduleBooksLibrary,
    visitedBooks: moduleVisitedBooks,
    bookDetail: moduleBookDetail
  }
});

export default store;
