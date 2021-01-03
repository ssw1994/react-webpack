import React from "react";
import { connect } from "react-redux";
import { ProductInfoOnly } from "../libs/product_info/product_info";

import "../css/cart.scss";
import { Link } from "react-router-dom";
class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "cart",
    };
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12 col-sm-12 col-xs-12 user-cart">
          {this.props?.cartItems && this.props?.cartItems?.length > 0 ? (
            this.props?.cartItems.map((item) => {
              return (
                <ProductInfoOnly
                  cartItem={item}
                  key={item.id}
                  mode={this.state.mode}
                />
              );
            })
          ) : (
            <div className="empty-cart center-items">
              <h2>
                Your Cart is Empty <br />
                <Link to="/home">Click here</Link> to shop{" "}
              </h2>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cartItems: state.productReducer.carts.data,
    orderSummary: state.productReducer.orderSummary,
  };
};

export default connect(mapStateToProps, null)(Cart);
