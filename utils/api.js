import { $http } from '@/plugins/axios.js';

const USER_API = {
  login: (params) => $http('POST', '/user/login', 0, params),
};

const TYPE_API = {
  // 无需token
  getTypes: (params) => $http('GET', '/type/list', 0, params),
  getArticles: (params) => $http('GET', '/type/articles', 1, params),
  // 需token
  addType: (params) => $http('POST', '/types', 0, params),
  delType: (params) => $http('DELETE', '/types/' + params.id, 0, params),
  updateType: (params) => $http('PUT', '/types/' + params.id, 0, params),
  getList: (params) => $http('GET', '/types', 0, params),
};

const FILE_API = {
  addFile: (params) => $http('POST', '/files', 2, params),
  delFile: (params) => $http('DELETE', '/files/' + params.name, 0, params),
};

const COMMENT_API = {
  getComment: (params) => $http('GET', '/comment/index', 1, params),
  getInfo: (params) => $http('GET', '/comment/getInfo', 1, params),
  create: (params) => $http('POST', '/comment/create', 1, params),
};

const ARTICLE_API = {
  // 无需token
  getArticles: (params) => $http('GET', '/article/list', 0, params),
  recentRecord: (params) => $http('GET', '/article/recentRecord', 1, params),
  // 需token
  addArticle: (params) => $http('POST', '/articles', 0, params),
  getList: (params) => $http('GET', '/articles', 0, params),
  delArticle: (params) => $http('DELETE', '/articles/' + params.id, 0, params),
  getDetail: (params) => $http('GET', '/articles/' + params.id, 0, params),
  updateArticle: (params) => $http('PUT', '/articles/' + params.id, 0, params),
};

export { USER_API, TYPE_API, FILE_API, ARTICLE_API, COMMENT_API };
