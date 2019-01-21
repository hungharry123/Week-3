import React, { PureComponent } from 'react'
import ProductQuantity from '../ProductQuantity/ProductQuantity'
import ProductPriceDetail from '../ProductPriceDetail/ProductPriceDetail'

import './ProductInformation.css'

export default class ProductInformation extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isFavorite: false,
      quantity: 1,
    };

    this.changeFavorite = this.changeFavorite.bind(this)
    this.onClickAddProduct = this.onClickAddProduct.bind(this)
    this.updateQuantity = this.updateQuantity.bind(this)
  }

  updateQuantity = (number) => {
    this.setState({
      quantity: number
    })
  }

  changeFavorite() {
    this.setState({
      isFavorite: !this.state.isFavorite,
    });
  }

  onClickAddProduct(product) {

    if (!product) return
    const { onAddProduct } = this.props
    if (onAddProduct) {
      onAddProduct(product, this.state.quantity)
    }
  }

  renderTitle(name, shortDescription) {
    return (
      <div className="product_details_title">
        <h2>{name}</h2>
        <p>{shortDescription}</p>
      </div>
    )
  }

  renderDelivery() {
    return (
      <div className="free_delivery d-flex flex-row align-items-center justify-content-center">
        <span className="ti-truck" /><span>Miễn phí vận chuyển</span>
      </div>
    )
  }

  renderStartRating() {
    return (
      <ul className="star_rating">
        <li><i className="fa fa-star" aria-hidden="true" /></li>
        <li><i className="fa fa-star" aria-hidden="true" /></li>
        <li><i className="fa fa-star" aria-hidden="true" /></li>
        <li><i className="fa fa-star" aria-hidden="true" /></li>
        <li><i className="fa fa-star-o" aria-hidden="true" /></li>
      </ul>
    )
  }

  renderProductColor() {
    return (
      <div className="product_color">
        <span>Select Color:</span>
        <ul>
          <li style={{
            background: '#e54e5d'
          }} />
          <li style={{
            background: '#252525'
          }} />
          <li style={{
            background: '#60b3f3'
          }} />
        </ul>
      </div>
    )
  }

  renderAddToCard(product) {
    return (
      <div className="red_button"
        onClick={() => this.onClickAddProduct(product)}
      >
        add to card
      </div>
    )
  }

  render() {
    const { product } = this.props
    const staticClass = "product_favorite d-flex flex-column align-items-center justify-content-center"

    return (
      <div className="product_details">
        {this.renderTitle(product.name, product.shortDescription)}
        {this.renderDelivery()}



        <ProductPriceDetail salePrice={product.salePrice} originalPrice={product.originalPrice} />
        {this.renderStartRating()}
        {this.renderProductColor()}
        <div className="quantity d-flex flex-column flex-sm-row align-items-sm-center">

          <span>Quantity:</span>
          <ProductQuantity
            value={this.state.quantity}  
            afterChange={(number) => this.updateQuantity(number)} 
          />
          {this.renderAddToCard(product)}

          <div className={`${staticClass} ${this.state.isFavorite ? 'active' : ''}`}
            onClick={this.changeFavorite}>
          </div>
        </div>
      </div>

    )
  }
}
