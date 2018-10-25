import React, { Component } from 'react'
import _ from 'lodash'
/*-------------------------------*/

import Shipping from '../../components/Shipping'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import ProductCategories from '../../components/ProductCategories/ProductCategories'
import FilterBySizeAndColor from '../../components/FilterBySizeAndColor/FilterBySizeAndColor'
import FilterByPrice from '../../components/FilterByPrice/FilterByPrice'
import TopFilter from '../../components/TopFilters/TopFilters'
import BottomFilters from '../../components/BottomFilters/BottomFilters'
import ProductsList from '../../components/ProductsList/ProductsList'

import productsList from '../../data/products'
import categories from '../../data/categories'

export default class CategoryPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      renderedProducts: [],
    }
    this.selectedPriceRange = [0, 800]
    this.selectedPageSize = 10
    this.sortBy = 'id'

    this.handlePriceRangeChange = this.handlePriceRangeChange.bind(this)
    this.handleSortByChange = this.handleSortByChange.bind(this)
    this.handlePageSizeChange = this.handlePageSizeChange.bind(this)
  }

  componentDidMount() {
    this.updateProductsList()
  }
  updateProductsList() {
    let products = [...productsList]
    const minPrice = this.selectedPriceRange[0]
    const maxPrice = this.selectedPriceRange[1]
    products = products
      .filter
      (
      product => product.salePrice >= minPrice
        && product.salePrice <= maxPrice
      )
      .slice(0, this.selectedPageSize)
    products = _.sortBy(products, this.sortBy)
    this.setState({ renderedProducts: products })
  }
  handlePriceRangeChange(newRange) {

    if (this.selectedPriceRange[0] !== newRange[0] || this.selectedPriceRange[1] !== newRange[1]) {
      this.selectedPriceRange = [...newRange]
      this.updateProductsList()
    }
  }

  handlePageSizeChange(pageSize) {
    if (this.selectedPageSize !== pageSize) {
      this.selectedPageSize = pageSize
      this.updateProductsList()
    }
  }

  handleSortByChange(sortBy) {
    if (this.sortBy !== sortBy) {
      this.sortBy = sortBy
      this.updateProductsList()
    }
  }

  render() {
    return (
      <div>
        <div className="container product_section_container">
          <div className="row" style={{ marginTop: 150 }}>
            <div className="col product_section clearfix">
              <Breadcrumb />

              <div className="sidebar">
                <ProductCategories categories={categories} />

                <FilterByPrice
                  max={1000}
                  defaultRange={this.selectedPriceRange}
                  onRangeChange={this.handlePriceRangeChange}
                />
                <FilterBySizeAndColor kind='size' />
                <FilterBySizeAndColor kind='color' />

              </div>
              <div className="main_content">
                <TopFilter onPageSizeChange={this.handlePageSizeChange} onSortByChange={this.handleSortByChange} />
                <div className="product-grid">
                  <ProductsList productsList={this.state.renderedProducts} />
                </div>
                <BottomFilters />
              </div>
            </div>
          </div>
        </div>

        <Shipping />
      </div >
    )
  }
}