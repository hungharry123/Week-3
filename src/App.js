import React, { Component } from 'react';
import Header from './components/Header/'
import Banner from './components/HeroBanner/';
import CategoriesBar from './components/CategoriesBar/';
import NewArrivals from './components/NewArrivals/';
import Deals from './components/Deals/';
import ShippingInformation from './components/Shipping/';
import Footer from './components/Footer/';
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
