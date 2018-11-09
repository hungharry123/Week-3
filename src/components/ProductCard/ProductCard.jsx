import React, { Component } from "react"
import PropTypes from 'prop-types'

import './ProductCard.css'

export default class ProductCard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isFavorite: false,
    }
    this.handleFavoriteIconClicked = this.handleFavoriteIconClicked.bind(this)
    this.clickOnProduct = this.clickOnProduct.bind(this)
    this.onClickAddProduct = this.onClickAddProduct.bind(this)
  }

  handleFavoriteIconClicked() {
    this.setState(prevState => ({ isFavorite: !prevState }))
  }

  clickOnProduct(id) {
    if (!id) return

    const { clickOnProduct } = this.props
    if (clickOnProduct) {
      clickOnProduct(id)
    }
  }

  onClickAddProduct(product) {
    if (!product) return

    const { onClickAddProduct } = this.props
    if (onClickAddProduct) {
      onClickAddProduct(product)
    }
  }

  render() {
    const { product } = this.props
    const isSale = product.salePrice < product.originalPrice
    const originalPrice = isSale && <span>${product.originalPrice}</span>

    return (
      <div className="product-item">
        <div className="product" onClick={() => this.clickOnProduct(product.id)}>
          <div className="product_image">
            <img src={product.image} alt={product.name} />
          </div>

          <div className={`favorite favorite_left ${this.state.isFavorite ? 'active' : ''}`} />

          {isSale && (
            <div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center">
              <span>Sale</span>
            </div>
          )}

          <div className="product_info">
            <h6 className="product_name"><a href="#">{product.name}</a></h6>
            <div className="product_price">
              ${product.salePrice}
              ${originalPrice}
            </div>
          </div>
        </div>

        <div
          className="red_button add_to_cart_button"
          onClick={() => this.onClickAddProduct(product)}
        >
          add to cart
        </div>
      </div>
    )
  }
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
}

ProductCard.defaultProps = {}
