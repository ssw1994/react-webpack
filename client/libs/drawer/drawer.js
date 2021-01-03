import React from "react";
import "./drawer.scss";
import { connect } from "react-redux";
import { closedrawer } from "../../store/actions/drawer.action";
import * as SIDEBAR from "../sidebar/sidebar";
import { sidebarTypes } from "../../libs/js/model";
import { sidebar } from "../../store/selectors/util.selector";
class Drawer extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  closeDrawer(event) {
    event && event.stopPropagation();
    this.props.closeDrawer();
  }

  sidebarType(type) {
    switch (type) {
      case sidebarTypes.categories:
        return <SIDEBAR.ProductCategories />;
      case sidebarTypes.usersettings:
        return <SIDEBAR.UsersSettings />;
      default:
        return null;
    }
  }

  render() {
    return (
      <div className="col-md-12 col-sm-12 col-xs-12 padding0">
        <div className="drawer">
          <div className="drawer-menu">
            {this.sidebarType(this.props?.sidebar)}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sidebar: sidebar(state),
  };
};
const mapPropsToDispatch = (dispatch) => {
  return {
    closeDrawer: (payload = null) => {
      dispatch(closedrawer());
    },
  };
};
export default connect(mapStateToProps, mapPropsToDispatch)(Drawer);
