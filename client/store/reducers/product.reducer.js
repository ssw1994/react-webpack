import {
  FETCH_PRODUCT,
  SELECT_PRODUCT,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  FETCH_CART,
  FETCH_WISHLIST,
  ADD_TO_WISHLIST,
  UPDATE_QUANTITY,
} from "../actions/product.action";
const initialState = {
  products: {
    data: [],
    isFetching: false,
    error: null,
  },
  carts: {
    data: [],
    isFetching: false,
    error: null,
  },
  wishList: {
    data: [],
    isFetching: false,
    error: null,
  },
  selectedProduct: null,
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCT:
      return { ...state, products: action.payload };
    case SELECT_PRODUCT:
      return { ...state, selectedProduct: action.payload };
    case ADD_TO_CART:
      if (!!action.payload.error) {
        return {
          ...state,
          carts: {
            data: [...state.carts.data],
            isFetching: false,
            error: action.payload.error,
          },
        };
      }
      return {
        ...state,
        carts: {
          data: [...state.carts.data, action.payload.data],
          isFetching: false,
          error: action.payload.error.message,
        },
      };
    case FETCH_CART:
      return {
        ...state,
        carts: {
          data: [...state.carts.data],
          isFetching: false,
          error: null,
        },
      };
    case ADD_TO_WISHLIST:
      return {
        ...state,
        wishList: {
          ...state.wishList,
          data: [...state.wishList.data, action.payload?.data],
          error: action.payload.error,
        },
      };

    case FETCH_WISHLIST: {
      return {
        ...state,
        wishList: { ...state.wishList, data: action.payload },
      };
    }
    case UPDATE_QUANTITY:
      if (action.payload.error) {
        return {
          ...state,
          carts: { ...state.carts, error: action.payload.error },
        };
      }
      let index = state.carts.data.findIndex(
        (x) => x.id === action.payload.data.id
      );
      let updetedCartItems = [...state.carts.data];
      if (index >= 0) updetedCartItems[index] = action.payload.data;
      return {
        ...state,
        carts: {
          data: updetedCartItems,
          error: false,
          isFetching: false,
        },
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        carts: {
          ...state.carts,
          data: [
            ...state.carts.data.filter((x) => x.id !== action.payload.data.id),
          ],
        },
      };
    default:
      return { ...state };
  }
}
