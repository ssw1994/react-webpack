import React from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
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

  toggleDrawer(e) {}

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
              {menus.map((route) => {
                return (
                  <li
                    onClick={(e) => this.setState({ active: route.id })}
                    className={this.state.active === route.id ? "active" : ""}
                  >
                    <Link to={route.link}>{route.name}</Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { ...state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    opendrawer: () => {
      dispatch(opendrawer());
    },
    closedrawer: () => {
      dispatch(closedrawer());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(RouterApp);
