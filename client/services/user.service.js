import axios from "axios";
import CONFIG from "./api.config";

export default (function () {
  let SERVICE_BASE_URL = CONFIG.BASE_URL;

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
