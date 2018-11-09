import React, { Component } from 'react'
import ProductQuantity from '../ProductQuantity/ProductQuantity'

import './CartItem.css'

export default class CartItem extends Component {
  constructor(props) {
    super(props)

    // this.changeQuanlity = this.changeQuanlity.bind(this)
    this.updateQuantity = this.updateQuantity.bind(this)
    this.onClickRemove = this.onClickRemove.bind(this)
  }

  updateQuantity = (number) => {
    const { onUpdateAmount } = this.props
    if (onUpdateAmount) {
      onUpdateAmount(this.props.item.product, +value)
    }
  }
  onClickRemove(productId) {
    if (!productId) return

    const { onRemoveItem } = this.props
    if (onRemoveItem) {
      onRemoveItem(productId)
    }
  }

  render() {
    const { product, amount } = this.props.item
    return (
      <tr>
        <td>
          <img src={product.thumbnail} alt={product.thumbnail} />
        </td>
        <td>
          <h4>{product.name}</h4>
          <h5>Price: $ {product.salePrice}</h5>
        </td>
        <td>
          <ProductQuantity afterChange={(number) => this.updateQuantity(number)} />
        </td>
        <td>
          <button onClick={() => this.onClickRemove(product.id)} className="btn btn-remove btn-danger">Remove</button>
        </td>
      </tr>
    )
  }
}