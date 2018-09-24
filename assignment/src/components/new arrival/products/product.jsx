import React, { Component } from 'react';
import Thumbnail from '../Product-card/Thumbnail/'
import Name from '../Product-card/Short-description/Name/'
import Price from '../Product-card/Short-description/Price/'
import SaleOff from '../Product-card/Additional/Sale-Off/'
import _New from '../Product-card/Additional/New'
import AddToCard from '../Product-card/Add-to-cart/'
import './style.css'

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