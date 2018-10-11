import React, { Component } from 'react'
import PropTypes from 'prop-types'

class FilterBySizeAndColor extends Component {


  renderColor() {
    return (
      <div>
        <div className="sidebar_title">
          <h5>Color</h5>
        </div>

        <ul className="checkboxes">
          <li><i className="fa fa-square-o" aria-hidden="true" /><span>Black</span></li>
          <li className="active"><i className="fa fa-square" aria-hidden="true" /><span>Pink</span></li>
          <li><i className="fa fa-square-o" aria-hidden="true" /><span>White</span></li>
          <li><i className="fa fa-square-o" aria-hidden="true" /><span>Yellow</span></li>
          <li><i className="fa fa-square-o" aria-hidden="true" /><span>Green</span></li>
        </ul>

        <div className="show_more">
          <span><span>+</span>Show more</span>
        </div>
      </div>
    )
  }
  renderSize() {
    return (
      <div>
        <div className="sidebar_title">
          <h5>Size</h5>
        </div>

        <ul className="checkboxes">
          <li><i className="fa fa-square-o" aria-hidden="true" /><span>XS</span></li>
          <li className="active"><i className="fa fa-square" aria-hidden="true" /><span>S</span></li>
          <li><i className="fa fa-square-o" aria-hidden="true" /><span>M</span></li>
        </ul>
      </div>
    )
  }

  render() {

    const { kind } = this.props

    if (kind === 'color') { return (<div className="sidebar_section">{this.renderColor()}</div>) }

    else if (kind === 'size') { return (<div className="sidebar_section">{this.renderSize()}</div>) }

  }

}
FilterBySizeAndColor.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  defaultRange: PropTypes.array,
  onRangeChange: PropTypes.func,
}

FilterBySizeAndColor.defaultProps = {
  min: 0,
  max: 100,
  defaultRange: [0, 50],
  onRangeChange: null,
}

export default FilterBySizeAndColor