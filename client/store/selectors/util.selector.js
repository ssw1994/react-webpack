export const getAddress = (state) => {
  return state.utilReducer.address;
};
export const header = (state) => state.utilReducer.header.show;

export const drawer = (state) => state.drawerReducer.opened;

export const categories = (state) =>
  [
    ...new Set(
      state.productReducer.products.data.map((product) => product.department)
    ),
  ].map((category) => {
    return { category: category, id: category };
  });

export const selectedcategories = (state) => state.utilReducer.categories;

export const sidebar = (state) => {
  return state.utilReducer.sidebarType;
};
export const mailStatus = (state) => {
  return state.utilReducer.mailStatus;
};
