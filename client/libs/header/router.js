import React from "react";
import { Link, useHistory } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import menus from "../routes";
import { connect } from "react-redux";
import { opendrawer, closedrawer } from "../../store/actions/drawer.action";
import "./header.scss";

class RouterApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: null,
    };
  }

  toggleDrawer(e) {
    e && e.stopPropagation();
    if (this.props?.drawer?.opened) {
      this.props.closedrawer();
    } else {
      this.props.opendrawer();
    }
  }

  gotoCarts(e) {
    e && e.stopPropagation();
  }

  gotoWishList(e) {
    e && e.stopPropagation();
  }

  componentDidUpdate() {}

  render() {
    console.log(this.props);
    return (
      <div className="menus">
        <div className="hamburger-icon">
          <MenuIcon onClick={(e) => this.toggleDrawer(e)} />
        </div>
        <div className="nav-list">
          <nav>
            <ul>
              {menus
                .filter((menu) => menu.isMenu)
                .map((route) => {
                  return (
                    <li
                      onClick={(e) => this.setState({ active: route.id })}
                      className={this.state.active === route.id ? "active" : ""}
                      key={route.id}
                    >
                      <Link to={route.link}>{route.name}</Link>
                    </li>
                  );
                })}
            </ul>
          </nav>
        </div>
        <div className="user-info">
          <Link to="/cart">
            <span>
              <ShoppingCartIcon />
              {this.props?.carts?.data?.length}
            </span>
          </Link>

          <Link to="/wishlist">
            <span>
              <FavoriteBorderIcon />
              {this.props?.wishList?.data?.length}
            </span>
          </Link>

          <span title={this.props?.user?.username}>
            <AccountCircleIcon />
          </span>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    drawer: state.drawerReducer,
    user: state.userReducer.user,
    carts: state.productReducer.carts,
    wishList: state.productReducer.wishList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    opendrawer: (payload = null) => {
      dispatch(opendrawer());
    },
    closedrawer: (payload = null) => {
      dispatch(closedrawer());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(RouterApp);
