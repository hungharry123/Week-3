import {
  FETCH_PRODUCTS,
  FILTER_PRODUCTS
} from '../../actions/Products/products'

import Filter from '../../../services/filter'
import ProductsList from '../../../data/products'

const defaultState = {
  items: ProductsList,
  filteredItems: ProductsList,
}

const ProductReducers = (state = defaultState, action) => {

  console.log('action type', action.type)
  switch (action.type) {

    case FETCH_PRODUCTS:
      return {
        ...state,
        items: action.payload.products,
        filteredItems: action.payload.products
      }

    case FILTER_PRODUCTS: {
      const items = state.items
      return {
        ...state,
        filteredItems: Filter.filterProductByCategory(items, action.payload.categoryId)
      }
    }
    default:
      return state
  }
}

export default ProductReducers
