export const FETCH_CATEGORIES = 'FETCH_CATEGORIES'


export const fetchCategories = categories => ({
  type: FETCH_CATEGORIES,
  payload: { categories }
})

