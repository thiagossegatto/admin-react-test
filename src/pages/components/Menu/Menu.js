import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { listMenu } from "../../../store/ducks/menu";
import MenuItem from './MenuItem';

class Menu extends Component {

  componentWillMount() {
    const { listMenu } = this.props;
    listMenu();
  }

  render() {
    const { menu } = this.props.menu;
    return (
      <div id="sidebar-menu">
        <ul>
          <li className="text-muted menu-title">Navigation</li>
          {menu.map(me => (
            <MenuItem key={me._id} title={me.title} icon={me.icon} items={me.items} url={me.url} />
          ))}
        </ul>
        <div className="clearfix" />
      </div>
    );
  }
}

const mapStateToProps = state => ({ menu: state.menu });
const mapDispatchToProps = dispatch =>
  bindActionCreators({ listMenu }, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);
