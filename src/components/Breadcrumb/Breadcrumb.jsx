import React, { Component } from 'react'

export default class Breadcrumb extends Component {
  render() {
    return (
      <div className="breadcrumbs d-flex flex-row align-items-center">
        <ul>

          <li>
            <a href="#"> Home </a>
          </li>

          <li >
            <i className="fa fa-angle-right" aria-hidden="true" />
            <a href="#"> Men's </a>
          </li>

          <li className="active">
            <i className="fa fa-angle-right" aria-hidden="true" />
            <a href="#"> Single Product </a>
          </li>

        </ul>
      </div>
    )
  }
}
