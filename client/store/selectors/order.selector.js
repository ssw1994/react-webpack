export const ordersummary = (state) => {
  const cartItems = state.productReducer.carts.data;
  const summary = cartItems.map((item) => {
    item["total"] = parseFloat(item.price) * parseFloat(item.quantity);
    return item;
  });
  return {
    summary: summary,
    total: summary.reduce((sum, item) => {
      return parseFloat(item.total) + sum;
    }, 0),
  };
};
