import React, { PureComponent } from 'react'
import './AddToCart.css'

export default class AddToCart extends PureComponent {

  onClick = (product) => {
    const { onClickAddProduct } = this.props
    if (onClickAddProduct) {
      onClickAddProduct(product)
    }
  }
  render() {
    const { product } = this.props
    return (
      <div className="red_button add_to_cart_button">
        <span onClick={this.onClick(product)}>Add to cart</span>
      </div>
    )
  }
}