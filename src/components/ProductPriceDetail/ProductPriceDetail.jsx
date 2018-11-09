import React, { PureComponent } from 'react'
import Currency from '../Currency/Currency'

export default class ProductPriceDetail extends PureComponent {

  renderOriginalPrice(originalPrice) {
    return (
      <div className="product_price">
        <Currency price={originalPrice} />
      </div>
    )
  }

  renderOriginalAndSalePrice(originalPrice, salePrice) {
    return (
      <React.Fragment>
        <div className="original_price">
          <Currency price={originalPrice} />
        </div>
        <div className="product_price">
          <Currency price={salePrice} />
        </div>
      </React.Fragment>
    )
  }

  render() {
    const { originalPrice, salePrice } = this.props
    console.log(salePrice + originalPrice)
    return (

      salePrice === originalPrice ? this.renderOriginalPrice(originalPrice) : this.renderOriginalAndSalePrice(originalPrice, salePrice)

    )
  }
}