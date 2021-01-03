import React from "react";
import GuardedRoute from "../libs/js/GuardedRoute";
import App from "../components/App";
import Onboarding from "../libs/onboarding/onboarding";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
export default function BootApp() {
  return (
    <Router basename="app">
      <Switch>
        <Route path="/home" exact>
          <App />
        </Route>
        <Route path="/" exact>
          <Onboarding />
        </Route>
      </Switch>
    </Router>
  );
}
