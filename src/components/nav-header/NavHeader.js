import React, { Component } from 'react';
import './NavHeader.css';
import '../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css'

class NavHeader extends Component {
  render() {
    return (
      <div>
        <nav className="uk-navbar-container" uk-navbar="true">
          <div className="uk-navbar-left">
            <a className="uk-navbar-item uk-logo" href="#"><img src="https://t3.ftcdn.net/jpg/01/17/59/56/240_F_117595693_ibntXTptiZRqo0yKTv9xB6zMOihrGhJo.jpg" height="auto" width="40" />Fresh Menu</a>
          </div>

          <div className="uk-navbar-right">

            <div>
              <div class="uk-button-group">
                <button className="uk-button uk-button-secondary btn1 btn0">Fresh Pass</button>
                <button className="uk-button uk-button-secondary btn2 btn0">Fresh Club</button>
                <button className="uk-button uk-button-secondary btn3 btn0">Offers</button>
                <button className="uk-button uk-button-secondary btn4 btn0">Download App</button>
              </div>
            </div>

          </div>

        </nav>
      </div>
    )
  }
}

export default NavHeader