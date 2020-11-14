import Vue from 'vue';
import axios from 'axios';
import qs from 'qs';

const service = axios.create({
  timeout: 5000,
  baseURL: '/api',
});
const TOKEN_KEY = 'USER_TOKEN';

// token拦截器
export default ({ store, redirect }) => {
  // 请求拦截
  service.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem(TOKEN_KEY);
      if (token) {
        config.headers.common.Authorization = 'Bearer ' + token;
      }
      return config;
    },
    (err) => {
      return Promise.reject(err);
    }
  );
  // 响应拦截器
  service.interceptors.response.use((response) => {
    const { data, config } = response;
    if (data.code === 0) {
      if (config.url === '/user/login') {
        localStorage.setItem(TOKEN_KEY, data.data.token);
      }
    } else if (data.code === 403) {
      // token过期
      localStorage.removeItem(TOKEN_KEY);
      redirect({ path: '/login' });
    }
    return data;
  });
};

export function $http(method, url, type, params) {
  const contentType = [
    'application/x-www-form-urlencoded',
    'application/json',
    'multipart/form-data',
  ];
  const headers = { 'content-type': contentType[type] };
  if (type === 0) params = qs.stringify(params);
  const axiosOptions = { method, url, headers };
  if (method.toUpperCase() === 'GET') {
    axiosOptions.params = params;
  } else {
    axiosOptions.data = params;
  }
  return service(axiosOptions);
}

Vue.prototype.$http = service;
