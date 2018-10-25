import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { filterProducts } from '../../store/actions/Products/products'

class CategoryOptions extends Component {
  constructor(props) {
    super(props)

    const categories = props.categories
    const defaultCategoryId = categories[0].id
    this.state = {
      selectedCategoryId: categories.length > 0
        ? (
          (
            defaultCategoryId
            && categories.findIndex(x => x.id === defaultCategoryId) >= 0
            && defaultCategoryId
          )
          || categories[0].id)
        : '',
    }

    this.handleItemClick = this.handleItemClick.bind(this)
  }

  handleItemClick(category) {
    console.log('category click in', category.id)
    this.setState(
      {
        selectedCategoryId: category.id
      })

    this.props.dispatch(filterProducts(category.id))

  }

  render() {
    const itemStaticClasses = 'grid_sorting_button button d-flex flex-column justify-content-center align-items-center'
    return (
      <div className="row align-items-center">
        <div className="col text-center">
          <div className="new_arrivals_sorting">
            <ul className="arrivals_grid_sorting clearfix button-group filters-button-group">
              {
                this.props.categories.map(category => (
                  <li
                    key={category.id}
                    className={
                      `${itemStaticClasses} ${category.id === this.state.selectedCategoryId
                        ? 'active is-checked' : ''}}`
                    }
                    onClick={() => this.handleItemClick(category)}
                  >
                    {category.name}
                  </li>
                )
                )
              }
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

CategoryOptions.propTypes = {
  categories: PropTypes.array.isRequired,
  defaultCategoryId: PropTypes.string,
  onSelectedOptionChanged: PropTypes.func,
}

CategoryOptions.defaultProps = {
  defaultCategoryId: '',
  onSelectedOptionChanged: null,
}

function mapStateToProps(state) {
  console.log('categories', state.categories.items)
  return {
    categories: state.categories.items,
  }
}
// var mapStateToProps = state => ({
//   categories: state.categories.items,
// })

// var mapDispatchToProps = null


export default connect(mapStateToProps)(CategoryOptions)