import React, { Component } from 'react'
import Header from '../../components/Header'
import Banner from '../../components/HeroBanner/'
import CategoriesBar from '../../components/CategoriesBar'
import NewArrivals from '../../components/NewArrivals/NewArrivals'
import Deals from '../../components/Deals/'
import ShippingInformation from '../../components/Shipping/'
import Footer from '../../components/Footer/'

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />
        <CategoriesBar />
        <NewArrivals />
        <Deals />
        <ShippingInformation />
        <Footer />
      </div>
    )
  }
}