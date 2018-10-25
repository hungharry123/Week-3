import { combineReducers } from 'redux'

import products from './Products/products'
import categories from './Categories/categories'

export default combineReducers({
  products: products,
  categories: categories,
})