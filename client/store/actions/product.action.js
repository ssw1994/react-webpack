import store from "..";
export const FETCH_PRODUCT = "FETCH_PRODUCT";
export const SELECT_PRODUCT = "SELECT_PRODUCT";
export const FETCH_CART = "FETCH_CART";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const ADD_TO_WISHLIST = "ADD_TO_WISHLIST";
export const FETCH_WISHLIST = "FETCH_WISHLIST";
export const UPDATE_QUANTITY = "UPDATE_QUANTITY";
export const CREATE_PRODUCT = "CREATE_PRODUCT";
export const PRODUCT_CREATED_SUCCESSFULLY = "PRODUCT_CREATED_SUCCESSFULLY";
export const PRODUCT_CREATION_FAILED = "PRODUCT_CREATION_FAILED";
export const SEARCH_FOR_PRODUCT = "SEARCH_FOR_PRODUCT";
import productservice from "../../services/product.service";
export function fetchProducts(payload) {
  const request = productservice.fetchProducts();
  return {
    type: FETCH_PRODUCT,
    payload: request,
  };
}

export function selectProduct(payload) {
  return {
    type: SELECT_PRODUCT,
    payload: payload,
  };
}

export function addToCart(payload) {
  payload = {
    ...payload.item,
    ...{ userId: payload.user.userId, quantity: 1 },
  };
  const request = productservice.addToCart(payload);

  return {
    type: ADD_TO_CART,
    payload: request,
  };
}

export function fetchCartItems(payload) {
  const request = productservice.fetchCartItems(payload);

  return {
    type: ADD_TO_CART,
    payload: request,
  };
}

export function addToWishList(payload) {
  payload = { ...payload.item, ...{ userId: payload.user.userId } };
  const request = productservice.addToWishList(payload);
  return {
    type: ADD_TO_WISHLIST,
    payload: request,
  };
}

export function fetchWishList(payload) {
  const request = productservice.fetchWishList(payload);
  return {
    type: FETCH_WISHLIST,
    payload: request,
  };
}

export function removeFromCart(payload) {
  const request = productservice.removeFromCart(payload);
  return {
    type: REMOVE_FROM_CART,
    payload: request,
  };
}

export function updateQuantity(payload) {
  const request = productservice.updateQuantity(payload);
  return {
    type: UPDATE_QUANTITY,
    payload: request,
  };
}

export function saveproduct(payload) {
  const request = productservice.createProduct(payload);
  return {
    type: CREATE_PRODUCT,
    payload: request,
  };
}

export function searchForProduct(payload) {
  return {
    type: SEARCH_FOR_PRODUCT,
    payload: payload,
  };
}
