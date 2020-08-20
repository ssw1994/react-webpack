import React from "react";
import { Switch, Route } from "react-router-dom";
import menus from "./routes";
import { clearCache } from "ejs";
class RouterOutlet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      routerStyle: {
        position: "absolute",
        top: 50,
      },
    };
  }

  componentDidMount() {
    // document.addEventListener("resize", () => {
    //   let routerStyle = {
    //     position: "absolute",
    //     top: document.getElementsByClassName("header")[0]?.scrollHeight,
    //     bottom: document.getElementsByClassName("footer")[0]?.scrollHeight,
    //   };
    //   console.log(routerStyle);
    //   //this.setState({ routerStyle: routerStyle });
    // });
  }

  render() {
    return (
      <div className="router-outlet" style={this.state.routerStyle}>
        <Switch>
          {menus.map((route) => {
            return (
              <Route path={route.link}>
                <route.component />
              </Route>
            );
          })}
        </Switch>
      </div>
    );
  }
}
export default RouterOutlet;
