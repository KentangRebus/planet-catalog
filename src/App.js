import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import MainNavigator from "./navigations/main-navigator";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

function App() {
  return (
    <Router>
      <Switch>
        <MainNavigator />
      </Switch>
    </Router>
  );
}

export default App;
