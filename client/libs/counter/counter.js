import React from "react";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { connect } from "react-redux";
import { updateQuantity } from "../../store/actions/product.action";
import "./counter.scss";
import Button from "@material-ui/core/Button";
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  updateQCall(count) {
    if (count <= 0) {
      return;
    } else {
      this.props.updateQuantity({ item: this.props.item, quantity: count });
    }
  }

  render() {
    let count = this.props.item?.quantity;
    return (
      <div className="counter">
        <div className="decrementor">
          <Button
            onClick={(e) => this.updateQCall(parseInt(count) - 1)}
            disabled={count === 1}
          >
            <RemoveIcon />
          </Button>
        </div>
        <div className="quantity">
          <input
            value={count}
            type={"number"}
            onChange={(e) => this.updateQCall(parseInt(e.target.value))}
          />
        </div>
        <div className="incrementor">
          <Button onClick={(e) => this.updateQCall(parseInt(count) + 1)}>
            <AddIcon />
          </Button>
        </div>
      </div>
    );
  }
}
const mapPropsToDispatch = (dispatch) => {
  return {
    updateQuantity: (payload) => {
      dispatch(updateQuantity(payload));
    },
  };
};
export default connect(null, mapPropsToDispatch)(Counter);
