import client from '../utils/client';
import store from '../store';
import NProgress from 'nprogress';

export default function setup() {
  client.interceptors.request.use(
    function(config) {
      const token = store.getters.token;
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      NProgress.start();
      return config;
    },
    function(err) {
      return Promise.reject(err);
    }
  );
  client.interceptors.response.use(response => {
    NProgress.done();
    return response;
  });
}
