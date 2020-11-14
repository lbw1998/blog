import { USER_API } from '../utils/api';
import { setToken } from '../utils/auth';

const state = () => ({
  nickname: '',
  token: '',
});

const mutations = {};

const actions = {
  login: async ({ state, commit }, data) => {
    const res = await USER_API.login(data);
    setToken(res.token);
    commit('SET_TOKEN', res.token);
  },
};

export default {
  namespace: true,
  state,
  mutations,
  actions,
};
