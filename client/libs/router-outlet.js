import React from "react";
import { Switch, Route } from "react-router-dom";
import menus from "./routes";
import { Home } from "../components";
import { connect } from "react-redux";
import { closedrawer } from "../store/actions/drawer.action";
class RouterOutlet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      routerStyle: {
        position: "absolute",
        top: 60,
        width: "100%",
      },
    };
    this.bodyRef = React.createRef();
  }

  componentDidMount() {
    this.bodyRef.current.addEventListener("click", () => {
      this.props.closeDrawer();
    });
  }

  componentWillUnmount() {
    this.bodyRef.current.removeEventListener("click");
  }

  render() {
    return (
      <div
        className="router-outlet"
        style={this.state.routerStyle}
        ref={this.bodyRef}
      >
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          {menus.map((route) => {
            return (
              <Route path={route.link} key={route.id} exact>
                <route.component />
              </Route>
            );
          })}
        </Switch>
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
export default connect(null, mapPropsToDispatch)(RouterOutlet);
