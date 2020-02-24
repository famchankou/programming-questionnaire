const api = {
  url: process.env.REACT_APP_API_URI,
  suffix: '',
  timeout: 200000,
  getBaseUrl() {
    return new URL(this.suffix, this.url).toString();
  },
};

Object.freeze(api);

export default api;
