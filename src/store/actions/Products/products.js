export const FETCH_PRODUCTS = 'FETCH_PRODUCTS'
export const FILTER_PRODUCTS = 'FILTER_PRODUCTS'


export const fetchProducts = products => ({
  type: FETCH_PRODUCTS,
  payload: { products }
})


export const filterProducts = categoryId => ({
  type: FILTER_PRODUCTS,
  payload: { categoryId }
})
