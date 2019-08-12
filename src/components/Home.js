import React, { Component } from 'react';
import NavHeader from './nav-header/NavHeader';
import Nav from './nav/Nav';
import Footer from './footer/Footer';
import Section from './section/Section';

import { BrowserRouter as Router, Link, NavLink, Redirect, Prompt, Switch } from 'react-router-dom'
import Banner from './banner/Banner';
import Product from './product/Product';
const Route = require("react-router-dom").Route;

class Home extends Component {
  render() {
    return (
      <div>
        <NavHeader></NavHeader>
        <Nav></Nav>
        <Route exact path="/" component={Banner} />
        <Route exact path="/" component={() => (<Section name="Top Selling " />)} />
      

        <Footer></Footer>
      </div>
    )
  }
}
export default Home