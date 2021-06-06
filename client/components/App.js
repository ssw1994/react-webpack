import React, { useEffect } from "react";
import "../css/App.css";
import Header from "../libs/header/header";
import { header } from "../store/selectors/util.selector";
import RouterOutlet from "../libs/router-outlet";
import { BrowserRouter as Router } from "react-router-dom";
import Drawer from "../libs/drawer/drawer";
import { useDispatch, useSelector } from "react-redux";
import { loggedUser } from "../store/selectors/user.selector";
import { fetchAllAddress } from "../store/actions/address.action";
import { drawer, alert } from "../store/selectors/util.selector";
import ScrollToTop from "../libs/js/autoscroll";
function App() {
  const dispatch = useDispatch();
  const user = useSelector(loggedUser);
  const drawerOpend = useSelector(drawer);
  const showHeaderFooter = useSelector(header);
  useEffect(() => {
    dispatch(fetchAllAddress(user));
  }, []);
  document.addEventListener("resize", () => {});
  return (
    <Router basename="app" className="col-md-12 col-sm-12 col-xs-12 padding0">
      <ScrollToTop />
      <div className="row">
        {drawerOpend ? (
          <div className="col-md-2 col-sm-2 padding0">
            <Drawer />
          </div>
        ) : null}
        <div
          className={
            drawerOpend
              ? "col-md-10 col-sm-10 col-xs-12 padding0"
              : "col-md-12 col-sm-12 col-xs-12 padding0"
          }
        >
          {showHeaderFooter ? <Header title="MyCart"></Header> : null}
          <RouterOutlet />
          {/* <Footer /> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
