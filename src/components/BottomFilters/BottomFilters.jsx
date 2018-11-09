import React, { Component } from 'react'

export default class BottomFilters extends Component {
  constructor(props) {
    super(props)
    this.handlePageSizeChange = this.handlePageSizeChange.bind(this)
    this.setupDropDownListData()

    this.state = {
      selectedPageSize: this.pageSizeOptions[0],
    }
  }

  setupDropDownListData() {
    this.pageSizeOptions = [
      {
        text: '6',
        value: 6,
      },
      {
        text: '12',
        value: 12,
      },
      {
        text: '24',
        value: 24,
      }
    ]
  }

  handlePageSizeChange(pageSize) {
    this.setState({ selectedPageSize: pageSize })

    const { onPageSizeChange } = this.props
    if (onPageSizeChange) {
      onPageSizeChange(pageSize.value)
    }
  }

  renderPageSizeList() {
    const { selectedPageSize } = this.state
    return (
      <li>
        <span>Show</span>
        <span className="num_sorting_text">{selectedPageSize.value}</span>
        <i className="fa fa-angle-down" />
        <ul className="sorting_num">
          {this.pageSizeOptions.map(pageSize => (
            <li key={pageSize.value} className="num_sorting_btn" onClick={() => this.handlePageSizeChange(pageSize)}>
              <span>{pageSize.text}</span>
            </li>
          ))}
        </ul>
      </li>
    )
  }


  render() {
    return (
      <li>
        {this.renderPageSizeList()}
      </li>
    )
  }
}