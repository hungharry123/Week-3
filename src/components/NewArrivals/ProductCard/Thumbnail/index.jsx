import React, { Component } from 'react';
import './Thumnail.css';

export default class Thumbnail extends Component {

  render() {
    const images = this.props.images;
    const image = this.props.image;
    return (
      <div className="product_image">
        <img src={images} alt={image} />
      </div>

    );
  }
}