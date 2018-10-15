import React from "react";

import Header from "./pages/components/Header";
import SideBarMenu from "./pages/components/Menu";
import Context from "./pages/components/Context";

export default props => (
  <div>
    <Header />
    <SideBarMenu />
    <Context />
  </div>
);