import React, { Component } from "react";
import axios from "axios";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      name: "Courtney",
      cityDropdown: false,
      selectedCity: "Washington D.C.",
      citiesData: [],
    };
    this.clickedCity = this.clickedCity.bind(this);
    this.selectCity = this.selectCity.bind(this);
  }

  componentWillMount() {
    const self = this;
    axios
      .get(`apis/cities`)
      .then(function(res) {
        self.setState(
          {
            citiesData: res.data
          },
          function() {
            console.log(self.state);
          }
        );
      })
      .catch(err => {
        console.log(err);
      });
  }

  clickedCity() {
    const { cityDropdown } = this.state;
    this.setState({
      cityDropdown: !cityDropdown
    })
  }

  selectCity(city) {
    const { citiesData, selectedCity } = this.state;
    this.setState({
      selectedCity: city
    }, () =>{
      let city = citiesData.filter((item) =>{
        return item.title == selectedCity
      })
      const { match, history } = this.props;
        history.push('/washingtondc')
    })
  }

  citiesLoop() {
    const self = this;
    return this.state.citiesData.map((item, i) => {
      return <li key={i} onClick={this.selectCity.bind(null, item.title)}>{item.title}</li>;
    });
  }

  render() {
    const { cityDropdown } = this.state;
    return (
      <div className="myContainer">
        <header id="header">
          <div className="left-menu">
            <div className="logo">Courtslist</div>
            {/* Dropdown menu */}
            <div style={{ cursor: 'pointer' }} className={'city-dropdown'} onClick={this.clickedCity}>
              {this.state.selectedCity}
              <i className={`fas fa-chevron-down ${(cityDropdown) ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
              <div className={`scroll-area ${(cityDropdown) ? 'active' : ''}`}>
                <ul>{this.citiesLoop()}</ul>
              </div>
            </div>
            {/* Dropdown menu */}
          </div>
          <div className="right-menu">
            <div className="user-image">
              <i className="fas fa-user-circle" />
            </div>
            <div className="user-dropdown">
              my account<i className="fas fa-chevron-down" />
            </div>
            <div className="post-btn">post to classifieds</div>
          </div>
        </header>
      </div>
    );
  }
}
export default Header;
