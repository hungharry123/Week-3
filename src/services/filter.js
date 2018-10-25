import _ from 'lodash'

export default {
  filterProductByCategory(products, categoryId) {
    if (!categoryId) {
      return null
    }
    const filteredProducts = categoryId === 'all' ? products : _.filter(products, { categoryId: categoryId })

    return filteredProducts
  }
}