import React, { Component } from "react";
import ReactDOM from "react-dom";

class Listings extends Component {
  constructor() {
    super();
    this.state = {};
  }

  loopListings = () => {
    let testArray = [1, 2, 3, 4, 5, 6, 7, 8];

    return testArray.map(item => {
      return (<div key={item} className="item">
        <div className="image">
          <div className="price">
            $8900
          </div>
          image
        </div>
        <div className="details">
          <i className="far fa-star"></i>
          <h5>2014 Subaru WRX sti wagon</h5>
          <h6>Rockville, MD</h6>
        </div>
      </div>)
    })
  }

  render() {
    const { match, location, history } = this.props;
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
                <select name="min-price" className="min-price">
                  <option value="0">0</option>
                </select>
                <select name="max-price" className="max-price">
                  <option value="1000">1000</option>
                </select>
              </div>
            </div>
            {/* price options end */}
            <div className="form-group make">
              <label>Make</label>
              <select name="make" className="make">
                <option value="bmw">Subaru</option>
              </select>
            </div>
            <div className="form-group model">
              <label>Model</label>
              <select name="model" className="model">
                <option value="STI">WRX</option>
              </select>
            </div>

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
                <select name="select-view" className="select-view">
                  <option value="Gallery">Gallery View</option>
                  <option value="list">List View</option>
                  <option value="thumb">List View</option>
                </select>
              </div>
              <div className="form-group sort-dropdown">
                <select name="select-view" className="sort-dropdown">
                  <option value="Gallery">Newest</option>
                </select>
              </div>
            </section>
            {/* change view ends */}
            {/* items start here */}
            <section className="all-items">
              {this.loopListings()}
            </section>
            {/* items ends here */}
            </div>
            {/* white-box ends */}
            </div>
            {/* container2 ends */}
          </section>
          {/* list view ends here */}
      </div>
    );
  }
}
export default Listings;
