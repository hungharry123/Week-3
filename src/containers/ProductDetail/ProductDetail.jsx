import React, { Component } from 'react'
import _ from 'lodash'

import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import GalleryProductDetail from '../../components/GalleryProductDetail/GalleryProductDetail'
import ProductInformation from '../../components/ProductInformation/ProductInformation'
import Tabs from '../../components/Tabs/Tabs'
import ProductDetailDescription from '../../components/ProductDetailDescription/ProductDetailDescription'
import AdditionlInformation from '../../components/AdditionlInformation/AdditionlInformation'
import Reviews from '../../components/Reviews/Reviews'
import ShippingInformation from '../../components/Shipping/'

import ProductDetail from '../../data/productDetail'

import './ProductDetail.css'

export default class HomePage extends Component {
  state = {
    product: {}
  }

  componentDidMount() {
    this.updateProduct()

  }
  updateProduct() {
    ProductDetail.product(1, (data) => {
      this.setState({
        product: data
      })
    });
  }

  render() {
    const { onUpdateCart } = this.props
    const { product } = this.state
    const gallery = product.gallery || []
    const tabs = [
      {
        key: 'des',
        name: 'Description',
        content: <ProductDetailDescription {...product.description} />
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
              {gallery.length > 0 && <GalleryProductDetail gallery={gallery} />}
            </div>
            <div className="col-lg-5">
              <ProductInformation
                salePrice={product.salePrice}
                originalPrice={product.originalPrice}
                title={product.name}
                description={product.shortDescription}
                onUpdateCart={onUpdateCart}
              />
            </div>
          </div>
          <Tabs tabs={tabs} active="des" />
        </div>
        <ShippingInformation />
      </div>
    )
  }
}