import React from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { opendrawer, closedrawer } from "../../store/actions/drawer.action";
import "./header.scss";
import { isLoggedIn } from "../../store/selectors/user.selector";
import { logout } from "../../store/actions/user.action";
import { drawer } from "../../store/selectors/util.selector";
import CloseIcon from "@material-ui/icons/Close";
import POP from "../popover/popover";
import {
  menus,
  activeMenu,
  userMenus,
} from "../../store/selectors/menu.selector";
import { setActiveMenu } from "../../store/actions/menu.action";
class RouterApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  toggleDrawer(e) {
    e && e.stopPropagation();
    if (this.props.drawer) {
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
  setMenu(e, menu) {
    e && e.stopPropagation();
    let index = this.props.menus.findIndex((x) => x.name === menu);
    if (index >= 0) this.setActiveMenu(null, this.props.menus[index]);
  }

  setActiveMenu(event, menu) {
    event && event.stopPropagation();
    this.props.setActiveMenu(menu);
  }

  render() {
    console.log(this.props);
    return (
      <div className="menus">
        <div className="hamburger-icon">
          {this.props.drawer ? (
            <CloseIcon onClick={(e) => this.toggleDrawer(e)} />
          ) : (
            <MenuIcon onClick={(e) => this.toggleDrawer(e)} />
          )}
        </div>
        <div className="nav-list">
          <nav>
            <ul>
              {this.props.menus
                .filter((menu) => menu.isMenu)
                .map((route) => {
                  return (
                    <li
                      onClick={(e) => this.setActiveMenu(e, route)}
                      className={
                        this.props.activeMenu.id === route.id ? "active" : ""
                      }
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
          <Link to="/cart" onClick={(e) => this.setMenu(e, "Cart")}>
            <span>
              <ShoppingCartIcon />
              {this.props?.carts?.data?.length}
            </span>
          </Link>

          <Link to="/wishlist" onClick={(e) => this.setMenu(e, "WishList")}>
            <span>
              <FavoriteBorderIcon />
              {this.props?.wishList?.data?.length}
            </span>
          </Link>

          {this.props.isLoggedIn ? (
            <span className="action-btns">
              <POP menus={this.props.userMenus}>
                <AccountCircleIcon />
                &nbsp;&nbsp;&nbsp;
                {this.props.user.username}
              </POP>
              <Button onClick={() => this.props.signOut()}>Logout</Button>
            </span>
          ) : (
            <Link to="/auth" className="action-btns">
              <Button>Login</Button>
            </Link>
          )}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
    carts: state.productReducer.carts,
    wishList: state.productReducer.wishList,
    isLoggedIn: isLoggedIn(state),
    menus: menus(state),
    activeMenu: activeMenu(state)[0],
    userMenus: userMenus(state),
    drawer: drawer(state),
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
    signOut: (payload = null) => {
      dispatch(logout(payload));
    },
    setActiveMenu: (payload = null) => {
      dispatch(setActiveMenu(payload));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(RouterApp);
