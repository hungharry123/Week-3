import React, { Component } from 'react';
import './SaleOff.css'

export default class SaleOff extends Component {

  render() {
    const price = this.props.price;
    const ori_price = this.props.ori_price;
    if (price != ori_price) {
      return (

        <div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center">
          <span>-20%</span>
        </div>
      );
    }
    else {
      return "";
    }
  }
}