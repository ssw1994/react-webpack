import React from "react";
import { connect } from "react-redux";
import OrderSummary from "../libs/order-summary/order-summary";
import { setSteps, resetStepper } from "../store/actions/stepper.action";
import { steps } from "../store/selectors/stepper.selector";
import Stepper from "../libs/stepper/stepper";

import Cart from "./Cart";
import AddressWrapper from "../libs/address/addressWrapper";
import "../css/cart.scss";
import { cartItems } from "../store/selectors/product.selector";
class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
    console.log(props);
    this.updatedSteps();
  }

  updatedSteps() {
    this.steps = [
      {
        name: `My Cart (${this.props.cartItems?.length})`,
        component: Cart,
        prevTitle: "Back",
        nextTitle: "Next",
      },
    ];
    if (this.props.cartItems?.length > 0) {
      this.steps.push({
        name: "Address Details",
        component: AddressWrapper,
        prevTitle: "Back",
        nextTitle: "Next",
      });
    }
    this.props.setSteps(this.steps);
  }

  componentDidUpdate() {
    this.updatedSteps();
  }

  componentWillUnmount() {
    this.props.resetStepper();
  }

  render() {
    let height =
      document.querySelector("body").scrollHeight -
      document.querySelector(".header").scrollHeight;
    let style = {
      height: height - 20 + "px",
      overflowY: "scroll",
    };

    return (
      <div className="col-md-12 col-sm-12 col-xs-12">
        <div className="row">
          <div className="col-md-8 col-sm-8 col-xs-12 " ref={this.ref}>
            <Stepper />
          </div>
          <div className="col-md-4 col-sm-8 col-xs-12">
            <OrderSummary />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    //steps: steps(state),
    cartItems: cartItems(state),
  };
};
const mapPropsToDisptch = (dispatch) => {
  return {
    setSteps: (payload) => dispatch(setSteps(payload)),
    resetStepper: (payload = null) => dispatch(resetStepper()),
  };
};
export default connect(mapStateToProps, mapPropsToDisptch)(Checkout);
