import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { login } from "../store/ducks/auth";
import Input from "./components/Input/InputAuth";
import Messages from "./components/Common/Messages";

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginMode: true
    };
  }

  onSubmit(values) {
    const { login } = this.props;
    login(values);
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <div className="account-pages" />
        <div className="clearfix" />
        <div className="wrapper-page">
          <div className="text-center">
            <div className="logo">
              <span>
                Admin
                <span>to</span>
              </span>
            </div>
          </div>
          <div className="m-t-40 card-box">
            <div className="text-center">
              <h4 className="text-uppercase font-bold m-b-0">Sign In</h4>
            </div>
            <div className="p-20">
              <form
                className="form-horizontal m-t-20"
                onSubmit={handleSubmit(v => this.onSubmit(v))}
              >
                <Field
                  component={Input}
                  name="email"
                  type="email"
                  required="required"
                  placeholder="Username"
                />
                <Field
                  component={Input}
                  name="password"
                  type="password"
                  required=""
                  placeholder="Password"
                />
                <div className="form-group text-center m-t-30">
                  <div className="col-xs-12">
                    <button className="btn btn-custom btn-bordred btn-block waves-effect waves-light">
                      Log In
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Messages />
      </div>
    );
  }
}

Auth = reduxForm({ form: "authForm" })(Auth);
const mapDispatchToProps = dispatch =>
  bindActionCreators({ login }, dispatch);
export default connect(
  null,
  mapDispatchToProps
)(Auth);
