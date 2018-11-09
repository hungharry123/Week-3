import React, { Component } from 'react'
import _ from 'lodash'
import { connect } from "react-redux"

import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import GalleryProductDetail from '../../components/GalleryProductDetail/GalleryProductDetail'
import ProductInformation from '../../components/ProductInformation/ProductInformation'
import Tabs from '../../components/Tabs/Tabs'
import ProductDetailDescription from '../../components/ProductDetailDescription/ProductDetailDescription'
import AdditionlInformation from '../../components/AdditionlInformation/AdditionlInformation'
import Reviews from '../../components/Reviews/Reviews'
import ShippingInformation from '../../components/Shipping/'

// import ProductDetail from '../../data/productDetail'

import { fetchAProduct } from '../../store/actions/Products/products'
import { addToCart } from '../../store/actions/Carts/carts'

import './ProductDetail.css'

class ProductDetailPage extends Component {
  constructor(props) {
    super(props)
    this.onAddProduct = this.onAddProduct.bind(this)
  }

  componentDidMount() {
    const id = this.props.match.params.id
    this.props.dispatch(fetchAProduct(id))

  }

  onAddProduct(product, amount) {
    if (!product || !amount) return
    this.props.dispatch(addToCart(product, amount))
  }

  render() {
    const { product } = this.props

    if (product) {
      const gallery = product.images || []

      const tabs = [
        {
          key: 'des',
          name: 'Description',
          content: <ProductDetailDescription {...product.shortDescription} />
        },
        {
          key: 'addition',
          name: 'Additional Information',
          content: <AdditionlInformation><p>COLOR:<span>Gold, Red</span></p>
            <p>SIZE:<span>L,M,XL</span></p></AdditionlInformation>
        },
        {
          key: 'reviews',
          name: 'Reviews (2)',
          content: <Reviews />
        }
      ]

      return (

        <div>
          <div className="container product_section_container">
            <div className="row" style={{ marginTop: 150 }}>
              <div className="col product_section clearfix">
                <Breadcrumb />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-7">
                {
                  gallery.length > 0 &&
                  <GalleryProductDetail gallery={gallery} />
                }

              </div>
              <div className="col-lg-5">
                {
                  product &&
                  <ProductInformation
                    product={product}
                    onAddProduct={this.onAddProduct}
                  />
                }

              </div>
            </div>
            <Tabs
              tabs={tabs}
              active="des"
            />
          </div>
          <ShippingInformation />
        </div>
      )

    }
    return (<div></div>)
  }
}

const mapStateToProps = state => ({
  product: state.products.item,
})

export default connect(mapStateToProps)(ProductDetailPage)