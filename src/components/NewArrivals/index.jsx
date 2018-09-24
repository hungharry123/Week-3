import React, { Component } from 'react';
import Product from './products/product';
import './NewArrivals.css';

export default class NewArrivals extends Component {
  render() {
    const product = this.props.product;
    const arrProducts = product.map(product =>
      <Product product={product} />
    );

    return (
      <div className="new_arrivals">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <div className="section_title new_arrivals_title">
                <h1>New Arrivals</h1>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col text-center">
              <div className="new_arrivals_sorting">
                <ul className="arrivals_grid_sorting clearfix button-group filters-button-group">
                  <li className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center active is-checked" data-filter="*">all</li>
                  <li className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center" data-filter=".women">women's</li>
                  <li className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center" data-filter=".accessories">accessories</li>
                  <li className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center" data-filter=".men">men's</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className='col'>
            <div className="product-grid" data-isotope='{ "itemSelector": ".product-item", "layoutMode": "fitRows" }'>
              {arrProducts}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
