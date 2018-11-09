import React, { PureComponent } from "react"
import { connect } from "react-redux"
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

import ProductCard from '../ProductCard/ProductCard'
import { addToCart } from '../../store/actions/Carts/carts'

import './ProductsList.css'

class ProductsList extends PureComponent {

  constructor(props) {
    super(props)

    this.clickOnProduct = this.clickOnProduct.bind(this)
    this.onClickAddProduct = this.onClickAddProduct.bind(this)
  }

  clickOnProduct(id) {
    this.props.history.push(`/product/${id}`);
  }

  onClickAddProduct(product) {
    this.props.dispatch(addToCart(product, 1));
  }

  render() {
    var props = this.props
    return (
      <div className="row">
        <div className="col products-list">
          {props.productsList.map(product =>
            <ProductCard
              key={product.id}
              product={product}
              clickOnProduct={this.clickOnProduct}
              onClickAddProduct={this.onClickAddProduct}
            />)}
        </div>
      </div>
    )
  }
}

ProductCard.propTypes = {
  productsList: PropTypes.array,
}

ProductCard.defaultProps = {
  productsList: [],
}

export default withRouter(connect()(ProductsList))
