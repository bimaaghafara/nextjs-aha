import axios from 'axios';

const http = axios.create({
  baseURL: 'https://avl-frontend-exam.herokuapp.com/api',
  headers: {
    'Content-type': 'application/json'
  }
});

// Add a request interceptor
http.interceptors.request.use((config) => {
  // console.log(config)
  // const token = localStorage.getItem('token');
  // if (token) {
  //   // add token to request headersif exist
  //   config.headers['Authorization'] = `Bearer ${token}`;
  // }
  return config;
});

export default http;
