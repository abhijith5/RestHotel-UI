import React, { Component } from 'react';
import './Nav.css'

import { BrowserRouter as Router, Link, NavLink, Redirect, Prompt, Switch } from 'react-router-dom'
import Section from '../section/Section';
import Product from '../product/Product';
import Login from '../login/Login';
const Route = require("react-router-dom").Route;


class Nav extends Component {
  render() {
    return (
      <div>


        <nav className="uk-navbar-container" uk-navbar="true">
          <div className="uk-navbar-left">
            <ul className="uk-navbar-nav">
              <li className="uk-active">
                <Link to="/breakfast">Breakfast</Link>
              </li>
              <li>
                <Link to="/lunch">Lunch</Link>
              </li>
              <li>
                <Link to="/dinner">Dinner</Link>
              </li>
              <li>
                <Link to="/vegmains">Veg Mains</Link>
              </li>
              <li>
                <Link to="/nonvegmains">Non-Veg Mains</Link>
              </li>
              <li>
                <Link to="/desserts">Desserts</Link>
              </li>
              <li>
                <Link to="/chats">Chats</Link>
              </li>
              <li>
                <Link to="/biriyanis">Biriyanis</Link>
              </li>
            </ul>
          </div>

          <div className="uk-navbar-right">
            <ul className="uk-navbar-nav">
              <li><a href="#"><i className="fas fa-cart-plus ficon" uk-toggle="target: #offcanvas-usage"></i></a>
              </li>
              <li><a href="#"><i className="fas fa-map-marker-alt ficon"></i></a>
              </li>
              <li><a href="#"><i className="fas fa-user-alt ficon"></i></a>
                <div className="uk-navbar-dropdown">
                  <ul className="uk-nav uk-navbar-dropdown-nav">
                    <li>
                      <Link to="/login">Login</Link>
                    </li>
                    <li><a href="#">Signup</a></li>
                  </ul>
                </div>
              </li>

            </ul>
          </div>

        </nav>


        {/* <button className="uk-button uk-button-default uk-margin-small-right" type="button" uk-toggle="target: #offcanvas-usage">Open</button> */}

        <div id="offcanvas-usage" uk-offcanvas="flip: true">
          <div className="uk-offcanvas-bar">

            <button className="uk-offcanvas-close" type="button" uk-close="true"></button>

            <h3 style={{ margin: "auto", color: "black" }}>Your Cart</h3>

            <div className="uk-card uk-card-default uk-card-body" style={{ padding: 0 }}>
              <div className="fresh-cart-side">
                <img src="https://pngimage.net/wp-content/uploads/2018/06/veg-icon-png-2.png" height="auto" width="15" />
                <h5>Hydrabad Dum Biriyani</h5>
              </div>

              <div className="uk-flex fresh-cart-item">
                <p className="uk-text-bold" style={{ paddingLeft: 25 }}>Price:  456</p>


              </div>
            </div>


            <div className="uk-card uk-card-default uk-card-body" style={{ padding: 0 }}>
              <div className="fresh-cart-side">
                <img src="https://pngimage.net/wp-content/uploads/2018/06/veg-icon-png-2.png" height="auto" width="15" />
                <h5>Hydrabad Dum Biriyani</h5>
              </div>

              <div className="uk-flex fresh-cart-item">
                <p className="uk-text-bold" style={{ paddingLeft: 25 }}>Price:  456</p>

              </div>
            </div>

            <button class="uk-button uk-button-primary fresh-cart" style={{ color: "white", width: "100%", marginTop: 20 }}>Place Order 345</button>

          </div>
        </div>
        <Switch>

          <Route path="/breakfast" component={() => (<Section name="Breakfast" />)} />
          <Route path="/lunch" component={() => (<Section name="Lunch" />)} />
          <Route path="/dinner" component={() => (<Section name="Dinner" />)} />
          <Route path="/vegmains" component={() => (<Section name="Veg Mains" />)} />
          <Route path="/nonvegmains" component={() => (<Section name="Non Veg Mains" />)} />
          <Route path="/desserts" component={() => (<Section name="Desserts" />)} />
          <Route path="/chats" component={() => (<Section name="Chats" />)} />
          <Route path="/biriyanis" component={() => (<Section name="Biriyanis" />)} />
          <Route path="/food" component={Product} />
        </Switch>
      </div>
    )
  }
}

export default Nav