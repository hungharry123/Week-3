import React, {Component} from 'react'
import {connect} from 'react-redux'

import ShippingInformation from '../../components/Shipping'
import CartItem from '../../components/CartItem/CartItem'

import {addToCart, removeFromCart} from '../../store/actions/Carts/carts'

class CartPage extends Component {
  constructor(props) {
    super(props)

    this.onUpdateAmount = this.onUpdateAmount.bind(this)
    this.onRemoveItem = this.onRemoveItem.bind(this)
  }

  onUpdateAmount(product, amount) {
    if (!product || !amount) return;

    this.props.dispatch(addToCart(product, amount))
  }

  onRemoveItem(productId) {
    if (!productId) return

    this.props.dispatch(removeFromCart(productId))
  }

  render() {
    return (
      <div>
        <div style={{marginTop: '200px'}} className="container">
          <table className="table">
            <thead>
            <tr>
              <th>Image</th>
              <th>Name and Price</th>
              <th>Amount</th>
            </tr>
            </thead>
            
            <tbody>
            {this.props.items && this.props.items.map((item) => (
              <CartItem
                key={item.product.id}
                item={item}
                onUpdateAmount={this.onUpdateAmount}
                onRemoveItem={this.onRemoveItem} 
              />
            ))}

            <tr>
              <td colSpan={2}>
                <h4>Total Price:</h4>
              </td>
              {this.props.totalPrice > 0 && <td><h4>$ {this.props.totalPrice}</h4></td>}
            </tr>
            </tbody>
          </table>
        </div>
        <ShippingInformation />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  items: state.cart.items,
  totalPrice: state.cart.totalPrice
})

export default connect(mapStateToProps)(CartPage)
