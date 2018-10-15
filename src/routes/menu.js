import React from "react";
import {
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import Main from "../pages/Main";
import Events from "../pages/Events";

const InsideRoutes = () => (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/events" component={Events} />
      <Redirect from="*" to="/" />
    </Switch>
);

export default InsideRoutes;
