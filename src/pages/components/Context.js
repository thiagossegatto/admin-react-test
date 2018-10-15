import React, { Component } from "react";
import InsideRoutes from "../../routes/menu";

class Context extends Component {
  render() {
    return (
      <div className="content-page">
        <div className="content">
        <InsideRoutes/>
        </div>
        <footer className="footer">2016 © Adminto.</footer>
      </div>
    );
  }
}
export default Context;
