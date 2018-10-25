import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './Main.css';

export default class MainNavigation extends Component {
  render() {
    return (
      <div className="main_nav_container">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-right">
              <div className="logo_container">
                <Link to="/">Nordic<span>Shop</span></Link>
              </div>
              <nav className="navbar">
                <ul className="navbar_menu">
                  <li><Link to="/">home</Link></li>
                  <li><Link to="/categories">shop</Link></li>
                  <li><a href="#">promotion</a></li>
                  <li><a href="https://nordiccoder.com/blog" target="blank">blog</a></li>
                  <li><a href="#">contact</a></li>
                </ul>
                <ul className="navbar_user">
                  <li className="checkout">
                    <a href="#">
                      <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                      <span id="checkout_items" className="checkout_items">2</span>
                    </a>
                  </li>
                </ul>
                <div className="hamburger_container">
                  <i className="fa fa-bars" aria-hidden="true"></i>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
