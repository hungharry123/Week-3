import React, { Component } from 'react';
import './style.css'

export default class SaleOff extends Component {

  render() {
    const sale = this.props.sale;
    if (sale != "") {
      return (

        <div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center">
          <span>{sale}</span>
        </div>
      );
    }
    else {
      return "";
    }
  }
}