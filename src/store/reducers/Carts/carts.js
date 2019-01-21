import * as _ from 'lodash'

import {
  ADD_TO_CART,
  REMOVE_FROM_CART
} from '../../actions/Carts/carts'

let cart_items = localStorage.getItem('cart_items')
let items = []
let itemsCount = 0
if (cart_items) {
  items = JSON.parse(cart_items)
  itemsCount = items.reduce((acc, cur) => acc + cur.amount, 0)
}
const initialState = {
  items: items,
  total: itemsCount,
  totalPrice: 0
}

const CartReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const items = state.items
      let total = state.total

      const { product, amount } = action.payload
      const idx = _.findIndex(items, (item) => {
        return item.product.id === product.id
      })

      if (idx === -1) {
        items.push({
          product,
          amount: amount
        })
      } else {
        items[idx].amount = amount

        if (items[idx].amount <= 0) {
          items.splice(idx, 1)
        }
      }

      // re-calculate total price
      const totalPrice = items.reduce((acc, cur) => acc + cur.amount * cur.product.salePrice, 0)
      const itemsCount = items.reduce((acc, cur) => acc + cur.amount, 0)
      localStorage.setItem('cart_items', JSON.stringify(items))

      return {
        items,
        totalPrice,
        total: itemsCount,
      }
    }

    case REMOVE_FROM_CART: {
      const items = state.items
      let total = state.total
      let totalPrice = state.totalPrice
      const { productId } = action.payload
      const idx = _.findIndex(items, (item) => {
        return item.product.id === productId
      })

      if (idx !== -1) {
        total -= items[idx].amount
        totalPrice -= items[idx].product.salePrice * items[idx].amount
        items.splice(idx, 1)
      }

      return {
        items,
        total,
        totalPrice
      }
    }

    default: {
      return state
    }
  }
}

export default CartReducers
