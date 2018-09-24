import React, { Component } from 'react';
import Thumbnail from '../ProductCard/Thumbnail/'
import Name from '../ProductCard/ShortDescription/Name/'
import Price from '../ProductCard/ShortDescription/Price/'
import SaleOff from '../ProductCard/Additional/SaleOff/'
import _New from '../ProductCard/Additional/New'
import AddToCard from '../ProductCard/AddToCard/'
import './products.css'

class Product extends Component {

  render() {
    const product = this.props.product;
    const item = product.item;
    const _productItem = "product-item " + item;

    return (
      // <div className="product-grid" data-isotope='{ "itemSelector": ".product-item", "layoutMode": "fitRows" }'>
      <div className={_productItem}>
        <div className={product.discount}>
          <Thumbnail picture={product.picture} />
          <div className={product.favorite} />
          <SaleOff sale={product.sale} />
          <_New _new={product._new} />
          <div className="product_info">
            <Name name={product.name} />
            <Price price={product.price} ori_price={product.ori_price} />
          </div>
        </div>
        <AddToCard />
      </div>
      // </div>
    )
  }
}

export default Product;