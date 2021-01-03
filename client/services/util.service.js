import axios from "axios";
import CONFIG from "./api.config";

export default (function () {
  let SERVICE_BASE_URL = CONFIG.BASE_URL;

  let createApiUrl = function (url) {
    return `${SERVICE_BASE_URL}/${url}`;
  };

  let sendMail = function (payload) {
    return axios.post(createApiUrl("util/sendMail"), payload);
  };

  return {
    sendMail,
  };
})();
