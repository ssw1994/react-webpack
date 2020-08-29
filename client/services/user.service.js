import axios from "axios";

export default (function () {
  let SERVICE_BASE_URL = "/api";

  let createApiUrl = function (url) {
    return `${SERVICE_BASE_URL}/${url}`;
  };

  let logIn = function (payload) {
    return axios.post(createApiUrl("user/authenticate"), payload);
  };

  let register = function (payload) {
    return axios.post(createApiUrl("user/register"), payload);
  };

  return {
    logIn,
    register,
  };
})();
