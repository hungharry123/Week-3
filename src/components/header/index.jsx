import React, { Component } from 'react';
import TopNav from './top/';
import MainNav from './main/';

import './style.css';

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
