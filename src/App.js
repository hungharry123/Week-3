import React, { Component } from 'react'

import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import routes from './containers/routes'
// import './App.css'

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Header />
          {/* <Route exact path="/" component={HomePage} />
          <Route path="/categories" component={CategoryPage} />
          <Route path="/product/:id" component={ProductDetail} /> */}
          {routes.map((route, i) => <Routes key={i} {...route} />)}
          <Footer />
        </div>
      </Router>
    )
  }
}

const Routes = route => {
  if (route.path === '/') {
    return <Route
      exact
      path={route.path}
      render={props => (
        <route.component {...props} />
      )}
    />
  }
  return <Route
    path={route.path}
    render={props => (
      <route.component {...props} />
    )}
  />
}

export default App
