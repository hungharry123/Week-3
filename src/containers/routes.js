import HomePage from './HomePage/HomePage'
import CategoryPage from './CategoryPage/CategoryPage'
import ProductDetail from './ProductDetail/ProductDetail'
import CartPage from './CartPage/CartPage'

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
  },
  {
    path: "/cart",
    component: CartPage
  }
]
