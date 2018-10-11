import React, { PureComponent } from "react"
import _ from 'lodash'
/*-------------------------------*/
import productsList from '../../data/products'
import categories from '../../data/categories'
import CategoryOptions from '../CategoryOptions/CategoryOptions'
import ProductsList from '../ProductsList/ProductsList'
/*-------------------------------*/
import "./NewArrivals.css"

export default class NewArrivals extends PureComponent {
  constructor(props) {
    super(props)

    this.categories = [
      {
        id: 'all',
        name: 'all',
      },
      ...categories
    ]

    this.state = {
      filteredProducts: productsList,
    }

    this.handleSelectedCategoryChanged = this.handleSelectedCategoryChanged.bind(this)
  }

  handleSelectedCategoryChanged(category) {
    if (!category || !category.id) return
    const filteredProducts =
      category.id === 'all' ? productsList : _.filter(productsList, { categoryId: category.id })
    this.setState({ filteredProducts })
  }

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

          <CategoryOptions
            categories={this.categories}
            defaultCategoryId={this.categories[0].id}
            onSelectedOptionChanged={this.handleSelectedCategoryChanged}
          />

          <ProductsList productsList={this.state.filteredProducts} />
        </div>
      </div>
    )
  }
}
