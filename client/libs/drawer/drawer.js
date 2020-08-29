import React from "react";
import "./drawer.scss";
import { connect } from "react-redux";
import { closedrawer } from "../../store/actions/drawer.action";
import CloseIcon from "@material-ui/icons/Close";
class Drawer extends React.Component {
  drawerMenus = [
    {
      name: "Angular",
      id: 1,
      link: "/angular",
      component: null,
    },
    {
      name: "React",
      id: 2,
      link: "/react",
      component: null,
    },
    {
      name: "Vue",
      id: 3,
      link: "/vue",
      component: null,
    },
    {
      name: "Python",
      id: 4,
      link: "/python",
      component: null,
    },
  ];
  constructor(props) {
    super(props);
  }

  closeDrawer(event) {
    event && event.stopPropagation();
    this.props.closeDrawer();
  }

  render() {
    return (
      <div className="drawer">
        <div className="close-btn">
          <CloseIcon onClick={(e) => this.closeDrawer(e)} />
        </div>
        <div className="drawer-menu">
          <ul>
            {this.drawerMenus.map((menu, id) => {
              return <li key={id}>{menu.name}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}
const mapPropsToDispatch = (dispatch) => {
  return {
    closeDrawer: (payload = null) => {
      dispatch(closedrawer());
    },
  };
};
export default connect(null, mapPropsToDispatch)(Drawer);
