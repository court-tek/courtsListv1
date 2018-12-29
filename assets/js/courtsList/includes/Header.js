import React, {Component} from "react";
import ReactDOM from "react-dom";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      name: "Courtney"
    };
  }

  render() {
    return (<div className="myContainer">
      <header id="header">
      <div className="left-menu">
        <div className="logo">Courtslist</div>
        <div className="city">
          Washington D.C.<i className="fas fa-chevron-down"/>
        </div>
      </div>
      <div className="right-menu">
        <div className="user-image">
          <i className="fas fa-user-circle"/>
        </div>
        <div className="user-dropdown">
          my account<i className="fas fa-chevron-down"/>
        </div>
        <div className="post-btn">post to classifieds</div>
      </div>
    </header>
  </div>);
  }
}
export default Header;
