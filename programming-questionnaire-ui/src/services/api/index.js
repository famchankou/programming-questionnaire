/**
 * Axios config with functions
 */

import axios from 'axios';
import apiConfig from './configure';

axios.defaults.baseURL = apiConfig.getBaseUrl();
axios.defaults.timeout = apiConfig.timeout;

// set token to request header
const setAuthTokenToHeader = token => {
  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common.Authorization;
  }
};

// delete token from request
const deleteAuthTokenFromHeader = () => {
  delete axios.defaults.headers.common.Authorization;
};

// set other headers
const setHeaders = headers => {
  const defaultHeader = { 'Content-Type': 'application/json' };
  if (headers) return Object.assign(defaultHeader, headers);
  return defaultHeader;
};

// functions for request types

const get = (url, headers) => {
  return axios.get(`${url}`, setHeaders(headers));
};

const post = (url, data, headers) => {
  const currentHeaders = setHeaders(headers);
  return axios.post(`${url}`, data, currentHeaders);
};

const patch = (url, data, headers) => {
  return axios.patch(`${url}`, data, setHeaders(headers));
};

const put = (url, data, headers) => {
  return axios.put(`${url}`, data, setHeaders(headers));
};

const remove = (url, data, headers) => {
  return axios.delete(`${url}`, setHeaders(headers));
};

export default {
  get,
  post,
  put,
  patch,
  remove,
  setAuthTokenToHeader,
  deleteAuthTokenFromHeader,
};
