import React, { Component } from 'react'
import HomePage from './containers/HomePage/HomePage'
import CategoryPage from './containers/CategoryPage/CategoryPage'
import ProductDetail from './containers/ProductDetail/ProductDetail'
// import './App.css'

class App extends Component {

  state = {
    cart: {
      cartUrl: '#',
      itemCount: 0
    }
  }

  constructor(props) {
    super(props);

    this.onUpdateCart = (number) => {
      let { itemCount } = this.state.cart;
      this.setState({
        cart: {
          itemCount: number + itemCount
        }
      });
    }
  }

  render() {
    return (
      <div>
        <ProductDetail onUpdateCart={this.onUpdateCart} />
      </div>
    )
  }
}

export default App
