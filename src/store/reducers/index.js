import { combineReducers } from 'redux'

import products from './Products/products'
import categories from './Categories/categories'
import cart from './Carts/carts'

export default combineReducers({
  products: products,
  categories: categories,
  cart: cart,
})