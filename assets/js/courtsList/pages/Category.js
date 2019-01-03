import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

export default class Category extends Component {
  constructor() {
    super();
    this.state = {
      itemsData: [],
      min_price: 0,
      max_price: 10000,
      sort: "newest",
      select_view: "gallery"
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentWillMount() {
    const self = this;
    const { match } = this.props;
    console.log(match.params.category);
    axios
      .get(`/api/${match.params.city}/${match.params.category}`)
      .then(res => {
        self.setState(
          {
            itemsData: res.data
          },
          () => {
            console.log(self.state);
          }
        );
      })
      .catch(err => {
        console.log(err);
      });
  }

  loopListings = () => {
    const { itemsData } = this.state;
    if (itemsData != undefined) {
      return itemsData.map((item, i) => {
        return (
          <div
            key={i}
            style={{
              cursor: "pointer"
            }}
            className="item"
          >
            <div
              className="image"
              style={{
                backgroundSize: "center",
                backgroundImage: `url('${item.images[0]}')`
              }}
            >
              <div className="price">$ {item.price}</div>
              image
            </div>
            <div className="details">
              <i className="far fa-star" />
              <h5>{item.title}</h5>
              <h6>{item.city}</h6>
            </div>
          </div>
        );
      });
    }
  };

  carOptions() {
    const { match } = this.props;
    console.log(match.params.listing)
    if (match.params.listing == "cars-and-trucks") {
      return (
        <div className="make-model-comp">
          <div className="form-group make">
            <label>Make</label>
            <select name="make" className="make" onChange={this.handleChange}>
              <option value="subaru">subaru</option>
              <option value="toyota">toyota</option>
              <option value="ford">ford</option>
            </select>
          </div>
          <div className="form-group model">
            <label>Model</label>
            <select name="model" className="model" onChange={this.handleChange}>
              <option value="sti">WRX</option>
              <option value="4runner">4runner</option>
              <option value="mustangGt">mustang gt</option>
            </select>
          </div>
        </div>
      );
    }
  }

  handleChange(event) {
    const name = event.target.name;
    const value =
      event.target.type == "checkbox"
        ? event.target.checked
        : event.target.value;

    this.setState(
      {
        [name]: value
      },
      () => {
        console.log(this.state);
      }
    );
  }

  render() {
    const { match, location, history } = this.props;
    const { min_price, max_price, select_view, sort } = this.state;
    return (
      <div id="listings-page">
        {/* container starts */}
        <div className="myContainer">
          {/* filter starts here */}
          <section className="filter">
            {/* price options start */}
            <div className="form-group price">
              <label>Price</label>
              <div className="min-max">
                <select
                  name="min-price"
                  className="min-price"
                  onChange={this.handleChange}
                  value={min_price}
                >
                  <option value="0">0</option>
                  <option value="1000">1000</option>
                  <option value="5000">5000</option>
                </select>
                <select
                  name="max-price"
                  className="max-price"
                  onChange={this.handleChange}
                  value={max_price}
                >
                  <option value="1000">1000</option>
                  <option value="5000">5000</option>
                  <option value="10000">10000</option>
                </select>
              </div>
            </div>
            {this.carOptions()}
            {/* price options end */}
            <div className="form-group button">
              <div className="primary-btn">Update</div>
              <div className="reset-btn">Reset</div>
            </div>
          </section>
          {/* filter ends here */}
        </div>
        {/* container ends here */}
        {/* list view starts */}
        <section id="list-view">
          {/* container starts */}
          <div className="myContainer">
            {/* white-box starts */}
            <div className="white-box">
              {/* change view starts */}
              <section className="change-view">
                <div className="form-group view-dropdown">
                  <select
                    name="select-view"
                    className="select-view"
                    onChange={this.handleChange}
                    value={select_view}
                  >
                    <option value="Gallery">Gallery View</option>
                    <option value="list">List View</option>
                    <option value="thumb">Thumbnail View</option>
                  </select>
                </div>
                <div className="form-group sort-dropdown">
                  <select
                    name="sort"
                    className="sort-dropdown"
                    onChange={this.handleChange}
                    value={sort}
                  >
                    <option value="newest">Newest</option>
                    <option value="oldest">Oldest</option>
                  </select>
                </div>
              </section>
              {/* change view ends */}
              {/* items start here */}
              <section className="all-items">{this.loopListings()}</section>
              {/* items ends here */}
            </div>
            {/* white - box ends */}
          </div>
          {/* container2 ends */}
        </section>
        {/* list view ends here */}
      </div>
    );
  }
}
