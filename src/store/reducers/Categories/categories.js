import {
  FETCH_CATEGORIES,
} from '../../actions/Categories/categories'

import categories from '../../../data/categories'

const defaultState = {
  items: [
    {
      id: 'all',
      name: 'all',
    },
    ...categories,
  ]
}

const CategoryReducers = (state = defaultState, action) => {

  switch (action.type) {
    case FETCH_CATEGORIES:
      return {
        ...state,
        items: action.payload.categories,
      }

    default:
      return state
  }
}

export default CategoryReducers
