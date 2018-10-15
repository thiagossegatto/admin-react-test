import React, { Component } from "react";

class Logo extends Component {
  render() {
    return (
      <div className="topbar-left">
        <a href="index.html" className="logo">
          <span>
            Admin
            <span>to</span>
          </span>
          <i className="mdi mdi-layers" />
        </a>
      </div>
    );
  }
}
export default Logo;
