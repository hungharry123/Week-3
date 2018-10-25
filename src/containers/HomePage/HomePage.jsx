import React, { Component } from 'react'

import Banner from '../../components/HeroBanner/'
import CategoriesBar from '../../components/CategoriesBar'
import NewArrivals from '../../components/NewArrivals/NewArrivals'
import Deals from '../../components/Deals/'
import ShippingInformation from '../../components/Shipping/'

export default class HomePage extends Component {
  render() {
    return (
      <div className="super-container">
        <Banner />
        <CategoriesBar />
        <NewArrivals />
        <Deals />
        <ShippingInformation />
      </div>
    )
  }
}