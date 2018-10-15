import React, { Component } from "react";

class TitleBar extends Component {
  render() {
    return (
      <div className="navbar navbar-default" role="navigation">
        <div className="container-fluid">
          <ul className="nav navbar-nav list-inline navbar-left">
            <li className="list-inline-item">
              <button className="button-menu-mobile open-left">
                <i className="mdi mdi-menu" />
              </button>
            </li>
            <li className="list-inline-item">
              <h4 className="page-title">{this.props.title}</h4>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default TitleBar;
