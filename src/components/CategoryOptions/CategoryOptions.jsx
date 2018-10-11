import React, { Component } from "react"
import PropTypes from 'prop-types'


export default class CategoryOptions extends Component {
  constructor(props) {
    super(props)
    const { categories, defaultCategoryId } = this.props
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
    this.setState(
      {
        selectedCategoryId: category.id
      })

    const { onSelectedOptionChanged } = this.props
    if (onSelectedOptionChanged) {
      onSelectedOptionChanged(category)
    }
  }

  render() {
    const itemStaticClasses = 'grid_sorting_button button d-flex flex-column justify-content-center align-items-center'

    return (
      <div className="row align-items-center">
        <div className="col text-center">
          <div className="new_arrivals_sorting">
            <ul className="arrivals_grid_sorting clearfix button-group filters-button-group">
              {this.props.categories.map(category => (
                <li
                  key={category.id}
                  className={`${itemStaticClasses} ${category.id === this.state.selectedCategoryId ? 'active is-checked' : ''}}`}
                  onClick={() => this.handleItemClick(category)}
                >
                  {category.name}
                </li>
              ))}
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