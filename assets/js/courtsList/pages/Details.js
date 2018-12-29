import React, { Component } from "react";
import ReactDOM from "react-dom";
import Gallery from "./subcomponents/Gallery";

let paraStyles = {
  textTransform: "uppercase",
  marginBottom: "1rem",
  color: "#424242"
};

export default class Details extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { match, location, history } = this.props;
    return (
      <div id="details-page">
        {/* container starts */}
        <div className="myContainer">
          {/* box starts */}
          <div className="white-box">
            <section className="submenu">
              <div className="direction">
                <a href="" className="prev">
                  Prev
                </a>
                <a href="" className="next">
                  Next
                </a>
              </div>

              <nav className="sub-links">
                <a href="">Moar Adds by User</a>
                <a href="">Print</a>
                <a href="">Share</a>
                <a href="">Contact Seller</a>
              </nav>
            </section>

            <section className="content-area">
              {/* left side of page */}
              <div className="media-column">
                <Gallery />
              </div>
              {/* right side of page */}
              <div className="details-column">
                <div className="date">Posted: Feb 28th</div>
                <h3 className="title">Black 2016 Subaru</h3>
                <h4 className="price">46,500</h4>
                <div className="more-details">
                  <div className="info">
                    <label>Vin</label>
                    <h5>11DDRGG4566HIIOM</h5>
                  </div>
                  <div className="info">
                    <label>Mileage</label>
                    <h5>34200</h5>
                  </div>
                  <div className="info">
                    <label>Transmission</label>
                    <h5>Manual</h5>
                  </div>
                  <div className="info">
                    <label>Vin</label>
                    <h5>11DDRGG4566HIIOM</h5>
                  </div>
                  <div className="info">
                    <label>Mileage</label>
                    <h5>34200</h5>
                  </div>
                  <div className="info">
                    <label>Transmission</label>
                    <h5>Manual</h5>
                  </div>
                </div>
                <div className="description">
                  <label>Description</label>
                  <p style={paraStyles}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                  <p style={paraStyles}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                  <p style={paraStyles}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </div>
              </div>
            </section>
          </div>
          {/* box ends */}
        </div>
        {/* container starts ends */}
      </div>
    );
  }
}
