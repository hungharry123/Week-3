import React, { Component } from 'react'
// import { connect } from 'react-redux'
import PropTypes from 'prop-types'

export default class CategoryOptions extends Component {
  constructor(props) {
    super(props)
    this.handleItemClick = this.handleItemClick.bind(this)
  }

  handleItemClick(category) {
    const { onSelectedCategoryChanged } = this.props;
    if (onSelectedCategoryChanged) {
      onSelectedCategoryChanged(category);
    }
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
                      `${itemStaticClasses} ${category.id === this.props.selectedCategoryId
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
  selectedCategoryId: PropTypes.string.isRequired,
  onSelectedOptionChanged: PropTypes.func,
}

CategoryOptions.defaultProps = {
  onSelectedOptionChanged: null,
}