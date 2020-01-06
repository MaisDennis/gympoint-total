import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://192.168.1.102:3333',
  baseURL: 'http://10.0.3.2:3334',
});

export default api;
