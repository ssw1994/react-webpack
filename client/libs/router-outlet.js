import React from "react";
import { Switch, Route } from "react-router-dom";
import menus from "./routes";
import { connect, useSelector } from "react-redux";
import { closedrawer } from "../store/actions/drawer.action";
import GuaredRoute from "../libs/js/GuardedRoute";
import { isLoggedIn } from "../store/selectors/user.selector";
import "./routeroutlet.scss";
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

  addChildrens(route) {
    if (!route.childrens || route.childrens.length == 0) {
      return [];
    }
    return route.childrens.map((r) => {
      return [
        <Route key={r.id} path={r.link} exact>
          <r.component />
        </Route>,
        ...this.addChildrens(r),
      ];
    });
  }

  render() {
    return (
      <div
        className="router-outlet"
        // style={this.state.routerStyle}
        ref={this.bodyRef}
      >
        <Switch>
          {menus.map((route) => {
            return route.default
              ? [
                  <Route path="/" exact key={route.id}>
                    <route.component />
                  </Route>,
                  <Route path={route.link} exact key={route.id + "_copy"}>
                    <route.component />
                  </Route>,
                  ...this.addChildrens(route),
                ]
              : route.isSecured
              ? [
                  <GuaredRoute
                    path={route.link}
                    key={route.id}
                    exact
                    component={route.component}
                    auth={this.props.isLoggedIn}
                  />,
                  ...this.addChildrens(route),
                ]
              : route.pathMatch
              ? [
                  <Route path={route.link} key={route.id} exact>
                    <route.component />
                  </Route>,
                  ...this.addChildrens(route),
                ]
              : [
                  <Route path={route.link} key={route.id} exact>
                    <route.component />
                  </Route>,
                  ...this.addChildrens(route),
                ];
          })}
          {menus
            .filter((menu) => menu.default)
            .map((route) => {
              return [
                <Route path={route.link} key={route.id + "copy"} exact>
                  <route.component />
                </Route>,
                ...this.addChildrens(route),
              ];
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
const mapStateToProps = (state) => {
  return {
    isLoggedIn: isLoggedIn(state),
  };
};
export default connect(mapStateToProps, mapPropsToDispatch)(RouterOutlet);
