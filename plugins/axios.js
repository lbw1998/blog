import Vue from 'vue';
import axios from 'axios';
import { Message, MessageBox } from 'element-ui';
import { getToken } from '../utils/auth';

const service = axios.create({
  timeout: 5000,
  baseURL: '/api',
});

// token拦截器
export default ({ store, redirect }) => {
  // 请求拦截
  service.interceptors.request.use(
    (config) => {
      const token = getToken();
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
    const { data } = response;
    if (data.code === 401) {
      // token过期
      MessageBox.confirm(
        '登录状态已过期，您可以继续留在该页面，或者重新登录',
        '系统提示',
        {
          confirmButtonText: '重新登录',
          cancelButtonText: '取消',
          type: 'warning',
        }
      ).then(() => {
        store.dispatch('user/logout').then(() => {
          redirect('/unadmin');
        });
      });
    } else if (data.code === -1) {
      Message.error(data.message);
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
  const axiosOptions = { method, url, headers };
  if (method.toUpperCase() === 'GET') {
    axiosOptions.params = params;
  } else {
    axiosOptions.data = params;
  }
  return service(axiosOptions);
}

Vue.prototype.$http = service;
