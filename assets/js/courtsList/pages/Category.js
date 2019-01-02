import React, {Component} from "react";
import ReactDOM from "react-dom";
import axios from "axios";

export default class Category extends Component {
  constructor() {
    super();
    this.state = {
      itemsData: []
    };
  }
  componentWillMount() {
    const self = this;
    const {match} = this.props;
    console.log(match.params.category);
    axios.get(`/api/${match.params.city}/${match.params.category}`).then(res => {
      self.setState({
        itemsData: res.data
      }, () => {
        console.log(self.state);
      });
    }).catch(err => {
      console.log(err);
    });
  }

  loopListings = () => {
    const {itemsData} = this.state;
    if (itemsData != undefined) {
      return itemsData.map((item, i) => {
        return (<div key={i} style={{
            cursor: 'pointer'
          }} className="item">
          <div className="image" style={{
              backgroundSize: 'center',
              backgroundImage: `url('${item.images[0]}')`
            }}>
            <div className="price">$ {item.price}</div>
            image</div>
          <div className="details">
            <i className="far fa-star"></i>
            <h5>{item.title}</h5>
            <h6>{item.city}</h6>
          </div>
        </div>)
      })
    }
  }

  carOptions() {
    const {match} = this.props;
    if (match.params.category === 'cars-and-trucks') {
      return (<div className="make-model-comp">
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
      </div>)
    }
  }

  handleChange() {
    // const name = event.target.name
    // const value = (event.target.type == 'checkbox') ? event.target.checked : event.target.value
    //
    // this.setState({
    //   [name]: value
    // }, () => {
    //   console.log(this.state);
    // })
  }

  render() {
    const {match, location, history} = this.props;
    return (<div id="listings-page">
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
          </div>{this.carOptions()}
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
          {/* white - box ends */}
        </div>
        {/* container2 ends */}
      </section>
      {/* list view ends here */}
    </div>)
  }
}
