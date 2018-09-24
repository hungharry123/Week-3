import React, { Component } from 'react';
import TopNav from './Top/';
import MainNav from './Main/';

import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <header className="header trans_300">
        <TopNav />
        <MainNav />
      </header>
    );
  }
}
