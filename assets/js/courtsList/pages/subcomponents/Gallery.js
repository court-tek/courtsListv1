import React, { Component } from "react";
import ReactDOM from "react-dom";

let carImage = {};

let paraStyles = {
  textTransform: "uppercase",
  marginBottom: "1rem",
  color: "#424242"
};

export default class Gallery extends Component {
  constructor() {
    super();
    this.state = {
      allImgs: "",
      currentImg: "",
      currentIndex: 0
    };
    this.nextBtn = this.nextBtn.bind(this);
    this.prevBtn = this.prevBtn.bind(this);
    this.clickedThumb = this.clickedThumb.bind(this);
  }
  componentWillMount() {
    const allImgs = [
      "http://www.cars101.com/subaru/wrxsti/wrxsti17-interior12.jpg",
      "http://image.automotive.com/f/news/video-subaru-stis-record-setting-isle-of-man-tt-run-34383/62837847+w968/2011-subaru-impreza-wrx-sti-interior-view.jpg",
      "https://farm4.staticflickr.com/3823/13568385304_bdfdf9c867_b.jpg",
      "https://www.torquenews.com/sites/default/files/images/2018_subaru_wrx_sti_review.jpg",
      "https://www.cstatic-images.com/image/upload/crp/vp/images/family/11Subaru_Impreza_WRX_STI/2011%20Subaru%20Impreza%20WRX%20STI%20interior.jpg",
      "https://pictures.dealer.com/a/antelopevalleysubarusoa/1054/5ee638c99425d0f07b37d602fc33b1cfx.jpg"
    ];

    this.setState({
      allImgs,
      currentImg: allImgs[this.state.currentIndex]
    });
  }

  thumbLoop() {
    return this.state.allImgs.map((item, i) => {
      return (
        <div
          key={i}
          onClick={this.clickedThumb.bind(null, i)}
          className="thumb-img"
          style={{
            cursor: 'pointer', 
            backgroundImage: `url('${item}')` }}
        />
      );
    });
  }

  clickedThumb(i) {
    this.setState({
      currentIndex: i
    })
  }

  nextBtn() {
    if (this.state.currentIndex != this.state.allImgs.length - 1) {
      this.setState({
        currentIndex: this.state.currentIndex + 1
      });
    }
  }

  prevBtn() {
    if (this.state.currentIndex != 0) {
      this.setState({
        currentIndex: this.state.currentIndex - 1
      });
    }
  }

  render() {
    const { match, location, history } = this.props;
    return (
      <div className="gallery">
        <div className="slider">
          <div className="main-image">
            <div className="arrows left-arrow" onClick={this.prevBtn}>
              {"<"}
            </div>
            <div className="arrows right-arrow" onClick={this.nextBtn}>
              {">"}
            </div>
            <div
              className="image-1"
              style={{
                backgroundImage: `url('${
                  this.state.allImgs[this.state.currentIndex]
                }')`
              }}
            />
          </div>
        </div>
        <div className="thumbnails">{this.thumbLoop()}</div>
      </div>
    );
  }
}
