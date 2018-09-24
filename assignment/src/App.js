import React, { Component } from 'react';
import Header from './components/header/'
import Banner from './components/hero banner/';
import CategoriesBar from './components/categories bar/';
import NewArrivals from './components/new arrival/';
import Deals from './components/deal of the week/';
import ShippingInformation from './components/shipping/';
import Footer from './components/footer/';
import Products from './data/products';
// import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />
        <CategoriesBar />
        <NewArrivals product={Products} />
        <Deals />
        <ShippingInformation />
        <Footer />
      </div>
    );
  }
}

export default App;
