export const addresses = (state) => {
  return state.addressReducer.address.data;
};

export const selectedAddress = (state) => {
  return state.addressReducer.selectedAddress;
};
