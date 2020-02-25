/**
 * Service for auth token
 */

/**
 * Funtion for get token from localstorage
 */

function getToken() {
  return localStorage.getItem('token');
}

/**
 * Function for set token into local storage
 * @param {String} token
 */

function setToken(token) {
  localStorage.setItem('token', token);
}

/**
 * Function for removing token from localstorage
 */

function removeToken() {
  localStorage.removeItem('token');
}

/**
 * Function for decoding jwt token
 * @param {String} token
 */

function decodeToken(token) {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split('')
      .map(c => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`)
      .join('')
  );

  return JSON.parse(jsonPayload);
}

export default {
  getToken,
  setToken,
  removeToken,
  decodeToken,
};
