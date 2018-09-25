import React, { Component } from 'react';
import Product from './products/product';
import Data from '../../services/data';
import Filter from '../../services/filter';

import './NewArrivals.css';


export default class NewArrivals extends Component {
  state = {
    products: [],
    filters: [],
    categories: [],
    filter: "all"
  };
  async componentDidMount() {
    try {
      var getProducts = await Data.getProducts();
      var jsonProducts = await getProducts.json();
      var getCategories = await Data.getCategories();
      var jsonCategories = await getCategories.json();
      this.setState({
        products: jsonProducts.body,
        filters: jsonProducts.body,
        categories: jsonCategories.body
      });
    } catch (e) {
      console.log("Error:", e);
    }
  }

  FilterProduct(nameFilter) {
    debugger;
    if (nameFilter === "all") {
      this.setState({
        filters: this.state.products,
        filter: nameFilter
      });
    } else {
      const filteredProducts = Filter.filterProducts(this.state.products, nameFilter);
      this.setState({
        filter: nameFilter,
        filters: filteredProducts
      });
    }
  }
  activeSelected(value) {
    debugger;
    return "grid_sorting_button button d-flex flex-column justify-content-center align-items-center " + ((value === this.state.filter) ? "active" : "");
  }


  render() {
    var arrProducts = [], buttons = [];;
    this.state.filters.map(product => {
      arrProducts.push(
        <Product product={product} />
      );
    });

    /*     this.product = this.props.product;
        const arrProducts = this.product.map(product =>
          <Product product={product} />
        ); */

    buttons.push(
      <li className={this.activeSelected("all")} onClick={this.FilterProduct.bind(this, "all")}>all</li>
    );
    this.state.categories.map(category => {
      debugger;
      if (category.name) {
        buttons.push(
          <li className={this.activeSelected(category)} onClick={this.FilterProduct.bind(this, category)}>{category.name}</li>
        );
      }
    });
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
                <ul className="arrivals_grid_sorting clearfix button-group filters-button-group" >
                  {buttons}
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className='col'>
              <div className="product-grid">
                {arrProducts}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
