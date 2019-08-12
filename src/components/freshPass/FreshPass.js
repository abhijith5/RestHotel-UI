import React, { Component } from 'react';
import './FreshPass.css'

class FreshPass extends Component {
  render() {
    return (
      <div>
        <div className="uk-padding fresh-pass-box" >
          <div className="fresh-pass">
            <h1 style={{ marginBottom: 0 }}>FRESH PASS</h1>
            <span>SAVE UPTO 10% . FASTER CHECKOUT</span>
            <p>Buy meal pass and use it to pay for your future order. You get extra cashbacks and benefit with meal pass.</p>
          </div>
        </div>
        <div className="fresh-pass-how uk-text-center uk-padding">
          <h3>How does it work?</h3>
          <div class="uk-child-width-expand@s uk-text-center" uk-grid="true">
            <div>
              <div class="uk-card uk-card-default uk-card-body" style={{ borderBottom: 0 }}>
                <i class="fas fa-shopping-basket" style={{ color: "#FBD020", fontSize: "70px" }}></i>
                <p>Purchase a FreshPass</p>
              </div>
            </div>
            <div>
              <div class="uk-card uk-card-default uk-card-body" style={{ borderBottom: 0 }}>
                <i class="fas fa-wallet" style={{ color: "#FBD020", fontSize: "70px" }}></i>
                <p>Amount will be credited as FreshMoney*</p>
              </div>
            </div>
            <div>
              <div class="uk-card uk-card-default uk-card-body" style={{ borderBottom: 0 }}>
                <i class="fas fa-mobile-alt" style={{ color: "#FBD020", fontSize: "70px" }}></i>
                <p>FreshMoney will be auto applied</p>
              </div>
            </div>
          </div>
        </div>

        <div className="fresh-price uk-padding uk-container" style={{ marginBottom: "10%" }}>
          <div class="uk-child-width-expand@s uk-text-center" uk-grid="true">
            <div>
              <div class="uk-card uk-card-default uk-card-body uk-text-center" style={{ boxShadow: "5px 5px 10px", borderRadius: "5px" }}>
                <h4 className="uk-text-bold">MINI PASS</h4>
                <h3 className="uk-text-bold" style={{ marginTop: 0, marginBottom: 0 }}>999</h3>
                <p style={{ marginTop: 0 }} className="uk-text-bold">for 5 meals</p>
                <p>Get upto 10% off</p>
                <p>Pay Rs. 699 get Rs. 749</p>
                <span>Additional payment discounts available</span>
                <p>Cashback Validity: 6 month</p>
                <button class="uk-button uk-button-primary fresh-cart" style={{ backgroundColor: "#EA622D !important" }}>Buy</button>

              </div>
            </div>
            <div>
              <div class="uk-card uk-card-default uk-card-body uk-text-center" style={{ boxShadow: "5px 5px 10px", borderRadius: "5px" }}>
                <h4 className="uk-text-bold">MINI PASS</h4>
                <h3 className="uk-text-bold" style={{ marginTop: 0, marginBottom: 0 }}>999</h3>
                <p style={{ marginTop: 0 }} className="uk-text-bold">for 5 meals</p>
                <p>Get upto 10% off</p>
                <p>Pay Rs. 699 get Rs. 749</p>
                <span>Additional payment discounts available</span>
                <p>Cashback Validity: 6 month</p>
                <button class="uk-button uk-button-primary fresh-cart" style={{ backgroundColor: "#EA622D !important" }}>Buy</button>

              </div>
            </div>
            <div>
              <div class="uk-card uk-card-default uk-card-body uk-text-center" style={{ boxShadow: "5px 5px 10px", borderRadius: "5px" }}>
                <h4 className="uk-text-bold">MINI PASS</h4>
                <h3 className="uk-text-bold" style={{ marginTop: 0, marginBottom: 0 }}>999</h3>
                <p style={{ marginTop: 0 }} className="uk-text-bold">for 5 meals</p>
                <p>Get upto 10% off</p>
                <p>Pay Rs. 699 get Rs. 749</p>
                <span>Additional payment discounts available</span>
                <p>Cashback Validity: 6 month</p>
                <button class="uk-button uk-button-primary fresh-cart" style={{ backgroundColor: "#EA622D !important" }}>Buy</button>

              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default FreshPass