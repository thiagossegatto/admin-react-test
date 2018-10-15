
import React, { Component } from "react";
import Logo from "./Logo";
import TitleBar from "./TitleBar";

class Header extends Component {
  render() {
    return (
      <div className="topbar">
          <Logo />
          <TitleBar title='Dashboard' />
      </div>
    );
  }
}
export default Header;