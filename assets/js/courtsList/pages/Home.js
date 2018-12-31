import React, { Component } from "react";
import axios from "axios";

class Home extends Component {
  _isMount = false;
  constructor() {
    super();
    this.state = {
      name: "Courtney",
      categoriesData: []
    };
  }

  componentWillMount() {

  }

  componentDidMount() {
    this._isMount = true;
    const self = this;
    
    axios
      .get(`/api/${match.params.city}`)
      .then(res => {
        if (this._isMount) {
          this.setState(
            {
              categoriesData: res.data
            },
            () => {
              console.log(self.state);
            }
          );
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentWillUnmount() {
    this._isMount = false;
  }

  loopCategories() {
    return this.state.categoriesData.map((category, i) => {
      const loopListings = () => {
        return category.listings.map((listing, index) => {
          return (
            <a href={`${category.title}/${listing.slug}`} className="link" key={index}>
              {listing.name}
            </a>
          )
        })
      }

      return (
        <div key={i} className="categories">
          {/* categories start */}
          <div className="title">{category.title}</div>
          <div className={`group-links ${(category.title == 'community' || category.title == 'jobs' || category.title == 'services' || category.title == 'personals') ? 'single-col' : ''}`}>
            {loopListings()}
          </div>
        </div> /* categories ends */
      );
    });
  };

  loopTags = () => {
    let testTags = ["a", "b", "c", "d", "w", "x", "y"];
    return testTags.map(item => {
      return (
        <div key={item} className="tag">
          Apple macbook
        </div>
      );
    });
  };
  render() {
    return (
      <div className="home">
        <div className="myContainer">
          <h1>Connecting People</h1>
          <section className="classifiedLinks">{this.loopCategories()}</section>
          <section className="trending">
            <input type="text" name="search" className="search" />
            <div className="title4">
              <i className="far fa-clock" />Trending Now
            </div>
            <div className="trending-tags">{this.loopTags()}</div>
          </section>
        </div>
      </div>
    );
  }
}
export default Home;
