import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavHeader from './components/nav-header/NavHeader';
import Nav from './components/nav/Nav';
import Banner from './components/banner/Banner';
import Section from './components/section/Section';
import Product from './components/product/Product';
import Footer from './components/footer/Footer';
import FreshClub from './components/freshClub/FreshClub';
import FreshPass from './components/freshPass/FreshPass';
import Login from './components/login/Login';
import Checkout from './components/checkout/Checkout';

import { BrowserRouter as Router, Link, NavLink, Redirect, Prompt } from 'react-router-dom'
import Routers from './components/Router';
const Route = require("react-router-dom").Route;

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavHeader></NavHeader>
          <Nav></Nav>
          <Route exact path="/" component={Banner} />
          <Route exact path="/" component={() => (<Section name="Top Selling " />)} />

          <Footer></Footer>

        </Router>
      </div>
    );
  }
}

export default App;
