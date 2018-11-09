/* 
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
 */

import config from '../../../config'

export const FETCH_PRODUCTS_BEGIN = 'FETCH_PRODUCTS_BEGIN'
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS'
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE'

export const FETCH_A_PRODUCT_BEGIN = 'FETCH_A_PRODUCT_BEGIN'
export const FETCH_A_PRODUCT_SUCCESS = 'FETCH_A_PRODUCT_SUCCESS'
export const FETCH_A_PRODUCT_FAILURE = 'FETCH_A_PRODUCT_FAILURE'

// FETCH
export const fetchProductsBegin = () => ({
  type: FETCH_PRODUCTS_BEGIN
})

export const fetchProductsSuccess = products => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: { products }
})

export const fetchProductsFailure = error => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: { error }
})

export function fetchProducts(filter) {
  return dispatch => {
    dispatch(fetchProductsBegin())
    let url = config.url.product
    if (filter) {
      url += `?filter=${JSON.stringify(filter)}`
    }
    return fetch(url)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchProductsSuccess(json))
        return json
      })
      .catch(error => dispatch(fetchProductsFailure(error)))
  }
}

export const fetchAProductBegin = () => ({
  type: FETCH_A_PRODUCT_BEGIN
})

export const fetchAProductSuccess = product => ({
  type: FETCH_A_PRODUCT_SUCCESS,
  payload: { product }
})

export const fetchAProductFailure = error => ({
  type: FETCH_A_PRODUCT_FAILURE,
  payload: { error }
})

export function fetchAProduct(id) {
  return dispatch => {
    dispatch(fetchAProductBegin())
    let url = `${config.url.product}/${id}`
    return fetch(url)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchAProductSuccess(json.body))
        return json.body
      })
      .catch(error => dispatch(fetchAProductFailure(error)))
  }
}