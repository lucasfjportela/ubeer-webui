import React, { Component } from 'react';
import logo from './img/ubeer-logo.png';
import './App.css';
import NavBar from './ui/NavBar.js';
import Header from './ui/Header.js';
import Home from './container/Home';
import Beer from './container/Beer';
import Checkout from './container/Checkout';
import Footer from './ui/Footer';

class App extends Component {
 
  render() {

    const name = "UBEER";
    return (
      <div className="container-fluid bg-warning">
        <Header logo={logo} />
        <NavBar name={name} />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default App;
