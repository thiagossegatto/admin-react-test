import React, { Component } from "react";
import {Link} from 'react-router-dom';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { logout } from '../../../store/ducks/auth';

class UserBox extends Component {
  render() {
    const { name } = this.props.user.user;
    return (
      <div className="user-box">
        <div className="user-img">
          <img
            src="adminto/images/users/avatar-1.jpg"
            alt="user-img"
            title={name}
            className="rounded-circle img-thumbnail img-responsive"
          />
          <div className="user-status offline">
            <i className="mdi mdi-adjust" />
          </div>
        </div>
        <h5>
          <Link to="#">{name}</Link>
        </h5>
        <ul className="list-inline">
          <li className="list-inline-item">
            <Link to="#">
              <i className="mdi mdi-settings" />
            </Link>
          </li>

          <li className="list-inline-item">
            <button className="text-custom" onClick={this.props.logout}>
              <i className="mdi mdi-power" />
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({ user: state.auth.user });
const mapDispatchToProps = dispatch => bindActionCreators({ logout }, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserBox);
