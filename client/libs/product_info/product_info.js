import React from "react";
import ModelBox from "../modelbox/modalbox";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import {
  selectProduct,
  addToCart,
  addToWishList,
  removeFromCart,
} from "../../store/actions/product.action";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import DeleteIcon from "@material-ui/icons/Delete";
import Counter from "../counter/counter";
import "./product_info.scss";
import { isLoggedIn } from "../../store/selectors/user.selector";
export class ProductInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log(props);
  }
  componentWillUnmount() {
    this.props.selectProduct();
  }

  addToWishList(e) {
    e && e.stopPropagation();
  }

  updateActionAsPerMode(product) {
    let mode = this.props.mode ? this.props.mode : "default";
    if (mode === "default") {
      return (
        <div className="row action-btns">
          <div className="col-6">
            <Button
              disabled={!this.props.isLoggedIn}
              onClick={(e) =>
                this.props.addToCart({ item: product, user: this.props.user })
              }
            >
              <span>
                <AddShoppingCartIcon />
                ADD TO CART
              </span>
            </Button>
          </div>
          <div className="col-6">
            <Button
              disabled={!this.props.isLoggedIn}
              onClick={(e) =>
                this.props.addToWishList({
                  item: product,
                  user: this.props.user,
                })
              }
            >
              <span>
                <FavoriteBorderIcon />
                WISHLIST
              </span>
            </Button>
          </div>
        </div>
      );
    } else if (mode === "cart") {
      return (
        <div className="row action-btns">
          <div className="col-6">
            <Counter item={product} />
          </div>
          <div className="col-6">
            <Button onClick={(e) => this.props.removeFromCart(product)}>
              <span>
                <DeleteIcon />
                Remove
              </span>
            </Button>
          </div>
        </div>
      );
    }
  }

  render() {
    let product = this.props?.product || this.props?.cartItem;
    console.log(this.props);
    return (
      <div className="row product-info">
        <div className="col-md-5 col-sm-6 col-xs-12">
          <div
            className="product-image"
            style={{ backgroundImage: `url('${product.images[0]}')` }}
          ></div>
        </div>
        <div className="col-md-7 col-sm-6 col-xs-12 content">
          <div className="col-12 product-name">{product?.productName}</div>
          <div className="col-12 product-price">&#x20B9;{product?.price}</div>
          <div className="col-12 product-category">{product?.product}</div>
          <div className="col-12 product-description">
            {product?.productMaterial}
          </div>
          {this.updateActionAsPerMode(product)}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    product: state.productReducer.selectedProduct,
    user: state.userReducer.user,
    isLoggedIn: isLoggedIn(state),
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    selectProduct: (payload = null) => {
      dispatch(selectProduct(payload));
    },
    addToCart: (payload = null) => {
      dispatch(addToCart(payload));
    },
    addToWishList: (payload = null) => {
      dispatch(addToWishList(payload));
    },
    removeFromCart: (payload = null) => {
      dispatch(removeFromCart(payload));
    },
  };
};
export default ModelBox(
  connect(mapStateToProps, mapDispatchToProps)(ProductInfo)
);

export const ProductInfoOnly = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductInfo);
