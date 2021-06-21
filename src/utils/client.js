import axios from 'axios';

let client = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL
});

export default client;
