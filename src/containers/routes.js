import HomePage from './HomePage/HomePage'
import CategoryPage from './CategoryPage/CategoryPage'
import ProductDetail from './ProductDetail/ProductDetail'

export default [
  {
    path: "/",
    component: HomePage
  },
  {
    path: "/categories",
    component: CategoryPage
  },
  {
    path: "/product/:id",
    component: ProductDetail
  }
]
