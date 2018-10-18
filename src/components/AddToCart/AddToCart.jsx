import React, { PureComponent } from 'react'
import './AddToCart.css'

export default class AddToCart extends PureComponent {

  onClick = (e) => {
    e.preventDefault()
    const { addToCart } = this.props
    if (typeof addToCart == "function") {
      addToCart()
    }
  }
  render() {
    return (
      <div className="red_button add_to_cart_button">
        <a onClick={e => this.onClick(e)} href="#">add to cart</a>
      </div>
    )
  }
}