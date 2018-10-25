import React, { PureComponent } from "react"
// import _ from 'lodash'
/*-------------------------------*/
// import productsList from '../../data/products'
// import categories from '../../data/categories'
import CategoryOptions from '../CategoryOptions/CategoryOptions'
import ProductsList from '../ProductsList/ProductsList'
/*-------------------------------*/
import "./NewArrivals.css"

export default class NewArrivals extends PureComponent {

  render() {
    return (
      <div className="new_arrivals">
        <div className="container">

          <div className="row">
            <div className="col text-center">
              <div className="section_title new_arrivals_title">
                <h2>New Arrivals</h2>
              </div>
            </div>
          </div>
          <CategoryOptions />
          <ProductsList />
        </div>
      </div>
    )
  }
}
