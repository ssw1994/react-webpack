import axios from "axios";
import API from "./api.config";
export default (function () {
  const BASE_URL = API.BASE_URL;
  let createApiUrl = function (url) {
    return `${BASE_URL}/${url}`;
  };
  let getAllAddress = function (payload) {
    return axios
      .post(createApiUrl("address/all"), payload)
      .then((response) => {
        return { data: response.data, isFetching: false, error: null };
      })
      .catch((error) => {
        return { data: [], isFetching: false, error: error.message };
      });
  };

  return {
    getAllAddress,
  };
})();
