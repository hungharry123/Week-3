import React, { Component } from 'react';
import './style.css';

export default class Thumbnail extends Component {

  render() {
    const picture = this.props.picture;
    return (
      <div className="product_image">
        <img src={picture} alt="" />
      </div>

    );
  }
}