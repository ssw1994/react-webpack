import React from "react";
import { connect, useSelector } from "react-redux";
import Card from "@material-ui/core/Card";
import { Link } from "react-router-dom";
import CardContent from "@material-ui/core/CardContent";
import { ordersummary } from "../../store/selectors/order.selector";
// import DeleteIcon from "@material-ui/icons/Delete";
import "./order-summary.scss";
function OrderSummary() {
  const order = useSelector(ordersummary);
  const cartItems = order.summary;
  const total = order.total;
  return (
    <div className="order-summary">
      <Card className="b-shadow">
        <CardContent>
          <div className="col-md-12 col-sm-12 col-xs-12 order-item">
            <div className="caption">
              <span>Order Summary</span>
            </div>
            <div className="responsive-table">
              <table className="table">
                <tbody>
                  {cartItems.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>
                          <div className="heading">
                            <Link to={`/${item.productName}`}>
                              <span>{item.productName}</span>
                            </Link>
                          </div>
                          <div className="subheading">
                            <span className="q-details">
                              &#x20B9;{`${item.price} * ${item.quantity}`}
                            </span>
                          </div>
                        </td>
                        {/* <td>
                          <span>
                            <DeleteIcon />
                          </span>
                        </td> */}
                        <td className="heading">
                          <span>&#x20B9;{item.total}</span>
                        </td>
                      </tr>
                    );
                  })}
                  <tr>
                    <td className="total">Total</td>
                    <td>
                      <div>
                        <span className="cart-total">&#x20B9;{total}</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     cartItems: state.productReducer.orderSummary.summary,
//     total: state.productReducer.orderSummary.total,
//   };
// };

// export default connect(mapStateToProps, null)(OrderSummary);

export default OrderSummary;
