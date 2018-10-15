import React, {Component} from "react";
import { Link } from "react-router-dom";

class MenuItem extends Component {

  constructor() {
    super();
    this.state = {
        visible: false,
        subdrop: false
    }
    this.handleClick = this.handleClick.bind(this);
  };

  handleClick(){
    this.setState(state => ({
      visible: !state.visible,
      subdrop: !state.subdrop
    }));
  }

  render(){
    const {props} = this;
    return (
      <li className={(this.state.visible ? "visible " : "")}>
        <a href={props.items.length > 0 ? "javascript:void(0);" : props.url} onClick={this.handleClick} className={(this.state.subdrop ? "subdrop waves-effect" : "waves-effect")}>
          <i className={`mdi ${props.icon}`} />
          <span>{props.title}</span> <span className={props.items.length > 0 ? "menu-arrow" : ''} />
        </a>
        {props.items.length > 0
          ? props.items.map(item => (
              <ul className="list-unstyled" key={item._id}>
                <li>
                  <Link to={`${item.url}`}>{item.title}</Link>
                </li>
              </ul>
            ))
          : ""}
      </li>
    );
  }
};

export default MenuItem;