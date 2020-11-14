import { $http } from '@/plugins/axios.js';

const USER_API = {
  login: (params) => $http('POST', '/user/login', 0, params),
};

export { USER_API };
