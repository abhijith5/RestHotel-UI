import React, { Component } from 'react';
import './FreshClub.css'

class FreshClub extends Component {
  render() {
    return (
      <div>
        <div className="fresh-club" style={{ height: "80vh" }}>
          <div className="uk-padding fresh-club-box">
            <h2 style={{ color: "white" }}>Fresh<span>Club</span></h2>
            <p>FreshClub gives you everything you’ve come to love about us, with a few special perks. It’s an offer as sweet as our desserts.</p>
            <div style={{ marginBottom: "5%" }} className="fresh-i uk-flex">
              <div className="d uk-flex">
                <i class="fas fa-tags fresh-club-i"></i><p>Minimum 10% Discount</p>
              </div>
              <div className="d uk-flex">
                <i class="fas fa-motorcycle fresh-club-i"></i><p>Fast Delivery</p>
              </div>
              <div className="d uk-flex">
                <i class="fas fa-concierge-bell fresh-club-i"></i><p>Exclusive Menu</p>
              </div>
            </div>
            <button class="uk-button uk-button-primary fresh-cart" >Join Fresh Club</button>

          </div>
        </div>
        <div className="uk-text-center">
          <div class="uk-card uk-card-default uk-card-body" style={{ boxShadow: "5px 5px 30px", marginBottom: 30, marginLeft: "20%", marginRight: "20%", marginTop: "-3%" }}>
            <h3 class="uk-card-title"></h3>
            <p>FreshClub gives you everything you’ve come to love about us, with a few special perks. It’s an offer as sweet as our desserts. You’re invited for a 15 day free trial period!</p>
            <button class="uk-button uk-button-primary fresh-cart" style={{backgroundColor:"#EA622D !important"}}>Sign Up</button>

          </div>
        </div>

      </div>
    )
  }
}
export default FreshClub