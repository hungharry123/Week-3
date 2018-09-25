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
    const { product } = this.props;
    const images = `assets/${product.image}`
    const _productItem = "product-item ";
    const _product = "product";

    return (
      <div className={_productItem}>
        <div className={_product}>
          <Thumbnail images={images} image={product.image} />
          <div className={product.favorite} />
          <SaleOff price={product.salePrice} ori_price={product.originalPrice} />
          <_New _new={product._new} />
          <div className="product_info">
            <Name name={product.name} />
            <Price price={product.salePrice} ori_price={product.originalPrice} />
          </div>
        </div>
        <AddToCard />
      </div>
    )
  }
}

export default Product;