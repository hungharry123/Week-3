import React, { Component } from 'react'
import { connect } from 'react-redux'
import qs from 'query-string'
import _ from 'lodash'
/*-------------------------------*/

import Shipping from '../../components/Shipping'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import ProductCategories from '../../components/ProductCategories/ProductCategories'
import FilterBySizeAndColor from '../../components/FilterBySizeAndColor/FilterBySizeAndColor'
import FilterByPrice from '../../components/FilterByPrice/FilterByPrice'
import TopFilters from '../../components/TopFilters/TopFilters'
import BottomFilters from '../../components/BottomFilters/BottomFilters'
import PageNavigationBar from '../../components/PageNavigationBar/PageNavigationBar'
import ProductsList from '../../components/ProductsList/ProductsList'

import { fetchCategories } from '../../store/actions/Categories/categories'
import config from '../../config'

class CategoryPage extends Component {
  constructor(props) {
    super(props)

    const searchParams = qs.parse(this.props.location.search)
    const { limit, page, minPrice, maxPrice, category, sort } = searchParams

    this.state = {
      renderedProducts: [],
      pagination: {
        skip: 0,
        limit: 10,
        total: 0
      },
    }

    this.filterAndSort = {
      limit: limit || 6,
      selectedCategoryId: category || 'all',
      currentPage: page || 1,
      filterPrice: {
        min: minPrice || 0,
        max: maxPrice || 1000,
      },
      selectedOption: sort || 'Default',
    }

    this.handlePriceRangeChange = this.handlePriceRangeChange.bind(this)
    this.handleSortByChange = this.handleSortByChange.bind(this)
    this.handlePageSizeChange = this.handlePageSizeChange.bind(this)
    this.handlePageChanged = this.handlePageChanged.bind(this)

  }

  componentDidMount() {
    this.props.dispatch(fetchCategories())
    this.updateProductsList()
  }
  updateProductsList() {
    const filter = {
      limit: +this.filterAndSort.limit,
      skip: this.filterAndSort.limit * (this.filterAndSort.currentPage - 1),
      where: {
        salePrice: {
          gt: +this.filterAndSort.filterPrice.min,
          lt: +this.filterAndSort.filterPrice.max,
        }
      }
    }
    if (this.filterAndSort.selectedCategoryId !== '' && this.filterAndSort.selectedCategoryId !== 'all') {
      filter.where.categoryId = this.filterAndSort.selectedCategoryId
    }
    if (this.filterAndSort.selectedOption) {
      filter.order = [this.filterAndSort.selectedOption]
    }
    this.generateQueryString()
    this.fetchProducts(filter)
  }

  fetchProducts(filter) {
    let url = config.url.product
    if (filter) {
      url += `?filter=${JSON.stringify(filter)}`
    }
    fetch(url)
      .then(res => res.json())
      .then(json => {
        this.setState({
          renderedProducts: json.body,
          pagination: json.pagination
        })
      })
      .catch(error => this.setState({ error }))
  }

  handlePriceRangeChange(newRange) {
    if (this.filterAndSort.filterPrice.max !== newRange[1] ||
      this.filterAndSort.filterPrice.min !== newRange[0]) {
      this.filterAndSort.filterPrice.max = newRange[1]
      this.filterAndSort.filterPrice.min = newRange[0]
      this.filterAndSort.currentPage = 1
      this.updateProductsList()
    }
  }

  handlePageSizeChange(pageSize) {
    if (this.filterAndSort.limit !== pageSize) {
      this.filterAndSort.limit = pageSize
      this.filterAndSort.currentPage = 1
      this.updateProductsList()
    }
  }

  handleSortByChange(sortBy) {
    if (this.filterAndSort.selectedOption !== sortBy) {
      this.filterAndSort.selectedOption = sortBy
      this.filterAndSort.currentPage = 1
      this.updateProductsList()
    }
  }

  handlePageChanged(page) {
    if (this.filterAndSort.currentPage != page) {
      this.filterAndSort.currentPage = page
      this.updateProductsList()
    }
  }

  generateQueryString() {
    let queryString = '?'

    queryString += `limit=${this.filterAndSort.limit}`
    queryString += `&page=${this.filterAndSort.currentPage}`
    queryString += `&minPrice=${this.filterAndSort.filterPrice.min}`
    queryString += `&maxPrice=${this.filterAndSort.filterPrice.max}`
    queryString += `&category=${this.filterAndSort.selectedCategoryId}`
    queryString += `&sort=${this.filterAndSort.selectedOption}`

    this.props.history.push({
      pathname: this.props.location.pathname,
      search: queryString
    })
  }

  render() {
    return (
      <div>
        <div className="container product_section_container">
          <div className="row" style={{ marginTop: 150 }}>
            <div className="col product_section clearfix">
              <Breadcrumb />

              <div className="sidebar">
                <ProductCategories categories={this.props.categories} />

                <FilterByPrice
                  max={1000}
                  defaultRange={this.selectedPriceRange}
                  onRangeChange={this.handlePriceRangeChange}
                />
                <FilterBySizeAndColor kind='size' />
                <FilterBySizeAndColor kind='color' />

              </div>
              <div className="main_content">
                <div className="product_sorting_container product_sorting_container_top">
                  <ul className="product_sorting">
                    <TopFilters
                      onPageSizeChange={this.handlePageSizeChange}
                      onSortByChange={this.handleSortByChange}
                    />
                  </ul>
                  <PageNavigationBar
                    total={Math.ceil(this.state.pagination.total / this.state.pagination.limit)}
                    current={this.filterAndSort.currentPage}
                    handlePageChanged={this.handlePageChanged}
                  />
                </div>
                <div className="product-grid">
                  <ProductsList productsList={this.state.renderedProducts} />
                </div>
                <div className="product_sorting_container product_sorting_container_bottom clearfix">
                  <PageNavigationBar
                    total={Math.ceil(this.state.pagination.total / this.state.pagination.limit)}
                    current={this.filterAndSort.currentPage}
                    handlePageChanged={this.handlePageChanged}
                  />
                  <ul className="product_sorting">
                    <BottomFilters onPageSizeChange={this.handlePageSizeChange} />
                  </ul>
                  <span className="showing_results">
                    Showing {this.filterAndSort.limit} of {this.state.pagination.total} results
                    </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Shipping />
      </div >
    )
  }
}
const mapStateToProps = state => ({
  categories: state.categories.items,
})


export default connect(mapStateToProps)(CategoryPage)