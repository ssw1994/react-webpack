import React from "react";
import { connect } from "react-redux";
import OrderSummary from "../libs/order-summary/order-summary";
import { setSteps, resetStepper } from "../store/actions/stepper.action";
import { steps } from "../store/selectors/stepper.selector";
import Stepper from "../libs/stepper/stepper";

import Cart from "./Cart";
import Address from "../libs/address/address";
import "../css/cart.scss";
import { clearCache } from "ejs";
class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  componentDidMount() {
    this.steps = [
      {
        name: `My Cart (${this.props.cartItems})`,
        component: Cart,
        prevTitle: "Back",
        nextTitle: "Next",
      },
      {
        name: "Address Details",
        component: Address,
        prevTitle: "Back",
        nextTitle: "Next",
      },
    ];
    this.props.setSteps(this.steps);
  }

  componentWillUnmount() {
    this.props.resetStepper();
  }

  render() {
    let height =
      document.querySelector("body").scrollHeight -
      document.querySelector(".header").scrollHeight;
    let style = {
      height: height + "px",
      overflowY: "scroll",
    };
    return (
      <div className="col-md-12 col-sm-12 col-xs-12 user-cart">
        <div className="row">
          <div
            className="col-md-8 col-sm-8 col-xs-12 scrollable-div"
            ref={this.ref}
            style={style}
          >
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
    steps: steps(state),
    cartItems: state.productReducer?.carts?.data?.length,
  };
};
const mapPropsToDisptch = (dispatch) => {
  return {
    setSteps: (payload) => dispatch(setSteps(payload)),
    resetStepper: (payload = null) => dispatch(resetStepper()),
  };
};
export default connect(mapStateToProps, mapPropsToDisptch)(Checkout);
