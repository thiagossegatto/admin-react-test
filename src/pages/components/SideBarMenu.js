import React, { Component } from "react";
import UserBox from "../UserBox";

class SideBarMenu extends Component {
  render() {
    return (
      
      <div className="left side-menu">
        <div className="sidebar-inner slimscrollleft">
          <UserBox />
          <div id="sidebar-menu" />
        </div>
      </div>
    );
  }
}
export default SideBarMenu;
