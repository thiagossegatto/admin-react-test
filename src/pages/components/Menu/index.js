import React, { Component } from "react";
import UserBox from "./UserBox";
import Menu from "./Menu";

class SideBarMenu extends Component {
  render() {
    return (
      <div className="left side-menu">
        <div className="sidebar-inner slimscrollleft">
          <UserBox />
          <Menu />
          <div className="clearfix"></div>
        </div>
      </div>
    );
  }
}
export default SideBarMenu;
