import React, { Component } from 'react';
import './Price.css'

export default class Price extends Component {
  render() {
    const price = this.props.price;
    const ori_price = this.props.ori_price;
    return (
      <div className="product_price">
        {price}
        <span > {ori_price} </span>
      </div>
    );
  }
}