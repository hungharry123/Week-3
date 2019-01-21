import React, { Component } from 'react';

import './HeroBanner.css';

const styles = {
  backgroundImage: "url(assets/images/slider_1.jpg)"
};

export default class Banner extends Component {
  render() {
    return (
      <div className="main_slider" style={styles}>
        <div className="container fill_height">
          <div className="row align-items-center fill_height">
            <div className="col">
              <div className="main_slider_content">
                <h6>Thời trang xuân hè 2019</h6>
                <h1>Giảm giá 30% cho các mặt hàng mới</h1>
                <div className="red_button shop_now_button"><a href="#">Mua ngay</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
