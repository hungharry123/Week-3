import React, { PureComponent } from "react"
import { connect } from "react-redux"

import PropTypes from 'prop-types'
import ProductCard from '../ProductCard/ProductCard'
import './ProductsList.css'

class ProductsList extends PureComponent {
  render() {
    var props = this.props
    return (
      <div className="row">
        <div className="col products-list">
          {props.productsList.map(product => <ProductCard key={product.id} product={product} />)}
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

var mapStateToProps = state => ({
  productsList: state.products.filteredItems,
});

var mapDispatchToProps = null

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList)
