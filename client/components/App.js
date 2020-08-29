import React from "react";
import "../css/App.css";
import Header from "../libs/header/header";
import Footer from "../libs/footer/footer";
import RouterOutlet from "../libs/router-outlet";
import Drawer from "../libs/drawer/drawer";
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";
function App(props) {
  document.addEventListener("resize", () => {});
  console.log(props);
  return (
    <div>
      <Router basename="/app">
        {props?.opened ? <Drawer /> : null}
        <Header title="Learn Socket.io"></Header>
        <RouterOutlet />
        {/* <Footer /> */}
      </Router>
    </div>
  );
}
const mapStateToProps = (state) => {
  return { ...state.drawerReducer };
};
export default connect(mapStateToProps, null)(App);
