import { USER_API } from '../utils/api';
import { setToken, removeToken, removeInfo } from '../utils/auth';

const state = () => ({
  nickname: '',
  token: '',
});

const mutations = {
  SET_TOKEN(state, token) {
    state.token = token;
  },
};

const actions = {
  login: ({ commit }, data) =>
    new Promise((resolve, reject) => {
      USER_API.login(data)
        .then((res) => {
          setToken(res.data.token);
          commit('SET_TOKEN', res.data.token);
          resolve(res);
        })
        .catch((error) => {
          reject(error);
        });
    }),
  // 退出系统
  logout: ({ state, commit }, data) =>
    new Promise((resolve) => {
      commit('SET_TOKEN', '');
      removeToken();
      removeInfo();
      resolve();
    }),
};

export default {
  namespace: true,
  state,
  mutations,
  actions,
};
