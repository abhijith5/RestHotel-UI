
import React, { Component } from 'react';
import { BrowserRouter as Router, Link, NavLink, Redirect, Prompt, Switch } from 'react-router-dom'
import Section from './section/Section';
import Product from './product/Product';
import Home from './Home';
import Banner from './banner/Banner';
import Login from './login/Login';

const Route = require("react-router-dom").Route;

class Routers extends Component {
  render() {
    return (
      <Router>

        <Route exact path="/" component={Home} />
        {/* <Route exact path="/" component={() => (<Section name="Top Selling " />)} /> */}

      </Router>
    )
  }
}
export default Routers