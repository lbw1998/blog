import Cookies from 'js-cookie';

const TokenKey = 'USER_TOKEN';

export function getToken() {
  return Cookies.get(TokenKey);
}

export function setToken(token) {
  return Cookies.set(TokenKey, token);
}

export function removeToken() {
  return Cookies.remove(TokenKey);
}

export function removeInfo() {
  Cookies.remove('username');
  Cookies.remove('password');
  Cookies.remove('rememberMe');
  return true;
}
