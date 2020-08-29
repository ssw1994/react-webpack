import axios from "axios";
export default (function productservice() {
  let SERVICE_BASE_URL = "/api";

  let createApiUrl = function (url) {
    return `${SERVICE_BASE_URL}/${url}`;
  };

  let fetchProducts = function () {
    return axios
      .get(createApiUrl("products"))
      .then((response) => {
        return { data: response.data, isFetching: false, error: false };
      })
      .catch((error) => {
        return { data: [], isFetching: false, error: error };
      });
  };

  let addToCart = function (payload) {
    return axios
      .post(createApiUrl("products/addtocart"), payload)
      .then((response) => {
        return { data: response.data, isFetching: false, error: false };
      })
      .catch((error) => {
        return { data: null, isFetching: false, error: error };
      });
  };

  let fetchCartItems = function (payload) {
    return axios
      .post(createApiUrl("products/cart"), payload)
      .then((response) => {
        return { data: response.data, isFetching: false, error: false };
      })
      .catch((error) => {
        return { data: [], isFetching: false, error: error };
      });
  };

  let removeFromCart = function (payload) {
    return axios
      .post(createApiUrl("products/cart/remove"), payload)
      .then((response) => {
        return { data: response.data, error: false };
      })
      .catch((error) => {
        return { data: null, error: true };
      });
  };

  let createProduct = function () {};

  let deleteProduct = function () {};

  let addToWishList = function (payload) {
    return axios
      .post(createApiUrl("products/addtowish"), payload)
      .then((response) => {
        return { data: response.data, isFetching: false, error: false };
      })
      .catch((error) => {
        return { data: [], isFetching: false, error: error };
      });
  };

  let fetchWishList = function (payload) {
    return axios
      .post(createApiUrl("products/wishlist"), payload)
      .then((response) => {
        return { data: response.data, isFetching: false, error: false };
      })
      .catch((error) => {
        return { data: [], isFetching: false, error: error };
      });
  };

  let updateQuantity = function (payload) {
    return axios
      .post(createApiUrl("products/update"), payload)
      .then((response) => {
        return { data: response.data, isFetching: false, error: false };
      })
      .catch((error) => {
        return { data: null, isFetching: false, error: error.message };
      });
  };

  return {
    fetchProducts,
    addToCart,
    removeFromCart,
    createProduct,
    deleteProduct,
    fetchCartItems,
    fetchWishList,
    addToWishList,
    updateQuantity,
  };
})();
