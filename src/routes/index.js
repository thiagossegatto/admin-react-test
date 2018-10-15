import React from "react";
import {
  Route,
  Redirect,
  Switch,
  BrowserRouter
} from "react-router-dom";

import Main from "../pages/Main";
import AuthOrApp from "../AuthOrApp";
import Events from "../pages/Events";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={AuthOrApp} />
      <Route path="/" component={Main} />
      <Route path="/events" component={Events} />
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>
);

export default Routes;
