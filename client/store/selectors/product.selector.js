export const selectedcategories = (state) => state.utilReducer.categories;
export const allProducts = (state) => {
  let categories = state.utilReducer.categories;
  let returnProductsArray = state.productReducer.products.data;
  if (!!categories && categories.length > 0) {
    returnProductsArray = state.productReducer.products.data.filter(
      (product) => {
        return categories.indexOf(product.department) !== -1;
      }
    );
  }
  return returnProductsArray;
};

export const cartItems = (state) => state.productReducer.carts.data;

export const myProducts = (state) => {
  return state.productReducer.products.data.filter(
    (product) => product.metadata.ownerId === state.userReducer.user.userId
  );
};

export const isproductCreatedSuccessfully = (state) => {
  return state.productReducer.products?.newProduct;
};

export const columnsToSearch = (state) => {
  return state.productReducer.searchConfig.columns;
};

export const keyWord = (state) => {
  return state.productReducer.searchConfig.keyword;
};
