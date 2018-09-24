import React, { Component } from 'react';
import './New.css'

export default class New extends Component {
  render() {
    const _new = this.props._new;
    if (_new != "") {
      return (
        <div className="product_bubble product_bubble_left product_bubble_green d-flex flex-column align-items-center">
          <span>{_new}</span>
        </div>
      );
    }
    else {
      return (
        <div>

        </div>
      );
    }
  }
}